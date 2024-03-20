"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent, useMemo, useRef, useState } from "react";
import axios from "axios";
import { RootState, useDispatch, useSelector } from "@/lib/store/store";
import { addMessage } from "@/lib/store/slices/messagesSlice";
import ChatLoading from "@/components/Chat/ChatLoading";

const ChatInput = () => {
  const dispatch = useDispatch();
  const { selectedCompany, identifier } = useSelector(
    (state: RootState) => state.messages,
  );
  const [inputValue, setInputValue] = useState("");
  const [isAnswerWaiting, setIsAnswerWaiting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useMemo(() => {
    if (selectedCompany) {
      inputRef.current?.focus();
    }
  }, [selectedCompany]);

  if (!selectedCompany) {
    return null;
  }

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tmpMessageInput = inputValue;
    setInputValue("");
    setIsAnswerWaiting(true);
    dispatch(
      addMessage({
        content: tmpMessageInput,
        role: "user",
        companyId: selectedCompany,
      }),
    );
    axios
      .post(`${process.env.SEND_MESSAGE_API}`, {
        message: tmpMessageInput,
        identifier,
        companyId: selectedCompany,
      })
      .then(({ data }) => {
        setIsAnswerWaiting(false);
        dispatch(
          addMessage({
            content: data.message,
            role: "assistant",
            companyId: selectedCompany,
          }),
        );
        setTimeout(() => {
          inputRef.current?.focus();
        }, 400);
      })
      .catch((err) => {
        console.log(err, "err happen when getting ai response");
        alert("Hata oluştu");
      });
  };

  return (
    <form
      className="w-100 h-[72px] md:rounded-br-lg flex justify-center items-center bg-gray-100 px-5 border-t-[1px] dark:border-black relative dark:bg-neutral-800"
      onSubmit={handleSendMessage}
    >
      {isAnswerWaiting ? <ChatLoading /> : null}
      <input
        type="text"
        className="w-full h-[36px] rounded placeholder-gray-500 dark:placeholder-gray-300 px-2 dark:bg-neutral-600 dark:text-gray-100"
        placeholder="Bir mesaj yazın"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isAnswerWaiting}
        required
        ref={inputRef}
        autoFocus
      />
      <button type="submit">
        <FontAwesomeIcon
          icon={faPaperPlane}
          size={"lg"}
          className={`ms-2 ${inputValue?.length ? "text-black dark:text-gray-100" : "text-gray-400"}`}
        />
      </button>
    </form>
  );
};

export default ChatInput;