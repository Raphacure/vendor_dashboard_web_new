import React, { useContext, useEffect, useRef, useState } from "react"; // Added useState
import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
import { FaCirclePlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { ChatContext } from "./context/ChatConext";
import { chatTypes, messageDto } from "./type";
import Message from "@/components/chat/Message/Message";
import ChatInput from "@/components/chat/ChatInput";
import SideBarListCard from "@/components/chat/SideBarListCard";
import { Divider, Button, Empty } from "antd"; // Added Empty for no results
import EventMessage from "@/components/chat/Message/EventMessage";
import StartChatModal from "@/components/chat/StartChatModal"; // Import the new modal component
import { checkIsMobile } from "@/lib/common"; // Import the mobile check function
import { IoArrowBack } from "react-icons/io5"; // Import back arrow icon for mobile view
import ChatHeader from "@/components/chat/Message/ChatHeader";
const darkMode = true;

const Chat = () => {
  // const { socket, userChatId }: any = useContext(SocketContext);
  const {
    allDirectChatLists,
    currentChat,
    handleOpenChat,
    fetchMessages,
    messages,
  } = useContext(ChatContext);
  const scrollRef: any = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [showChatView, setShowChatView] = useState(false); // State to control which view to show on mobile

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages, scrollRef]);

  let prevDate = "";

  // Filter chat lists based on search term
  const filteredChatLists = allDirectChatLists?.filter((chat: any) => {
    if (!searchTerm.trim()) return true;

    // Get the opponent's name or username
    const opponent = chat.opponent?.[0];
    if (!opponent) return false;

    const name = opponent.name?.toLowerCase() || "";
    const username = opponent.username?.toLowerCase() || "";
    const email = opponent.email?.toLowerCase() || "";

    const term = searchTerm.toLowerCase();

    return (
      name.includes(term) || username.includes(term) || email.includes(term)
    );
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Effect to reset mobile view when chat changes
  useEffect(() => {
    if (currentChat && checkIsMobile()) {
      setShowChatView(true);
    }
  }, [currentChat]);

  // Custom handler for SideBarListCard clicks on mobile
  const handleChatItemClick = (opponent: any, type: chatTypes) => {
    handleOpenChat({ opponent, type });
    if (checkIsMobile()) {
      setShowChatView(true);
    }
  };

  return (
    <ChatStyle>
      <div className="chatMainDiv">
        {/* Left sidebar - only show on desktop or when not in chat view on mobile */}
        {(!checkIsMobile() || !showChatView) && (
          <div className="leftSideBar">
            {/* input header */}
            <ul className="d-flex justify-content-between align-items-center header p-0">
              <li className="inputFame d-flex align-items-center">
                <LuSearch className="mt-1" size={20} />
                <input
                  type="text"
                  placeholder="Search name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </li>
              {/* Add Start Chat Button Here */}
              <li>
                <Button
                  type="primary"
                  icon={<FaCirclePlus />}
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Chat
                </Button>
              </li>
            </ul>

            {/* /options */}
            <ul className="d-flex align-items-center options">
              <li className={`${"active"}`}>Direct Chat</li>
            </ul>

            {/* list */}
            <div className="userCardListFrame">
              {filteredChatLists?.length > 0 ? (
                filteredChatLists?.map((item: any, i: number) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        // Get the opponent data from the item
                        const opponent = {
                          chatId: item.opponent?.[0]?._id,
                          name:
                            item.opponent?.[0]?.name ||
                            item.opponent?.[0]?.username ||
                            "Unknown",
                          username: item.opponent?.[0]?.username || "Unknown",
                          photo: item.opponent?.[0]?.avatarImage || "",
                          chatType: "INDIVIDUAL_CHAT",
                          unReadMessageCount: item.unreadCount || 0,
                        };
                        handleChatItemClick(opponent, "INDIVIDUAL_CHAT");
                      }}
                    >
                      <SideBarListCard
                        tabName="INDIVIDUAL_CHAT"
                        data={item}
                        key={i}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="no-results-container">
                  <Empty
                    description={
                      searchTerm
                        ? "No chats found matching your search"
                        : "No chats available"
                    }
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Right sidebar - only show on desktop or when in chat view on mobile */}
        {(!checkIsMobile() || showChatView) && (
          <div className="rightSideBar">
            {currentChat ? (
              <>
                {/* /top/ */}
                <div className="headerNav">
                  {/* <UserProfileImage
                    name={currentChat?.name}
                    url={currentChat?.photo}
                    className={
                      currentChat?.photo ? "profileImg" : "avatar-sidebar"
                    }
                  />
                  <ChatStyle>
                    <ChatRoomHeaderTitle />
                  </ChatStyle> */}
                  <ChatHeader onBackBtnClick={() => setShowChatView(false)} />
                </div>

                {/* middle messages */}
                <div className="messageFrame">
                  {/* message */}
                  {messages?.map((msg: messageDto) => {
                    let date: any = new Date(msg?.createdAt);
                    date = date.toDateString();
                    const dateDiv =
                      prevDate == date ? (
                        <></>
                      ) : (
                        <Divider>
                          {date === new Date()?.toDateString() ? "Today" : date}
                        </Divider>
                      );
                    prevDate = date;
                    if (msg?.event && Object.keys(msg?.event)?.length != 0) {
                      return (
                        <React.Fragment key={msg?._id}>
                          {dateDiv}
                          <EventMessage msg={msg} />
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={msg?._id}>
                        {dateDiv}
                        <div ref={scrollRef}>
                          <Message msg={msg} />
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
                {/* input */}
                <ChatInput />
              </>
            ) : (
              <div className="empty-chat-placeholder">
                {checkIsMobile() && (
                  <Button
                    type="text"
                    icon={<IoArrowBack size={20} />}
                    onClick={() => setShowChatView(false)}
                    className="back-button"
                  />
                )}
                <div className="select-chat-message">
                  <Empty description="Select a chat to start messaging" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Render the modal */}
      <StartChatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </ChatStyle>
  );
};

export default Chat;

export const ChatStyle = styled.div`
  .chatMainDiv {
    display: flex;
    background: #fff;
    width: 100%;
    padding: 10px 20px;
    height: calc(100vh - 90px);
    // overflow: hidden;
    // margin-top: -16px;
    // padding-top: 0px;

    @media (max-width: 675px) {
      padding: 5px 10px;
    }
  }
  // display: grid;
  // grid-template-columns: minmax(250px, 300px) 1fr;

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }
  .leftSideBar {
    padding: 0px 10px;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-right: 1px solid #e7e7e7;

    @media (max-width: 675px) {
      width: 100%;
      border-right: none;
    }

    .header {
      gap: 15px;

      .menu {
        color: #3b4171;
        font-size: 40px;
        cursor: pointer;
      }
      .inputFame {
        gap: clamp(5px, 0.5em, 20px);
        border: 1px solid #c5c5c5;
        padding: 9px 11px;
        border-radius: 25px;
        background: #fff;
        width: 100%;
        max-height: 46px;

        input {
          outline: none;
          border: 0px;
          width: 100%;

          &:placeholder {
            font-size: 14px;
          }
        }
      }
    }

    .no-results-container {
      padding: 30px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .options {
      width: 100%;
      padding: 0px;
      gap: clamp(10px, 0.8em, 20px);
      margin-top: 13px;
      margin-bottom: 13px;
      position: sticky;
      top: 0;
      background: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;

      cursor: pointer;

      .active {
        color: #000000;
        font-weight: 600;
      }
    }

    .active_user {
      //   background: #f9fafb;
      background: #f3f4f6;
    }

    .userCardListFrame {
      height: 100%;
      /* max-height: calc(100vh - 200px); */
      overflow-y: auto;
    }
  }

  .userProfileImg {
    position: relative;
    display: grid;
    place-items: center;
    margin-right: 5px;

    img {
      width: 10px;
      height: 10px;
    }
  }

  .userCardListWithBorder {
    background: rgba(37, 43, 97, 0.05);
    transition: all 0.2s ease;
    border: 1px solid rgba(37, 43, 97, 0.2);
  }

  .userCardList {
    display: flex;
    gap: 5px;
    //   border: 1px solid red;
    /* padding: 6px; */
    /* border-radius: 25px; */
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    padding: 12px;
    cursor: pointer;
    border-radius: 12px;

    @media screen and (max-width: 500px) {
      background: rgba(37, 43, 97, 0.05);
      transition: all 0.2s ease;
      border: 1px solid rgba(37, 43, 97, 0.2);
    }

    &:hover {
      background: rgba(37, 43, 97, 0.1);
      transform: translateY(-1px);
      border-color: #252b61;

      .sidebar-lists-options {
        display: block;
      }
    }

    .profileImg {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }

    .listHeader {
      position: sticky;
      top: 0;
      background: white;
      z-index: 1000;
    }

    .middle {
      flex: 1;
      font-weight: 500;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;

      .name {
        font-size: 16px;
        color: #001e3a;
      }

      .typing {
        font-size: 14px;
        line-height: 14.52px;
        color: #6c71c9;
      }
    }
    .sidebar-lists-options {
      display: none;
    }

    .latestMessage {
      font-size: 12px !important;
      line-height: 14.52px;
      opacity: 0.8;
      margin: 3px 0px !important;
      /* color: #27b3a4; */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;

      // display: flex;
      /* font-size: 14px !important; */
      margin: 0px;
      padding: 0px;

      & > * {
        padding: 0px !important;
        margin: 0px !important;
        font-size: 12px !important;
      }
    }
  }

  .unreadMessageCount {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    color: white;
    background: #252b61;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .online-user-indicatore {
    width: 10px;
    height: 10px;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    background-color: #16a34a;
    box-shadow: 0px 1px 5px #575252;
    position: absolute;
    right: 0px;
    bottom: 3px;
  }

  .userCardListBorderBottom {
    width: 100%;
    border: 0.5px solid #e5e5e5;
    height: 0px;
    margin: 10px 0px 10px 0px;
  }

  .time {
    margin: 3px 0px 0px 0px;
    text-align: end;
    color: #343434;
    opacity: 0.8;
    font-size: 10px;
    font-weight: 400;
  }

  .userCardList {
    display: flex;
    gap: 5px;
    //   border: 1px solid red;
    padding: 6px;
    /* border-radius: 25px; */
    align-items: center;
    cursor: pointer;

    &:hover {
      background: #f3f4f6;
    }

    .profileImg {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }

    .listHeader {
      position: sticky;
      top: 0;
      background: white;
      z-index: 1000;
    }

    .middle {
      flex: 1;
      font-weight: 500;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;

      .name {
        font-size: 16px;
        color: #001e3a;
      }

      .typing {
        font-size: 14px;
        line-height: 14.52px;
        color: #6c71c9;
      }

      .sidebar-lists-options {
        display: none;
      }

      &:hover {
        .sidebar-lists-options {
          display: block;
        }
      }

      .latestMessage {
        font-size: 14px;
        line-height: 14.52px;
        color: #27b3a4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;

        // display: flex;
        font-size: 14px !important;
        margin: 0px;
        padding: 0px;

        & > * {
          padding: 0px !important;
          margin: 0px !important;
          font-size: 14px !important;
        }
      }
    }

    .unreadMessageCount {
      width: 25px;
      height: 25px;
      flex-shrink: 0;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      color: white;
      background: #252b61;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .rightSideBar {
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 675px) {
      width: 100%;
    }
  }

  .back-button {
    /* margin-right: 10px; */
    width: 25px;
  }

  .empty-chat-placeholder {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
  }

  .select-chat-message {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .headerNav {
    display: flex;
    gap: 10px;
    align-items: center;
    /* padding: 10px 0px 10px 20px; */
    border-bottom: 1px solid #e7e7e7;

    .profileImg {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }

    .userName {
      color: #343434;
      font-size: 18px;
      font-weight: 700;
    }
  }

  .indicator {
    p {
      color: #343434;
      font-size: 12px;
      font-weight: 400;
    }
  }

  .eventMessageFrame {
    background: #262b6140;
    border-radius: clamp(5px, 1rem, 2rem);
    color: #343434;
    padding: 5px;
    text-align: center;
    margin: 2rem 0;
  }

  .messageFrame {
    flex: 1;
    overflow-y: auto;
    padding: 10px 20px;

    @media (max-width: 675px) {
      padding: 10px 5px;   
    }

  }

  .bottom_input {
  }

  .inputFrame {
    border: 1px solid #e7e7e7;
    background: #f8f8ff;
    border-left: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .inputSendMsg {
    width: 100%;
    max-height: 50px;
    border: 0px;
    outline: none;
    padding: 10px;
    border-radius: 9px;
    border: 1px solid #f0f0f0;
  }

  .attachmentBtn {
    font-size: 25px;
    color: #252b61;
  }

  .sendBtn {
    border: 1px solid #e7e7e7;
    padding: 0px 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-left: 0;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #252b61;
      border: 0px;
      color: white;
      width: 64px;
      height: 43px;
      font-size: 30px;
      border-radius: 20px;
    }
  }

  .msgContainer {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;

    .msg {
      // width: 50%;
      min-width: 80px;
      max-width: 50%;
      flex-shrink: 0;
      position: relative;
    }
    .textMsg {
      background: #f8f8ff;
      padding: 1rem 2rem;
      // border-radius: 5rem;
      border-radius: clamp(5px, 1rem, 2rem);
      color: #343434;

      p,
      a,
      h1,
      h2,
      h3 {
        color: #212529; /* White text for received messages */
      }

      h1 {
        font-size: 20px !important;
      }
      h2 {
        font-size: 18px !important;
      }
      h3 {
        font-size: 15px !important;
      }
      p li u {
        font-size: 16px !important;
      }
    }

    .msgProfileImg {
      width: 25px !important;
      height: 25px !important;
      font-size: 14px;
      border-radius: 50%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: contain;
    }

    .sentBy {
      color: #343434;
      font-size: 14px;
      margin-left: 1rem;
    }

    .sendByMe {
      margin-left: 1rem;
    }
    .sendByOthers {
      margin-right: 1rem;
      text-align: end;
    }
  }
  .fs-14px {
    font-size: 14px;
  }

  .attachmentsList {
    gap: 1rem;
    margin-top: 1rem;
  }

  .attachmentBox {
    width: auto;
    flex-shrink: 0;
    border-radius: 5px;
  }

  .msg {
    &:hover {
      .overlay-options {
        display: flex;
      }
    }
    .overlay-options {
      display: none;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      background: #f0f0f0;
      color: #212529;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
    }

    .option-right {
      right: -10px;
      top: 0px;
    }
    .option-left {
      left: -10px;
      top: 0px;
    }
  }

  .reply {
    font-size: 14px;
    background: #ffffff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-weight: 400 !important;
    padding: 5px;
    border: 1px solid #cccccc;
    margin-bottom: 0px;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    border-bottom: 0px;
    color: #636366;
    padding: 10px;
    position: relative;

    .closeIcon {
      cursor: pointer;
    }
    .userInfo {
    }
    .msgProfileImg {
      width: 20px;
      height: 20px;
    }
  }

  .inputEditor {
    // max-height: 100px;
    overflow-y: scroll;
  }

  .quil {
    .ql-picker-item {
      padding: 0px !important;
      margin: 0px !important;
    }

    .ql-snow {
      padding: 0 0 8px 0 !important;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before,
    .ql-picker-item {
      font-size: 1rem !important;
    }

    .ql-toolbar {
      // background: #f0f0f0;
      // border-radius: 10px 10px 0 0;
      border: 0px !important;
      // border-left: 0px !important;
      // border-right: 0px !important;
    }

    .ql-editor {
      background: #fff;
      border-radius: 10px;
      min-height: 70px;
      max-height: 100px;
    }

    .ql-container {
      overflow-y: auto;
      min-height: auto !important;
      max-height: auto !important;
      border: 0px !important;
    }

    .ql-active {
      background: #262b61 !important;
      color: white !important;
      stroke: white !important;
      border-radius: 5px;
      margin: 0px 5px;

      svg > * {
        stroke: white !important;
      }

      &:hover {
        color: #262b61 !important;
      }
    }
  }

  .messageReply {
    font-size: 12px;
  }

  .highlight {
    animation: blink 0.5s ease-in-out infinite;
    padding: 10px;
    border-radius: 10px;
  }

  @keyframes blink {
    0% {
      background-color: #f8f8ff;
    }
    50% {
      background-color: transparent;
    }
    100% {
      background-color: #f8f8ff;
    }
  }

  .reactionsDiv {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .reactionCard {
      display: flex;
      gap: 7px;
      font-size: 16px;
      border: 1px solid #262b61;
      padding: 2px 5px;
      border-radius: 5px;
      background: #f8f8ff;
    }
  }

  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: 0.75rem;
    gap: 0.75rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: end;
    padding-bottom: 0.75rem;
  }

  .message-wrapper {
    display: flex;
  }

  .message-wrapper.patient {
    justify-content: flex-end;
  }

  .message-wrapper.doctor {
    justify-content: flex-start;
  }

  .message-content {
    max-width: 85%;
    min-width: 100px;
  }

  .message-bubble {
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
  }

  .message-bubble.patient {
    background-color: ${darkMode ? "#252b61" : "#262b61"};
    color: white;
  }

  .message-bubble.doctor {
    background-color: ${darkMode ? "#262b61" : "#f3f4f6"};
    color: ${darkMode ? "#ffffff" : "#000000"};
  }

  .message-files {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .message-file {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }

  .file-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .file-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .message-time {
    font-size: 0.75rem;
    color: #9ca3af;
    margin-top: 0.25rem;
  }

  .message-time.patient {
    text-align: right;
  }

  .message-time.doctor {
    text-align: left;
  }

  .delivery-icon {
    width: 0.75rem;
    height: 0.75rem;
    display: inline;
    margin-left: 0.25rem;
    color: #10b981;
  }

  .typing-indicator {
    display: flex;
    justify-content: flex-start;
  }

  .typing-bubble {
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    background-color: ${darkMode ? "#262b61" : "#f3f4f6"};
  }

  .typing-dots {
    display: flex;
    gap: 0.25rem;
  }

  .typing-dot {
    width: 0.375rem;
    height: 0.375rem;
    background-color: #6b7280;
    border-radius: 50%;
    animation: bounce 1.4s infinite;
  }

  .typing-dot:nth-child(2) {
    animation-delay: 0.1s;
  }

  .typing-dot:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }

  .mine-message {
    background-color: #252b61 !important;
    color: white;
  }
  .opponent-message {
    background-color: #f3f4f6 !important;
  }

  .input-area {
    background-color: #f9fafb;
    padding: 0.75rem;
    border-top: 1px solid #e5e7eb;
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input-btn {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    color: #6b7280;
    background-color: transparent;
  }

  .input-btn:hover {
    background-color: #e5e7eb;
  }

  .input-btn.recording {
    background-color: #fecaca;
    color: #dc2626;
  }

  .input-btn-icon {
    width: 1rem;
    height: 1rem;
  }

  .message-input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    border: none;
    outline: none;
    background-color: #ffffff;
    color: #000000;
  }

  .message-input::placeholder {
    color: #6b7280;
  }

  .send-btn {
    padding: 0.5rem;
    background-color: #262b61;
    color: white;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
  }

  .send-btn:hover {
    background-color: #262b61;
  }

  .send-btn:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }

  .send-icon {
    width: 1rem;
    height: 1rem;
  }

  .input-area {
    background-color: ${!darkMode ? "#1f2937" : "#f9fafb"};
    padding: 0.75rem;
    border-top: 1px solid ${!darkMode ? "#262b61" : "#e5e7eb"};
  }

  .input-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .input-btn {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    color: ${!darkMode ? "#9ca3af" : "#6b7280"};
    background-color: transparent;
  }

  .input-btn:hover {
    background-color: ${!darkMode ? "#262b61" : "#e5e7eb"};
  }

  .input-btn.recording {
    background-color: #fecaca;
    color: #dc2626;
  }

  .input-btn-icon {
    width: 1rem;
    height: 1rem;
  }

  .message-input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    border: none;
    outline: none;
    background-color: ${!darkMode ? "#262b61" : "#ffffff"};
    color: ${!darkMode ? "#ffffff" : "#000000"};
  }

  .message-input::placeholder {
    color: ${!darkMode ? "#9ca3af" : "#6b7280"};
  }

  .send-btn {
    padding: 0.5rem;
    background-color: #262b61;
    color: white;
    border-radius: 0.75rem;
    border: none;
    cursor: pointer;
  }

  .send-btn:hover {
    background-color: #252b61;
  }

  .send-btn:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }

  .send-icon {
    width: 1rem;
    height: 1rem;
  }

  .security-notice {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #6b7280;
  }

  .security-icon {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }
`;
