import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllChatInits,
  getMessages,
  saveReactToMessage,
  updateReadMessagStatus,
} from "../../../redux/slices/chat/chatService";

import { useNavigate, useLocation } from "react-router";
import ShareForm from "../../../components/chat/ShareForm";
import { io } from "socket.io-client";
import { CHAT_API } from "@/lib/config";
import axios from "axios";
import {
  typingStatusDto,
  opponentDto,
  allDirectChatsDto,
  chatTypes,
  messageDto,
  eventDto,
  messageTypeDto,
  ChatContextType,
  inCommingReactionsDto,
  chatTypeDto,
} from "../type";
// import { SocketContext } from "../../../context/SocketProvider";
import useSendBrowserNotification from "@/components/chat/useSendBrowserNotification";
import { SocketContext } from "@/pages/Chat/context/SocketProvider";
//@ts-ignore
export const ChatContext = createContext<ChatContextType>();

const ChatContextProvider = ({ children }: any) => {
  const { socket, userChatId }: any = useContext(SocketContext);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const dispatch = useDispatch<any>();
  const isMounted = useRef(true);
  const [opponentChatId, setOpponentChatId] = useState<string>("");

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [typingStatus, setTypingStatus] = useState<typingStatusDto>({});

  const [currentChat, setCurrentChat] = useState<opponentDto>();
  const [allDirectChatLists, setAllDirectChatLists] = useState<
    allDirectChatsDto[]
  >([]);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const [messages, setMessages] = useState<messageDto[]>([]);

  const { state, hash } = useLocation();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const navigate = useNavigate();
  const { sendNotification, toggleTitle, playAudio } =
    useSendBrowserNotification();
    const [reply, setReply] = useState<messageDto | null>(null)

    const [isPipMode, setIsPipMode] = useState(false)
  const sendMessageRoute = `${CHAT_API}/api/messages/addmsg`;
  const sendGroupMessageRoute = `${CHAT_API}/api/group/add-group-message`;
  const recieveMessageRoute = `${CHAT_API}/api/messages/getmsg`;

  useEffect(() => {
    if (hash == "#share") {
      setShowShareOptions(true);
    }
  }, [hash]);

    // pip handler
    const pipHandler = useCallback((event: any) => {
      if (event.data?.type === "AUTH_TOKEN_WITH_USER_DETAILS") {
        localStorage.setItem("token", event.data.data.token);
        localStorage.setItem("user", event.data.data.user);
        setCurrentChat(event?.data?.data?.oppenentDetails)
        setIsPipMode(true)
      }
    }, [])
  
    useEffect(() => {
      window.addEventListener("message", pipHandler);
  
      return () => {
        window.removeEventListener("message", pipHandler);
      }
    }, [pipHandler])

  // useEffect(() => {
  //   const chatId = searchParams.get("chatId");

  //   if (!chatId) {
  //     return;
  //   }
  //   let data: opponentDto = {
  //     chatId: chatId,
  //     chatType: "INDIVIDUAL_CHAT",
  //     name: "",
  //     photo: "",
  //     unReadMessageCount: 0,
  //   };
  //   let isFound = false;

  //   let directChatCount = allDirectChatLists.length;
  //   let groupsCount = groupChatLists.length;

  //   allDirectChatLists?.forEach((chat) => {
  //     if (chat?._id == chatId) {
  //       isFound = true;
  //       data.photo = chat?.opponent?.[0]?.avatarImage;
  //       data.name = chat?.opponent?.[0]?.name || chat?.opponent?.[0]?.username;
  //       data.chatType = "INDIVIDUAL_CHAT";
  //       data.unReadMessageCount = chat?.unreadCount;
  //     }
  //   });
  //   setCurrentChat(data);
  // }, [searchParams, allDirectChatLists, groupChatLists]);

  //   get all admins
  // const getAllAdminsApi = useCallback(async () => {
  //   await dispatch(getAllAdmins({}));
  // }, []);

  //   get all initiated chat users list
  const allInitiatedChatUsersApi = useCallback(async () => {
    if (!userChatId) return;
    const res: any = await dispatch(getAllChatInits(userChatId));

    if (res?.payload?.success) {
      setAllDirectChatLists(res?.payload?.data);
    }
  }, [userChatId]);

  useEffect(() => {
    allInitiatedChatUsersApi();
  }, [allInitiatedChatUsersApi]);

  const fetchMessages = useCallback(async () => {
    if (currentChat?.chatId && userChatId) {
      const data: any = await dispatch(
        getMessages({
          from: userChatId,
          to: currentChat.chatId,
        })
      );

      setMessages(data?.payload);
    }
  }, [currentChat?.chatId, userChatId, dispatch]);

  //   on chat room open
  const handleOpenChat = async ({
    opponent,
    type,
  }: {
    opponent: opponentDto;
    type: chatTypes;
  }) => {
    console.log(opponent, "opponent");
    if(opponent?.chatId){
      setOpponentChatId(opponent.chatId)
    }
    setCurrentChat(opponent);
    if (opponent?.unReadMessageCount > 0) {
      await dispatch(
        updateReadMessagStatus({
          from: userChatId,
          to: opponent?.chatId,
        })
      );
      allInitiatedChatUsersApi();
    }
  };
  //   socket

  // get all online users status
  const onOnlineUsersChange = useCallback((data: any) => {
    setOnlineUsers(data);
  }, []);

  // get typing status
  const onTypingStatusChange = useCallback((data: any) => {
    setTypingStatus((prev) => {
      const newTypingStatus: any = { ...prev };
      const isStartedTyping = data?.typingStatus === "STARTED_TYPING";
      const from = data?.from;
      const usersList = newTypingStatus[from];

      if (isStartedTyping) {
        const uniqueUsers = new Set(
          Array.isArray(usersList)
            ? [...usersList, data.fromUser]
            : [data.fromUser]
        );

        newTypingStatus[from] = Array.from(uniqueUsers);
      } else {
        if (Array.isArray(usersList) && usersList.length <= 1) {
          delete newTypingStatus[from];
        } else {
          newTypingStatus[from] = usersList?.filter(
            (user: string) => user !== data?.fromUser
          );
        }
      }
      return newTypingStatus;
    });
  }, []);


  useEffect(() => {
    if (userChatId && socket) {
      // socket.current = io(CHAT_API);
      // socket?.emit("add-user", userChatId);
      socket?.on("update-online-users", onOnlineUsersChange);
      socket?.on("typing-status", onTypingStatusChange);

      return () => {
        if (socket) {
          socket?.off("update-online-users", onOnlineUsersChange);
          socket?.off("typing-status", onTypingStatusChange);
        }
      };
    }
  }, [userChatId, socket, onOnlineUsersChange, onTypingStatusChange]);

  const onUserNotificationHandler = useCallback(
    (data: any) => {
      allInitiatedChatUsersApi();
    },
    [allInitiatedChatUsersApi]
  );

  useEffect(() => {
    // listining on userId-notification
    if (userChatId) {
      socket?.on(
        `${userChatId}-notification`,
        onUserNotificationHandler
      );
    }

    return () => {
      if (userChatId) {
        socket?.off(
          `${userChatId}-notification`,
          onUserNotificationHandler
        );
      }
    };
  }, [userChatId, onUserNotificationHandler, socket]);

  const updateReadMessagStatusApiCall = useCallback(
    async ({ chat, type }: { type: "INDIVIDUAL-CHAT"; chat: any }) => {
      await dispatch(
        updateReadMessagStatus({
          from: userChatId,
          to: chat?.from,
        })
      );

      allInitiatedChatUsersApi();
    },
    [userChatId, dispatch, allInitiatedChatUsersApi]
  );

  const onIndividualChatNotificationHandler = useCallback(
    async (d: any) => {
      const data = JSON.parse(d);

      // if i am not the sender and the message is not read by me event though I open a chat room
      if (data?.from !== userChatId && data?.from === currentChat?.chatId) {
        await updateReadMessagStatusApiCall({
          chat: data,
          type: "INDIVIDUAL-CHAT",
        });
      } else {
        allInitiatedChatUsersApi();
      }
      sendNotification(`${data?.name}`, data?.message);

      // Start toggling the title when a new message is received
      toggleTitle({ title: "New Message Arrived" });
    },
    [
      userChatId,
      currentChat?.chatId,
      sendNotification,
      toggleTitle,
      updateReadMessagStatusApiCall,
      allInitiatedChatUsersApi,
    ]
  );

  useEffect(() => {
    if (socket) {
      socket?.on(
        `msg-notification`,
        onIndividualChatNotificationHandler
      );
    }

    return () => {
      if (socket) {
        socket?.off(`group-chat-notification`);
        socket?.off(
          `msg-notification`,
          onIndividualChatNotificationHandler
        );
      }
    };
  }, [socket, onIndividualChatNotificationHandler]);

  const typingStatusChangeHandler = useCallback(
    (isTypingStart: boolean) => {
      if (isTypingStart) {
        socket.emit("typing-start", {
          name: currentChat?.name,
          from: userChatId,
          fromUser: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
          to: currentChat?.chatId,
          isGroupChat: false,
        });
      } else {
        socket.emit("typing-stop", {
          name: currentChat?.name,
          fromUser: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
          from: userChatId,
          to: currentChat?.chatId,
          isGroupChat: false,
        });
      }
    },
    [
      currentChat?.chatId,
      currentChat,
      currentChat?.chatType,
      userChatId,
      socket,
      user?.first_name,
      user?.last_name,
    ]
  );

  const handleSendEvent = useCallback(
    async ({
      event,
      chatType,
      to,
    }: {
      event?: eventDto;
      chatType: chatTypes;
      to: number;
    }) => {
      const body: any = {
        from: userChatId,
        event: event,
        name: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
      };

      const result = await axios.post(sendMessageRoute, {
        ...body,
        to,
      });

      if (result?.data?.success) {
        await allInitiatedChatUsersApi();
      }
    },

    [user, userChatId]
  );

  console.log(reply, "reply");

  const handleSendMsg = useCallback(
    async ({
      msg,
      urls,
      type,
      chatType,
    }: {
      msg: string;
      urls?: string[];
      type: messageTypeDto;
      chatType: chatTypes;
    }) => {
      console.log(currentChat, "currentChat");
      const body: any = {
        from: userChatId,
        name: currentChat?.name,
        type,
      };
      if (!socket) {
        console.log("Socket is empty.......");
        return;
      }
      if (reply) {
        body.replyTo = reply?._id;
      }

      if (type == "ATTACHMENT") {
        body.attachments = urls;
      }
      body.message = msg;

      body.to = currentChat?.chatId;
      // socket.emit("send-msg", body);
      // typingStatusChangeHandler(false);

      const result = await axios.post(sendMessageRoute, {
        ...body,
        to: currentChat?.chatId || opponentChatId,
      });

      if (result?.data?.success) {
        playAudio();
        body._id = result?.data?.data?._id
      }

      console.log("send-msg", body ,reply);
      

      body.to = currentChat?.chatId;
      socket?.emit("send-msg", body);

      const newMsg: messageDto = {
        fromSelf: true,
        message: msg ? msg : undefined,
        attachments: type === "ATTACHMENT" ? (urls as string[]) : undefined,
        createdAt: new Date().toISOString(),
        type: type,
        senderName: currentChat?.name ?? "",
        senderImage: currentChat?.photo,
        _id: result?.data?.data?._id,
        replyTo: reply || undefined,
        shared_message: null,
        isShared: false
      };

      setMessages((prev: messageDto[]) => [...prev, newMsg]);
      setReply(null)
      allInitiatedChatUsersApi();
    },
    [
      currentChat?.chatId,
      currentChat?.name,
      userChatId,
      opponentChatId,
      socket,
      typingStatusChangeHandler,
      sendGroupMessageRoute,
      sendMessageRoute,
      allInitiatedChatUsersApi,
      reply
    ]
  );


  // react to message
  const reactToMessage = useCallback(async (data: inCommingReactionsDto) => {
    dispatch(saveReactToMessage({ user_id: userChatId, body: data }))
  }, [dispatch, userChatId])

  const handleReact = useCallback(async ({ emoji, messageId, to, chatType }: { emoji: string, to: string, messageId: string, chatType: chatTypeDto }) => {
    const body: inCommingReactionsDto = {
      to, messageId, emoji, chatType, from: userChatId
    }
    socket.emit("react-to-message", body)
    await reactToMessage(body)
    setMessages((prev: messageDto[]) =>
      prev?.map((msg: messageDto) => {
        if (msg._id == messageId) {
          const count = msg?.reactions?.[emoji] ?? 0;
          return { ...msg, reactions: { ...msg?.reactions, [emoji]: count + 1 } }
        }
        return msg;
      })
    )
  }, [socket, reactToMessage, userChatId])


  const onMessageRecieve = useCallback(
    (message: any) => {
      if (!isMounted.current) return;
      let msg = JSON.parse(message);
      if (msg && currentChat?.chatId === msg?.from) {
        // Send notification only if the message is new
        // sendNotification(msg?.name, msg?.message);

        setMessages((prev: any) => [
          ...prev,
          {
            shared_message: msg?.sharedMessage?.message
              ? {
                  content: msg?.sharedMessage?.message,
                  type: msg?.sharedMessage?.type,
                }
              : undefined,
            fromSelf: currentChat?.chatId !== msg?.from,
            message: msg?.message,
            type: msg?.type,
            createdAt: new Date().toISOString(),
          },
        ]);

        // Start toggling the title when a new message is received
        // toggleTitle({
        //   title: `${msg?.name}: ${msg?.message?.substring(0, 10)} ${
        //     msg?.message?.length > 10 ? "..." : ""
        //   }`,
        // });

        // Avoid adding duplicate messages
        // if (!messages.some((message) => message.createdAt === msg.createdAt)) {
        // }
      }
    },
    [currentChat]
  );


  const onMessageReactionRecieved = useCallback((data: inCommingReactionsDto) => {
    setMessages((prev: messageDto[]) =>
      prev?.map((msg) => {
        if (msg._id == data?.messageId) {
          const emoji = data?.emoji;
          const count = msg?.reactions?.[emoji] ?? 0;

          return { ...msg, reactions: { ...msg?.reactions, [emoji]: count + 1 } }
          // ...( ? msg?.reactions : {}), {data?.emoji, from : data?.from }
        }
        return msg;
      })
    )
  }, [])

  useEffect(() => {
    if (socket) {
      socket?.on("msg-recieve", onMessageRecieve);
      socket?.on("reactions-recieve", onMessageReactionRecieved);
    }

    return () => {
      socket?.off("msg-recieve", onMessageRecieve);
      socket?.off("reactions-recieve", onMessageReactionRecieved);
    };
  }, [messages, onMessageRecieve, socket, onMessageReactionRecieved]);


  // helper functions

  function getRelativeTimeDifference(givenDateString: string) {
    const givenDate = new Date(givenDateString);
    const now = new Date();
    const diffMs = now.getTime() - givenDate.getTime();

    if (isNaN(givenDate.getTime())) {
      // return "Invalid date";
      return "";
    }

    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHrs = Math.floor(diffMins / 60);

    // Check if the given date is yesterday
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday =
      givenDate.getDate() === yesterday.getDate() &&
      givenDate.getMonth() === yesterday.getMonth() &&
      givenDate.getFullYear() === yesterday.getFullYear();

    if (diffSecs < 60) {
      return `${diffSecs} seconds ago`;
    } else if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHrs < 24) {
      return `${diffHrs} hours ago`;
    } else if (isYesterday) {
      return "Yesterday";
    } else {
      return givenDate.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }
  }

  return (
    <ChatContext.Provider
      value={{
        userChatId,
        messages,
        reply,
        setReply,
        handleReact,
        sendMessage: handleSendMsg,
        allInitiatedChatUsersApi,
        allDirectChatLists,
        currentChat,
        setCurrentChat,
        handleOpenChat,
        onlineUsers,
        typingStatus,
        fetchMessages,
        typingStatusChangeHandler,
        handleSendEvent,
        getRelativeTimeDifference,
        isPipMode,
      }}
    >
      {showShareOptions && (
        <ShareForm
          currentUserChatId={userChatId}
          socket={socket}
          onHide={() => {
            setShowShareOptions(false);
            navigate("/chat");
          }}
          usersList={allDirectChatLists}
        />
      )}
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
