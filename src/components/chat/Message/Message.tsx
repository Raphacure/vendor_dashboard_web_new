import React, { useContext } from "react";
import FileClamp from "../File/FileClamp";
import { ChatContext } from "../../../pages/Chat/context/ChatConext";
import { messageDto } from "../../../pages/Chat/type";
import UserProfileImage from "../UserProfileImage";
import { Dropdown, Tooltip } from "antd";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { LuReplyAll, LuSmilePlus } from "react-icons/lu";
import ShareMessages from "../ShareMessages";
import DOMPurify from "dompurify";
import { FaAngleDown } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import { ChatStyle } from "@/pages/Chat/Chat";

const Message = ({ msg }: { msg: messageDto }) => {
  const {
    getRelativeTimeDifference,
    reply,
    setReply,
    handleReact,
    currentChat,
    userChatId,
  } = useContext(ChatContext);

  let message = "";

  if (msg?.message) {
    if (msg?.isShared) {
      let temp = JSON.parse(msg?.message ?? "");

      console.log(temp, typeof temp);

      if (typeof temp == "string") {
        message = temp;
      } else {
        Object.keys(temp)?.forEach((key: string) => {
          message = message + `${key}: ${temp?.[key]} <br/>`;
        });
      }
    } else {
      message = msg?.message;
    }
  }

  const replyTo: messageDto = msg.replyTo as messageDto;

  const scrollToParentMessage = (messageId: string) => {
    const parentMessageElement = document.getElementById(`#${messageId}`);
    if (parentMessageElement) {
      parentMessageElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      parentMessageElement.classList.add("highlight");
      setTimeout(() => {
        parentMessageElement.classList.remove("highlight");
      }, 3000);
    }
  };

  const dropDownOptions = [
    {
      key: "1",
      label: (
        <ShareMessages
          tooltipTitle="Share"
          data={{
            data: {
              content: msg?.message,
              attachments: msg?.attachments,
            },
            type: msg?.type,
            isKeyValuedData: false,
          }}
          replacePath={true}
          iconType="SHARE"
        />
      ),
    },
    {
      key: "2",
      label: (
        <Tooltip title="reply">
          <LuReplyAll
            onClick={() => {
              setReply(msg);
            }}
          />
        </Tooltip>
      ),
    },
  ];

  if (!msg?.fromSelf) {
    dropDownOptions.push({
      key: `${dropDownOptions?.length + 1}`,
      label: (
        <Tooltip title="emoji">
          <Dropdown
            arrow
            placement="topCenter"
            menu={{
              items: [
                {
                  key: "1",
                  label: (
                    <Picker
                      data={data}
                      onEmojiSelect={(e: any) => {
                        handleReact({
                          chatType: currentChat?.chatType || "INDIVIDUAL_CHAT",
                          emoji: e?.native,
                          messageId: msg?._id,
                          to: currentChat?.chatId || "",
                          from: userChatId,
                        });
                      }}
                    />
                  ),
                },
              ],
            }}
          >
            <LuSmilePlus />
          </Dropdown>
        </Tooltip>
      ),
    });
  }

  return (
    <ChatStyle>
      <div className="messages-container">
        <div
          key={msg?._id}
          className={`message-wrapper w-full flex align-items-center ${
            msg?.fromSelf ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`message-content message-bubble  ${
              msg?.fromSelf ? "mine-message" : "opponent-message"
            }`}
          >
            {/* Message */}
            <div className={`w-full`}>
              {msg?.type == "ATTACHMENT" && (
                <FileClamp
                  fileCardClassname="attachmentBox"
                  frameClassname="attachmentsList"
                  files={msg?.attachments ?? []}
                />
              )}

              {msg?.message && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(message),
                  }}
                />
              )}
            </div>

            {/* Time */}
            <div className={`message-time d-flex justify-end`}>
              {new Date(msg?.createdAt)?.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {msg?.fromSelf && <CheckCircle className="delivery-icon" />}
            </div>
          </div>
        </div>
      </div>
    </ChatStyle>
  );

  // return (
  //   <div
  //     key={msg?._id}
  //     id={`#${msg?._id}`}
  //     className={`msgContainer ${msg?.fromSelf ? "justify-content-end" : "justify-content-start"
  //       }`}
  //   >
  //     <div className="msg">
  //       {/* options */}
  //       {/* <div
  //         className={`overlay-options
  //                         ${msg?.fromSelf ? "option-left" : "option-right"}
  //                         `}
  //       >
  //         <ShareMessages
  //           tooltipTitle="Share"
  //           data={{
  //             data: {
  //               content: msg?.message,
  //               attachments: msg?.attachments,
  //             },
  //             type: msg?.type,
  //             isKeyValuedData: false,
  //           }}
  //           replacePath={true}
  //           iconType="SHARE"
  //         />
  //         <Tooltip title="reply">
  //           <LuReplyAll />
  //         </Tooltip>

  //       </div> */}
  //       {/* <div className="msgOptions"></div> */}
  //       <div
  //         className={`d-flex justify-content-end ${msg?.fromSelf ? "" : "justify-content-end flex-row-reverse"
  //           }`}
  //       >
  //         <div className={`d-flex align-items-start justify-content-between ${replyTo  && !msg?.fromSelf ? "flex-row-reverse" : ""}`}>
  //           {(replyTo as messageDto) && <div

  //             onClick={() => {
  //               scrollToParentMessage(replyTo?._id)
  //             }}
  //             className="messageReply mr-1 d-flex align-items-center justify-content-center">
  //             <LuReplyAll className="mr-1" /> Replied
  //           </div>
  //           }
  //           {msg?.message && (
  //             <div
  //               className="textMsg"
  //               dangerouslySetInnerHTML={{
  //                 __html: DOMPurify.sanitize(message),
  //               }}
  //             ></div>
  //           )}
  //         </div>

  //         {/* drop drown options */}
  //         <div>
  //           <Dropdown menu={{
  //             items: dropDownOptions,
  //           }} placement={msg?.fromSelf ? "bottomRight" : "bottomLeft"} arrow >
  //             <FaAngleDown />
  //           </Dropdown>
  //           <UserProfileImage
  //             name={msg?.senderName}
  //             url={msg?.senderImage ?? null}
  //             className="msgProfileImg"
  //           />
  //         </div>

  //       </div>
  //       {msg?.type == "ATTACHMENT" && (
  //         <FileClamp
  //           fileCardClassname="attachmentBox"
  //           frameClassname="attachmentsList"
  //           files={msg?.attachments ?? []}
  //         />
  //       )}
  //       <div
  //         className={`sentBy ${msg?.fromSelf ? "sendByMe" : "sendByOthers"} `}
  //       >
  //         {msg?.fromSelf ? "" : msg?.senderName}
  //         {"  "}
  //         {getRelativeTimeDifference(msg?.createdAt)}
  //       </div>

  //       {Object.keys(msg?.reactions || {})?.length > 0 && <div className={`reactionsDiv ${msg?.fromSelf ? 'justify-content-end' : 'justify-content-start'}`}>
  //         {
  //           Object.keys(msg?.reactions || {})?.map((item: any) => <ul className="reactionCard" key={item}>
  //               <li>{item}</li>
  //               <li>{msg?.reactions?.[item] || 0}</li>
  //             </ul>)
  //         }
  //       </div>}
  //     </div>
  //   </div>
  // );
};

export default Message;
