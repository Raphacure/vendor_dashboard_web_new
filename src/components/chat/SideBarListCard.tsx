import { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../../pages/Chat/context/ChatConext';
import { SocketContext } from '../../pages/Chat/context/SocketProvider';
import { chatTypes } from '../../pages/Chat/type';
import { BsPip } from 'react-icons/bs';
import { Tooltip } from 'antd';
import UserProfileImage from './UserProfileImage';
import DOMPurify from 'dompurify';
import { checkIsMobile } from '@/lib/common';

const SideBarListCard = ({ data, tabName }: { data: any, tabName: chatTypes }) => {

  const {
    // activeTab,
    // setActiveTab,
    currentChat,
    handleOpenChat,
    onlineUsers,
    typingStatus,
    getRelativeTimeDifference,
  } = useContext(ChatContext);
  const { userChatId }: any = useContext(SocketContext);

  let image = "";
  let name = "";
  let username = "";
  let opponentId = "";

  if (tabName == "INDIVIDUAL_CHAT") {
    image = data?.opponent?.[0]?.avatarImage;
    name =
      data?.opponent?.[0]?.name || data?.opponent?.[0]?.username;
    username = data?.opponent?.[0]?.username;
    opponentId = data?.opponent?.[0]?._id;
  } else {
    image = data?.group?.[0]?.logo;
    name = data?.group?.[0]?.name;
    opponentId = data?.group?.[0]?._id;
  }

  const textMessage = data?.latestMessage?.message?.content;
  const isAttachment =
    Array.isArray(data?.latestMessage?.message?.attachments) &&
    data?.latestMessage?.message?.attachments?.length > 0;
  const isEvent =
    data?.latestMessage?.event &&
    Object.keys(data?.latestMessage?.event)?.length > 0;
  const isSharedMessage = data?.latestMessage?.isSharedMessage


  let message = `${userChatId == data?.latestMessage?.sender ? "You:&nbsp;" : `${data?.opponent?.[0]?.name ?? ""}:&nbsp;`} ${(isAttachment && "File Shared") || (isSharedMessage && "Shared Message") || (isEvent && data?.latestMessage?.event?.type?.replace("_", " ")?.toLowerCase()) || textMessage}`

  const openInPIPMode = async () => {
    if ("documentPictureInPicture" in window) {
      let pipWindow = null;
      // If PiP is already open, do nothing
      if (pipWindow) return;

      // @ts-ignore
      pipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 600 });
      let chatUrl = window.location.href

      let iframe = pipWindow.document.createElement("iframe");
      iframe.src = chatUrl
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.border = "none";

      pipWindow.document.body.appendChild(iframe);
      pipWindow.document.body.style.margin = "0";
      pipWindow.document.body.style.backgroundColor = "#fff";

      iframe.onload = () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        const oppenentDetails = {
          chatType: tabName,
          chatId: opponentId,
          id: opponentId,
          name: name,
          username: username,
          photo: image,
          unReadMessageCount: data?.unreadCount,
          tag: data?.tag,
        };
        iframe.contentWindow?.postMessage({ type: "AUTH_TOKEN_WITH_USER_DETAILS", data: { token, user, oppenentDetails } }, chatUrl);
      };

      pipWindow.addEventListener("pagehide", () => {
        pipWindow = null;
      });
    } else {
      console.error("Picture-in-Picture for documents is not supported in this browser.");
    }
  }

  const currentActiveChatRef = useRef<any>(null);

  useEffect(() => {
    currentActiveChatRef.current?.scrollIntoView();
  }, [currentActiveChatRef, currentChat?.chatId]);
  
  return (
    <div
      ref={currentChat?.chatId == opponentId ? currentActiveChatRef : null}
      className={`userCardList mb-1 ${currentChat?.chatId == opponentId ? "active_user" : ""
        }`}
      onClick={() => {
        handleOpenChat({
          opponent: {
            chatType: tabName as any,
            chatId: opponentId,
            id: opponentId,
            name: name,
            username: username,
            photo: image,
            unReadMessageCount: data?.unreadCount,
            tag: data?.tag,
          },
          type: tabName,
        });
      }}
    >
      <ul className="d-flex">
        <li className="userProfileImg">
          <UserProfileImage
            name={name}
            url={image}
            className={image ? "profileImg" : "avatar-sidebar"}
          />
          {onlineUsers?.includes(opponentId ?? "") && (
            <div className="online-user-indicatore"></div>
          )}
        </li>
        <li className="middle ml-1 d-flex justify-content-between align-items-center">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="name text-capitalize">{name ?? ""}</div>
              {/* <div className="chat-badges ml-3">
                {tabName === "GROUP_CHAT" && (
                  <span className="type-badge group">Group</span>
                )}
              </div> */}
            </div>
            {typingStatus?.[opponentId] ? (
              <div className="typing">Typing....</div>
            ) : (
              <div
                className="latestMessage"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(message),
                }}
              ></div>
            )}
          </div>
        </li>
      </ul>
      <ul className="flex-column d-flex justify-content-end align-items-end">
        <li>
          {Number(data?.unreadCount) ? (
            <li className="unreadMessageCount">{data?.unreadCount}</li>
          ) : (
            ""
          )}
        </li>
        {!checkIsMobile() && (
          <li className="time">
            {getRelativeTimeDifference(data?.latestMessage?.createdAt)?.substring(0, 10)}
          </li>
        )}
        <li className="mr-1 sidebar-lists-options">
          <Tooltip title="Open in a pop-up">
            <BsPip onClick={openInPIPMode} />
          </Tooltip>
        </li>
      </ul>
      {/* <div className="userCardListBorderBottom"></div> */}
    </div>

  );
}

export default SideBarListCard