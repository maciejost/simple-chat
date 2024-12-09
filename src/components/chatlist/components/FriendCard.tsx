import { useChatContext } from "../../../App";
import { Chat } from "../../../data/model";
import { participantsToChatID } from "../../utils/participantsToChatID";
import { useGetParticipant } from "../../utils/useGetParticipant";

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

  const lastMessage = messages[messages.length - 1].message;

  return (
    <button
      onClick={() => setCurrentChat(participants)}
      className={`p-16 block w-full text-left cursor-pointer hover:bg-blue-50 border-b-1 border-gray-400 ${isCurrentChat ? "bg-blue-100" : "bg-gray-50"}`}
    >
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
