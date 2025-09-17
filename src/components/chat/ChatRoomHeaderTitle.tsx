import React, { useContext, useMemo } from "react";
import { Dropdown, MenuProps } from "antd";
import { FaAngleDown } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { ChatContext } from "../../pages/Chat/context/ChatConext";

const ChatRoomHeaderTitle = () => {
  const { currentChat, onlineUsers, typingStatus } = useContext(ChatContext);

  const onClick: MenuProps["onClick"] = ({ key }) => {};
  const items = useMemo(() => {
    const item = [
      {
        key: "INFO",
        label: "Info",
        icon: <IoInformationCircleOutline size={18} />,
      },
    ];

    return item;
  }, [currentChat]);
  return (
    <>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <div className="d-flex align-items-center">
          <div>
            <p className="mb-0 userName">{currentChat?.name}</p>

            <div className="d-flex align-items-center indicator">
              {onlineUsers?.includes(currentChat?.chatId ?? "") && (
                <p className="mb-0 mr-3">Active Now</p>
              )}
              {typingStatus?.[currentChat?.chatId ?? ""]?.length > 0 && (
                <p className="mb-0">
                  {typingStatus?.[currentChat?.chatId ?? ""]
                    ?.toString()
                    .replaceAll(",", ", ")}{" "}
                  typing...{" "}
                </p>
              )}
            </div>
          </div>
          <FaAngleDown className="ml-2" />
        </div>
      </Dropdown>
    </>
  );
};

export default ChatRoomHeaderTitle;
