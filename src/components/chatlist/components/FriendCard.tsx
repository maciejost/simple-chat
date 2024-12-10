import { Chat } from "@data/model";
import { participantsToChatID } from "@utils/participantsToChatID";
import { useGetParticipant } from "@utils/useGetParticipant";
import { useChatContext } from "src/App";

type FriendCardProps = {
  chat: Chat;
};

export const FriendCard: React.FC<FriendCardProps> = ({ chat }) => {
  const { currentChat, setCurrentChat } = useChatContext();
  const { participants, id, messages } = chat;

  const sender = useGetParticipant(participants);

  if (!sender) return null;

  const { avatar, name } = sender;

  const currentChatId = participantsToChatID(currentChat);
  const isCurrentChat = currentChatId === id;

  // The API should return the messages-array already sorted, if it doesn't, getting the last message like this can be risky
  const lastMessage = messages[messages.length - 1].message;

  return (
    <button
      onClick={() => setCurrentChat(participants)}
      className={`p-16 block w-full text-left cursor-pointer hover:bg-blue-50 border-b-1 border-gray-400 ${isCurrentChat ? "bg-blue-100" : "bg-gray-50"}`}
    >
      {/* The name/avatar-combo gets reused in the header, and could be used elsewhere in a larger app.
        Could be refactored to its own component, with a couple of size/layout variants. */}
      <span className="flex  items-center gap-16">
        {avatar && (
          <img
            src={avatar}
            className="h-40 rounded-full object-contain w-40"
            alt={`${name}'s profile picture`}
          />
        )}
        <h1 className="text-xl font-semibold">
          <span className="sr-only">Chat with:</span>
          {name}
        </h1>
      </span>
      <p className="mt-12 text-lg">{lastMessage}</p>
    </button>
  );
};
