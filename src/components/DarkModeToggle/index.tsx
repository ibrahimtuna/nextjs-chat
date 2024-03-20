import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { RootState, useDispatch, useSelector } from "@/lib/store/store";
import { darkmodeToggler } from "@/lib/store/slices/messagesSlice";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.messages);
  return (
    <button
      onClick={() => dispatch(darkmodeToggler(!isDarkMode))}
      className="md:flex absolute top-[0px] right-[0px] h-full flex items-center pe-5"
    >
      <FontAwesomeIcon
        icon={isDarkMode ? faSun : faMoon}
        size="xl"
        className={isDarkMode ? "text-gray-100" : "text-zinc-500"}
      />
    </button>
  );
};

export default DarkModeToggle;
