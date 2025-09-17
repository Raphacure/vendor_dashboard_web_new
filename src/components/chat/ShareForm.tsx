import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Tabs } from "antd";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useLocation } from "react-router";
import { CHAT_API } from "@/lib/config";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { allDirectChatsDto } from "../../pages/Chat/type";
import { ChatComponentStyled } from "./ChatComponent.styled";

type ShareFormDto = {
  onHide: () => void;
  usersList: allDirectChatsDto[];
  socket: any;
  currentUserChatId: string | null;
};

type selectedDataDto = {
  [key: string]: string;
};
const ShareForm = ({
  onHide,
  usersList,
  socket,
  currentUserChatId,
}: ShareFormDto) => {
  const [selectedUsers, setSelectedUsers] = useState<{
    [key: string]: string;
  }>({});
  const [selectedGroups, setSelectedGroups] = useState<{
    [key: string]: string;
  }>({});

  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const { state } = useLocation();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const sendGroupMessageRoute = `${CHAT_API}/api/group/add-group-message`;
  const sendMessageRoute = `${CHAT_API}/api/messages/addmsg`;

  const handleShare = async () => {
    console.log(state, currentUserChatId);

    if (!state || !currentUserChatId) {
      console.log("not matched");
      return;
    }

    const { data, type } = (state as any)?.data;

    console.log(data, type);

    const payload = {
      from: currentUserChatId,
      sharedMessage: {
        type: type,
        message: data,
      },
      message: msg,
      type: "TEXT",
      name: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
    };

    Object.keys(selectedGroups)?.forEach((groupId) => {
      socket.current.emit("group-chat", {
        group_id: groupId,
        to: groupId,
        ...payload,
      });
    });

    Object.keys(selectedUsers)?.forEach((chatId) => {
      socket.current.emit("send-msg", {
        to: chatId,
        ...payload,
      });
    });

    const selectedGroupKeys = Object.keys(selectedGroups);
    const selectedUsersKeys = Object.keys(selectedUsers);

    try {
      // Send API requests for group chats
      const groupPromises = selectedGroupKeys?.map((groupId) =>
        axios.post(sendGroupMessageRoute, {
          to: groupId,
          ...payload,
          chat_type: "GROUP_CHAT",
        })
      );

      // Send API requests for individual chats
      const userPromises = selectedUsersKeys?.map((userId) =>
        axios.post(sendMessageRoute, {
          to: userId,
          ...payload,
          chat_type: "INDIVIDUAL_CHAT",
        })
      );

      // Wait for all promises to resolve
      const groupResult = await Promise.allSettled(groupPromises || []);
      const userResult = await Promise.allSettled(userPromises || []);

      let selectedGroupsClone = { ...selectedGroups };
      let selectedUsersClone = { ...selectedUsers };

      groupResult.forEach((result, i) => {
        if (result.status === "fulfilled") {
          console.log("Success:", result.value.data);
          delete selectedGroupsClone[selectedGroupKeys?.[i]];
        } else {
          console.error("Failed:", result.reason.message); // Error details
        }
      });
      userResult.forEach((result, i) => {
        if (result.status === "fulfilled") {
          console.log("Success:", result.value.data);
          delete selectedUsersClone[selectedUsersKeys?.[i]];
        } else {
          console.error("Failed:", result.reason.message); // Error details
        }
      });

      if (
        Object.keys(selectedGroupsClone)?.length == 0 &&
        Object.keys(selectedUsersClone)?.length == 0
      ) {
        toast.success("Shared Successfull");
        onHide();
      } else {
        setSelectedGroups(selectedGroupsClone);
        setSelectedUsers(selectedUsersClone);
        setError("Failed to share....");
      }
    } catch (error) {
      console.log(error);
      console.error("Error sending messages:", error);
    }
  };

  return (
    <ChatComponentStyled>
      <Modal
        show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="add-user-model-popup"
      >
        <ChatComponentStyled>
          <IoMdClose onClick={onHide} className="absolute closeBtn" />
        </ChatComponentStyled>
        <Modal.Body
          className={`modalBodyDefault alert-model-popup-sec dynamic_class_`}
        >
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Users",
                key: "1",
                children: (
                  <ChatComponentStyled>
                    <Row className="mb-2">
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Search here..."
                          name=""
                          value={searchText ?? ""}
                          onChange={(e) => {
                            setSearchText(e?.target?.value);
                          }}
                        />
                      </Col>
                    </Row>

                    <div className="particpantsListContainer">
                      {Array.isArray(usersList) &&
                        usersList?.length > 0 &&
                        usersList?.map((user) => {
                          try {
                            const name = user?.opponent?.[0]?.name;
                            const chatId = user?.opponent?.[0]?._id;
                            const regex = new RegExp(searchText, "i");
                            if (!searchText || regex.test(name)) {
                              return (
                                <div className="p-2 d-flex align-items-center ">
                                  <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    onChange={() => {
                                      let temp: any = { ...selectedUsers };

                                      if (temp[chatId]) {
                                        delete temp[chatId];
                                      } else {
                                        temp[chatId] = name;
                                      }
                                      setSelectedUsers(temp);
                                    }}
                                    checked={
                                      selectedUsers[chatId as any]
                                        ? true
                                        : false
                                    }
                                    className="mr-2"
                                  />
                                  {name}
                                </div>
                              );
                            }
                            return null;
                          } catch (error) {
                            console.log(error);
                            return null; // Return null for error case
                          }
                        })}
                    </div>
                  </ChatComponentStyled>
                ),
              },
            ]}
          />
        </Modal.Body>

        <Modal.Footer>
          <div className="w-100 px-3 d-flex justify-content-between">
            <div className="flex-fill mr-2">
              {/* message text */}
              <ChatComponentStyled>
                <Form.Control
                  type="text"
                  placeholder="type message here..."
                  name=""
                  className="mb-1 w-100"
                  value={msg ?? ""}
                  onChange={(e) => {
                    setMsg(e?.target?.value);
                  }}
                />
                <div className="mb-1 capitalize">
                  <span className="fbold">Selected Users: </span>{" "}
                  {Object.values(selectedUsers)
                    ?.toString()
                    ?.replace(/,/g, ", ") || "nill"}
                </div>
                <div className="capitalize">
                  <span className="fbold">Selected Group: </span>{" "}
                  {Object.values(selectedGroups)
                    ?.toString()
                    ?.replace(/,/g, ", ") || "nill"}
                </div>
              </ChatComponentStyled>
            </div>
            <ChatComponentStyled>
              <Button
                variant="primary"
                className="shareBtn"
                onClick={handleShare}
              >
                Share
              </Button>
            </ChatComponentStyled>
          </div>
          {error && <p className="text-danger w-100 ml-3">{error}</p>}
        </Modal.Footer>
      </Modal>
    </ChatComponentStyled>
  );
};

export default ShareForm;
