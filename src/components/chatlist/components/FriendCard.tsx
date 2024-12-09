type FriendCardProps = {
  name: string;
  image?: string;
  lastMessage: string;
  isCurrentChat?: boolean;
};

export const FriendCard: React.FC<FriendCardProps> = ({
  name,
  image,
  lastMessage,
  isCurrentChat,
}) => (
  <button
    className={`p-16 block w-full cursor-pointer hover:bg-blue-50 border-b-1 border-gray-400 ${isCurrentChat ? "bg-blue-100" : "bg-gray-50"}`}
  >
    <span className="flex  items-center gap-16">
      {image && (
        <img
          src={image}
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
