import React from "react";

export type ChatContextType = {
  messages: messageDto[];
  reply: messageDto | null,
  setReply: React.Dispatch<React.SetStateAction<messageDto | null>>
  handleReact: (prop: inCommingReactionsDto) => Promise<void>
  sendMessage: (prop: {
    msg: string;
    urls?: string[];
    type: messageTypeDto;
    chatType: chatTypes;
  }) => Promise<void>;
  userChatId: string;
  allInitiatedChatUsersApi: () => void;
  allDirectChatLists: allDirectChatsDto[];
  // activeTab: chatTypes;
  // setActiveTab: React.Dispatch<React.SetStateAction<chatTypes>>;
currentChat: opponentDto | undefined;
  setCurrentChat: React.Dispatch<React.SetStateAction<opponentDto | undefined>>;
  handleOpenChat: (prop: { opponent: opponentDto; type: chatTypes }) => void;
  onlineUsers: string[];
  typingStatus: typingStatusDto;
  fetchMessages: () => void;
  typingStatusChangeHandler: (flag: boolean) => void;
  handleSendEvent: (prop: {
    event?: eventDto;
    chatType: chatTypes;
    to: number;
  }) => void;
  getRelativeTimeDifference: (prop: string) => string;
  isPipMode: boolean
};

export type inCommingReactionsDto = { emoji: string; to: string; messageId: string; chatType: chatTypeDto, from : string }

export type messageDto = {
  _id: string;
  fromSelf: boolean;
  message?: string;
  attachments?: string[];
  senderName: string;
  type?: messageTypeDto;
  createdAt: string;
  shared_message?: {
    type: messageTypeDto;
    content: string;
  } | null;
  event?: eventDto;
  senderImage: string | undefined;
  replyTo?: messageDto
  reactions?: {
    [item: string]: number;
  },
  isShared?: boolean;
};

export type typingStatusDto = {
  [key: string]: string[];
};
export type chatTypes = "INDIVIDUAL_CHAT";
export type ChatDto = {
  id?: string;
  chatId: string;
  name: string;
  photo: string;
};

export type doctorsListDto = {
  [key: string] : {
    name: string,
    photo: string
  } 
} 

export type opponentDto = {
  id?: string;
  chatId: string;
  unReadMessageCount: number;
  chatType: chatTypeDto;
  tag?: string;
  username?: string;
  // first_name: string;
  // last_name: string;
  name: string;
  photo: string;
};

export type chatTypeDto = "INDIVIDUAL_CHAT";
export type messageTypeDto = "TEXT" | "ATTACHMENT";
export type eventDto = {
  type: "CHAT_INITIATED";
  created_by: string;
  created_for?: string;
};
export type allDirectChatsDto = {
  _id: string;
  latestMessage: {
    _id: string;
    chat_type: chatTypeDto;
    message: {
      type: messageTypeDto;
      content: string;
    };
    sender: string;
    to: string;
    users: {
      user_id: string;
      status: "READ" | "UNREAD";
      _id: "67820e2aca0b0c50cb088a18";
    }[];

    createdAt: string;
    updatedAt: string;
  };
  unreadCount: number;
  opponent: {
    _id: string;
    username: string;
    name: string;
    email: string;
    isAvatarImageSet: boolean;
    avatarImage: string;
  }[];
};
