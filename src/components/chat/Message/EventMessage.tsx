import React, { useContext } from "react";
import { messageDto } from "../../../pages/Chat/type";
import { ChatContext } from "../../../pages/Chat/context/ChatConext";

const EventMessage = ({ msg }: { msg: messageDto }) => {
  const { userChatId } = useContext(ChatContext);
  const isEventByMe = userChatId == msg?.event?.created_by;

  const fromName = isEventByMe ? "Me" : msg?.senderName;

  if (msg?.event?.type == "CHAT_INITIATED") {
    return <div className="eventMessageFrame">{fromName} initiated chat.</div>;
  } else if (msg?.event?.type == "GROUP_CREATED") {
    return <div className="eventMessageFrame">{fromName} created group.</div>;
  }
  return <></>;
};

export default EventMessage;
