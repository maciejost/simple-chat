import { ChatBubble, MessageInput } from "./components";

export const ChatWindow = () => {
  const date = new Date();

  return (
    <section className="p-24 justify-between flex flex-col h-screen border-l-1 border-gray-300">
      <div className="flex  flex-col gap-16">
        <ChatBubble
          sentTime={new Date(date.setDate(date.getDate() - 3))}
          variant="RECEIVED"
        >
          Are you up for some bowling later this week?
        </ChatBubble>
        <ChatBubble
          sentTime={new Date(date.setDate(date.getDate() - 1))}
          variant="SENT"
        >
          Hello
        </ChatBubble>
        <ChatBubble
          sentTime={new Date(date.setDate(date.getDate() - 4))}
          variant="SENT"
        >
          How are you
        </ChatBubble>
        <ChatBubble
          sentTime={new Date(date.setDate(date.getDate() - 2))}
          variant="RECEIVED"
        >
          Hello
        </ChatBubble>
        <ChatBubble
          sentTime={new Date(date.setDate(date.getDate() - 5))}
          variant="SENT"
        >
          Are you up for some bowling later this week?
        </ChatBubble>
        <ChatBubble
          sentTime={new Date(date.setDate(date.getDate() - 6))}
          variant="RECEIVED"
        >
          How are you
        </ChatBubble>
      </div>
      <MessageInput />
    </section>
  );
};
