import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const ChatLoading = () => (
  <div className="absolute top-[-50px] left-[20px] h-[40px] w-[90px] bg-white dark:bg-neutral-700 rounded shadow flex items-center justify-evenly">
    <div className="animate-pulse">
      <FontAwesomeIcon icon={faCircle} color="#00a2e8" size="xs" />
    </div>
    <div className="animate-pulse-slow">
      <FontAwesomeIcon icon={faCircle} color="#00a2e8" size="xs" />
    </div>
    <div className="animate-pulse-slowest">
      <FontAwesomeIcon icon={faCircle} color="#00a2e8" size="xs" />
    </div>
  </div>
);

export default ChatLoading;
