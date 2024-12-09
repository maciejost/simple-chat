type HeaderProps = {
  name: string;
  image?: string;
};

export const Header: React.FC<HeaderProps> = ({ name, image }) => {
  return (
    <header className="py-16 border-gray-400 border-b-2 px-24 bg-gray-200">
      <span className="flex  items-center gap-16">
        {image && (
          <img
            src={image}
            className="h-64 rounded-full object-contain w-64"
            alt={`${name}'s profile picture`}
          />
        )}
        <h1 className="text-2xl">
          <span className="sr-only">Chat with:</span>
          {name}
        </h1>
      </span>
    </header>
  );
};
