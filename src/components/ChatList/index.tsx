import React, { useMemo, useState } from "react";
import Image from "next/image";
import { setSelectedUser } from "@/lib/store/slices/messagesSlice";
import { RootState, useDispatch, useSelector } from "@/lib/store/store";
import { Message, User } from "@/lib/store/slices/types";
import moment from "moment";

type Props = {
  user: User;
  closeMobileMenu: () => void;
};
const ChatList: React.FC<Props> = ({ user, closeMobileMenu }) => {
  const { messages } = useSelector((state: RootState) => state.messages);
  const [lastMessage, setLastMessage] = useState<Message>();
  const dispatch = useDispatch();
  const handleChangeSelectedUser = () => {
    dispatch(setSelectedUser(user.id));
    closeMobileMenu();
  };

  useMemo(() => {
    const tmpMessages = [...messages];
    const foundMessage = tmpMessages
      .sort((a, b) => b.createdAt - a.createdAt)
      .find((item) => item.userId === user.id);
    if (foundMessage) {
      setLastMessage(foundMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <li
      className="hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer h-[72px] flex items-center cursor-pointer"
      onClick={handleChangeSelectedUser}
    >
      <Image
        src={user.picture.thumbnail}
        alt={`${user.name.first} ${user.name.last}`}
        width={48}
        height={48}
        className="rounded-full ms-2"
      />
      <div className="ms-2 border-b-[1px] dark:border-black h-full flex flex-col justify-center w-[calc(100vw-1rem-50px)] md:w-[calc(100%-1rem-50px)]">
        <h3 className="text-gray-800 dark:text-gray-100">{`${user.name.first} ${user.name.last}`}</h3>
        <div className="text-gray-600 dark:text-gray-200 text-xs mt-1 flex items-center justify-between pe-5">
          <span className="text-nowrap text-ellipsis max-w-full overflow-hidden pe-2">
            {lastMessage?.content || "No messages yet."}
          </span>
          {lastMessage ? (
            <span>{moment(lastMessage.createdAt).format("hh:mm A")}</span>
          ) : null}
        </div>
      </div>
    </li>
  );
};
export default ChatList;
