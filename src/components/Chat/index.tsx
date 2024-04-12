import Image from "next/image";
import ChatInput from "@/components/Chat/ChatInput";
import ChatBubble from "@/components/Chat/ChatBubble";
import { RootState, useSelector } from "@/lib/store/store";
import React, { useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { User } from "@/lib/store/slices/types";

type Props = {
  openMobileMenu: () => void;
};
const Chat: React.FC<Props> = ({ openMobileMenu }) => {
  const { messages, selectedUser, users } = useSelector(
    (state: RootState) => state.messages,
  );
  const [activeChat, setActiveChat] = useState<User>();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const selectedChatMessages = messages
    .filter((item) => item.userId === selectedUser)
    .sort((a, b) => a.createdAt - b.createdAt);

  useMemo(() => {
    const foundChat = users.find(
      (user) => user.id === selectedUser,
    );
    if (foundChat) {
      setActiveChat(foundChat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser]);

  const handleScrollBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo(0, 999999999999);
    }
  };

  useMemo(() => {
    setTimeout(() => {
      handleScrollBottom();
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <div className="w-[100vw] md:w-[75vw] bg-white max-md:h-dvh dark:bg-neutral-800 md:rounded-br-lg md:rounded-tr-lg flex flex-col justify-between">
      {activeChat ? (
        <div className="h-[60px] min-h-[60px] flex items-center bg-white dark:bg-neutral-800 border-b-[1px] dark:border-black ps-5 md:rounded-tr-lg">
          <button className="block md:hidden me-5" onClick={openMobileMenu}>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="text-gray-600 dark:text-gray-400"
            />
          </button>
          <Image
            src={activeChat.picture.thumbnail}
            alt={`${activeChat.name.first} ${activeChat.name.last}`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex items-center">
            <h3
              className="ms-2 dark:text-gray-100"
              onClick={handleScrollBottom}
            >
              {`${activeChat.name.first} ${activeChat.name.last}`}
            </h3>
          </div>
        </div>
      ) : null}
      <div
        className="bg-gray-50 dark:bg-neutral-600 h-full p-5 overflow-y-auto"
        ref={messageContainerRef}
      >
        {selectedChatMessages.map((chat, i) => (
          <ChatBubble
            key={i}
            message={chat.content}
            role={chat.role}
            createdAt={chat.createdAt}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
