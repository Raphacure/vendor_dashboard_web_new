import React, { useContext, useEffect, useRef, useState } from "react";
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import './TipTap.css';
import { GEMINI_API_KEY } from "@/lib/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Send, Shield } from "lucide-react";
import { ChatContext } from "@/pages/Chat/context/ChatConext";
import { chatTypes } from "@/pages/Chat/type";
import FileInput from "./File/FileInput";

const apiKey = GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-lite",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const ChatInput = () => {
  const inputRef = useRef(null);
  const [msg, setMsg] = useState("");
  const [isShiftKeyPressing, setIsShiftKeyPressing] = useState(false);
  const { sendMessage, typingStatusChangeHandler, currentChat, reply, userChatId, setReply } =
    useContext(ChatContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
      Placeholder.configure({
        placeholder: 'Message here...',
      }),
    ],
    content: msg,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setMsg(html);

      const isEmpty = html?.toString().replace(/<\/?[^>]+(>|$)/g, "")
        ? false
        : true;

      if (!isEmpty) {
        typingStatusChangeHandler(true);
      } else {
        typingStatusChangeHandler(false);
      }
    },
  });

  // Update editor content when msg changes
  useEffect(() => {
    if (editor && msg !== editor.getHTML()) {
      editor.commands.setContent(msg, false);
    }
  }, [msg, editor]);

  const handleGeminiBtnClick = async () => {
    console.log("msg : ", msg);
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const prompt = `Please refine this medical communication to be clear, empathetic, and professional for patient interaction. Maintain the original meaning while ensuring:
1. Medical accuracy and appropriate terminology
2. Empathetic and supportive tone
3. Clear, concise language for patient understanding
4. Professional yet approachable style
5. Compliance with healthcare communication standards

Original message: "${msg}"

Improved version (only return the improved text, no additional commentary):`;

    const result = await chatSession.sendMessage(prompt);
    const generatedText = result.response.text();
    console.log("generatedText : ", generatedText);
    setMsg(generatedText);
  };

  useEffect(() => {
    if (editor && inputRef.current) {
      editor.commands.focus();
    }
    typingStatusChangeHandler(false);
  }, [editor, inputRef, typingStatusChangeHandler]);

  const handleSendMessage = () => {
    const isEmpty = msg?.toString().replace(/<\/?[^>]+(>|$)/g, "")
      ? false
      : true;

    if (!isEmpty) {
      const trimmedContent = msg
        .replace(/<p><br><\/p>/g, "")
        .replace(/&nbsp;/g, "")
        .trim();

      console.log("sending....");

      sendMessage({
        msg: trimmedContent,
        type: "TEXT",
        chatType: currentChat?.chatType as chatTypes,
      });

      if (editor) {
        editor.commands.setContent("");
      }
      setMsg("");
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isShiftKeyPressing && e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
    if (e.key === "Shift") {
      setIsShiftKeyPressing(true);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Shift") {
      setIsShiftKeyPressing(false);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="input-area">
      <div className="input-row">
        {/* Actions */}
        <FileInput />

        {/* Input */}
        <input
          onKeyDown={(e) => {
            if (!isShiftKeyPressing && e?.key === "Enter") {
              handleSendMessage();
            }
            if (e?.key == "Shift") {
              setIsShiftKeyPressing(true);
            }
          }}
          onKeyUp={(e) => {
            if (e?.key == "Shift") {
              setIsShiftKeyPressing(false);
            }
          }}
          onChange={(e) => {
            const { value } = e.target;
            if (value.trim()) {
              typingStatusChangeHandler(true);
            } else {
              typingStatusChangeHandler(false);
            }
            setMsg(value);
          }}
          autoFocus={true}
          value={msg}
          ref={inputRef}
          className="inputSendMsg"
          placeholder="Start typing here..."
          name=""
          id=""
        />

        {/* Send */}
        <button
          onClick={handleSendMessage}
          disabled={!msg.trim()}
          className="send-btn"
        >
          <Send className="send-icon" />
        </button>
      </div>

      {/* Security */}
      <div className="security-notice">
        <Shield className="security-icon" />
        <span>Private & Secure</span>
      </div>
    </div>
  );
};

export default ChatInput;