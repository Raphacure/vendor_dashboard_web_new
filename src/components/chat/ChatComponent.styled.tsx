import styled from "styled-components";

export const ChatComponentStyled = styled.div`
  .chat-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    height: 100%;
    height: calc(100vh - 100px);
    font-family: Arial, sans-serif;
  }

  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    border-right: 1px solid #e2e2e2;
    overflow-y: auto;

    h4 {
      // padding: 10px;
      // margin: auto;
    }
  }

  .sidebar h2 {
    margin-bottom: 20px;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }

  .sidebar .search {
    margin-right: 5px;
    padding: 5px;
    font-size: 14px;
    outline: none;
    border: 0px;
    width: 100%;
    border-radius: 5px;
  }

  .sidebar li:hover {
    // background-color: #e0e0e0;
    // background-color: #adb5bd;
    background-color: #0078ff24;
    border-radius: 5px;
  }

  .sidebar li.selected {
    // background-color: #d0d0d0;
    // background-color: #585151;
    background-color: #0078ff;
    border-radius: 5px;
    color: white;
  }

  .sidebar li svg {
    margin-right: 10px;
  }

  .sidebar li .avatar-sidebar {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .memberListContainer {
    max-height: 30%;
    overflow-y: auto;
  }

  .chatRightSideContainer {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    // padding: 0px 20px;
    width: 100%;
    height: 100%;
  }

  .chat-messages {
    flex: 1;
    height: 100%;
    max-height: 70vh;
    overflow-y: auto;
  }

  .chat-dive {
    margin-top: 30rem;
  }
  .chat-area {
    width: 100%;
    height: 100%;
    border-right: 1px solid #e2e2e2;
  }

  .messages {
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 20px;
  }

  .message {
    max-width: 70%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
  }

  .message p {
    margin: 0;
  }

  .message .timestamp {
    font-size: 0.8em;
    color: #888;
    display: block;
    margin-top: 5px;
  }

  .sent {
    background-color: #dcf8c6;
    align-self: flex-end;
    margin-left: auto;
  }

  .received {
    background-color: #f0f0f0;
    align-self: flex-start;
  }

  .message-form {
    display: flex;
  }

  .message-form input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
  }

  .message-form button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  .message-form button:hover {
    background-color: #45a049;
  }

  .no-chat {
    text-align: center;
    color: #888;
  }

  .file-container {
    display: flex;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    // gap: 10px;
  }
  .image-preview {
    width: 80px;
    height: 40px;
  }

  .chat-item {
    display: flex;
    align-items: center;
  }

  .space-between {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  .unread_message_circle {
    border-radius: 100%;
    background-color: #0078ff;
    padding: 3px;
    color: white;
    aspect-ratio: 1 / 1;
    width: 25px;
    height: 25px;
    font-size: 12px;
    display: grid;
    place-content: center;
  }

  .flex-full {
    flex: 1;
  }

  .user-icon {
    position: relative;
  }

  .online-user-indicatore {
    width: 10px;
    height: 10px;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    background-color: #16a34a;
    box-shadow: 0px 0px 10px #fff;
    position: absolute;
    right: 7px;
    bottom: 3px;
  }

  .typing {
    font-size: 14px;
  }

  .username .typing {
    color: #0078ff;
  }

  .particpantsListContainer {
    border-radius: 5px;
    max-height: 250px;
    overflow-y: auto;
    border: 1px solid #ced4da;
    text-transform: capitalize;
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }

  .closeBtn {
    position: absolute;
    font-size: 20px;
    top: 2rem;
    right: 2rem;
    z-index: 1000;
  }

  .fbold {
    font-weight: 600;
    color: #000000d9;
  }

  .shareBtn {
    max-height: 38px !important;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .error {
    color: #dc3545;
  }
`;
