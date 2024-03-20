import ChatList from "@/components/ChatList";
import Image from "next/image";
import Link from "next/link";
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
  const { isCompaniesLoading, companies } = useSelector(
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
      <ul>
        <li className="h-[60px] flex items-center justify-center border-b-[1px] dark:border-black relative">
          <Link href={"https://biens.ai"}>
            <Image
              src={"biens.ai.svg"}
              alt={"biens-logo"}
              width={90}
              height={30}
            />
          </Link>
          <DarkModeToggle />
        </li>
        {isCompaniesLoading ? (
          <div className="flex items-center justify-center py-5">
            <FontAwesomeIcon
              icon={faCircleNotch}
              size={"2x"}
              color={"#00a2e8"}
              className="fa-spin"
            />
          </div>
        ) : (
          companies.map((company) => (
            <ChatList
              key={company._id}
              company={company}
              closeMobileMenu={() => setIsMobileMenuOpen(false)}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Sidemenu;
