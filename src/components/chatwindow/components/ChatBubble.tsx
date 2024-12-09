import { useState } from "react";
import { Message } from "../../../data/model";
import { useChatContext } from "../../../App";

type ChatBubbleProps = {
  chatMessage: Message;
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({ chatMessage }) => {
  const { loggedInUser } = useChatContext();

  const variant = loggedInUser.id === chatMessage.sentBy ? "SENT" : "RECEIVED";

  const { sentAt, message } = chatMessage;

  const variantClasses = variant === "SENT" ? "bg-blue-400" : "bg-green-400 ";
  const [showSentTime, setShowSentTime] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowSentTime(true)}
      onMouseLeave={() => setShowSentTime(false)}
      className={`flex gap-8 items-center ${variant === "SENT" ? "flex-row self-end" : "flex-row-reverse self-start"}`}
    >
      {/* Adding and removing this element is more costly than simply toggling the `display` property in CSS.
        Just didn't want to spend the time adding a component for it in tailwind 😅 */}
      {showSentTime && (
        <span className="text-sm text-gray-600">
          {sentAt.toLocaleDateString()} {sentAt.toLocaleTimeString()}
        </span>
      )}

      <div className={`px-20 py-14 w-fit ${variantClasses} rounded-4xl  `}>
        {message}
      </div>
    </div>
  );
};
