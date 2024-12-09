import { PropsWithChildren, useState } from "react";

type ChatBubbleProps = {
  variant: "SENT" | "RECEIVED";
  sentTime: Date;
};

export const ChatBubble: React.FC<PropsWithChildren<ChatBubbleProps>> = ({
  children,
  variant,
  sentTime,
}) => {
  const variantClasses = variant === "SENT" ? "bg-blue-400" : "bg-green-400 ";
  const [showSentTime, setShowSentTime] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowSentTime(true)}
      onMouseLeave={() => setShowSentTime(false)}
      className={`flex gap-8 items-center ${variant === "SENT" ? "flex-row self-end" : "flex-row-reverse self-start"}`}
    >
      {showSentTime && (
        <span className="text-sm text-gray-600">
          {sentTime.toLocaleDateString()} {sentTime.toLocaleTimeString()}
        </span>
      )}

      <div className={`px-20 py-14 w-fit ${variantClasses} rounded-4xl  `}>
        {children}
      </div>
    </div>
  );
};
