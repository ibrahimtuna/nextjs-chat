import React from "react";
import { ChatMessage } from "@/dummy";
import moment from "moment";
import Linkify from "react-linkify";

const ChatBubble: React.FC<ChatMessage> = ({ message, role, createdAt }) => (
  <Linkify>
    <div className={`flex mb-3 flex ${role === "user" ? "justify-end" : ""}`}>
      <div
        className={`w-max p-2 rounded-t-lg text-black dark:text-neutral-200 text-sm shadow max-w-[70vw] md:max-w-[40vw] whitespace-pre-line ${role === "user" ? "rounded-bl-lg bg-sky-100 dark:bg-sky-900" : "rounded-br-lg bg-white dark:bg-neutral-800"}`}
      >
        {message}
        <span className="text-xs flex self-end text-gray-500 dark:text-gray-400 mt-2">
          {moment(createdAt).format("HH:mm")}
        </span>
      </div>
    </div>
  </Linkify>
);

export default ChatBubble;
