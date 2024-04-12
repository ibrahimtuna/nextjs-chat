import ChatList from "@/components/ChatList";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DarkModeToggle from "@/components/DarkModeToggle";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (newState: boolean) => void;
};

const Sidemenu: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const { isUsersLoading, users } = useSelector(
    (state: RootState) => state.messages,
  );

  const openedMobileMenuClass =
    "absolute top-[0px] w-[100vw] h-full z-10 max-md:animate-menu-open";
  const closedMobileMenuClass =
    "absolute top-[0px] w-[100vw] h-full z-10 max-md:animate-menu-close";

  return (
    <div
      className={`md:relative md:w-[25vw] md:min-w-[25vw] md:max-w-[25vw] bg-white max-md:h-dvh dark:bg-neutral-800 md:rounded-bl-lg md:rounded-tl-lg border-r-[1px] dark:border-black ${isMobileMenuOpen ? openedMobileMenuClass : closedMobileMenuClass}`}
    >
      <ul className="overflow-y-auto h-full">
        <li className="h-[60px] flex items-center justify-start ps-3 border-b-[1px] dark:border-black relative">
          <span className="text-[#00a2e8]">chat.com</span>
          <DarkModeToggle />
        </li>
        {isUsersLoading ? (
          <div className="flex items-center justify-center py-5">
            <FontAwesomeIcon
              icon={faCircleNotch}
              size={"2x"}
              color={"#00a2e8"}
              className="fa-spin"
            />
          </div>
        ) : (
          users.map((user) => (
            <ChatList
              key={user.id}
              user={user}
              closeMobileMenu={() => setIsMobileMenuOpen(false)}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Sidemenu;
