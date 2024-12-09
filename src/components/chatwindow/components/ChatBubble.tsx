import { PropsWithChildren } from "react";

type ChatBubbleProps = {
  variant: "SENT" | "RECEIVED";
  isRepliedTo?: boolean;
  sentTime: Date;
};

export const ChatBubble: React.FC<PropsWithChildren<ChatBubbleProps>> = ({
  children,
  variant,
  isRepliedTo,
  sentTime,
}) => {
  const backgroundColor = variant === "SENT" ? "bg-blue-500" : "bg-green-500";

  return (
    <div className={`px-24 py-16 w-fit ${backgroundColor}`}>{children}</div>
  );
};
