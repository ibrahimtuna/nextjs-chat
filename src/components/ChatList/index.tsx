import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Company, setSelectedCompany } from "@/lib/store/slices/messagesSlice";
import { RootState, useDispatch, useSelector } from "@/lib/store/store";

type Props = {
  company: Company;
  closeMobileMenu: () => void;
};
const ChatList: React.FC<Props> = ({ company, closeMobileMenu }) => {
  const { messages } = useSelector((state: RootState) => state.messages);
  const [lastMessage, setLastMessage] = useState("");
  const dispatch = useDispatch();
  const handleChangeSelectedCompany = () => {
    dispatch(setSelectedCompany(company._id));
    closeMobileMenu();
  };

  useMemo(() => {
    const tmpMessages = [...messages];
    const foundMessage = tmpMessages
      .sort((a, b) => b.createdAt - a.createdAt)
      .find((item) => item.companyId === company._id)?.content;
    if (foundMessage) {
      setLastMessage(foundMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <li
      className="hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer h-[72px] flex items-center cursor-pointer"
      onClick={handleChangeSelectedCompany}
    >
      <Image
        src={company.assistantPhotoUrl}
        alt={company.name}
        width={50}
        height={50}
        className="rounded-full w-[50px] h-[50px] ms-2"
      />
      <div className="ms-2 border-b-[1px] dark:border-black pb-2 h-full flex flex-col justify-center w-[calc(100vw-1rem-50px)] md:w-[calc(100%-1rem-50px)]">
        <div className="flex items-center">
          <h3 className="text-gray-800 dark:text-gray-100">{company.name}</h3>
          <span className="ms-2 text-xs text-gray-600 dark:text-gray-400">
            - {company.market}
          </span>
        </div>
        <span className="text-gray-800 dark:text-gray-200 text-xs mt-1 text-nowrap text-ellipsis max-w-full overflow-hidden pe-2">
          {lastMessage}
        </span>
      </div>
    </li>
  );
};
export default ChatList;
