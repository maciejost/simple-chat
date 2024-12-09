import { FriendCard } from "./components";

export const ChatList = () => {
  return (
    <section className="overflow-auto">
      <FriendCard
        name="Maciej Ostrowski"
        image="https://thispersondoesnotexist.com/"
        lastMessage="Hello are we going bowling, or not?"
      />
      <FriendCard
        name="Maciej Ostrowski"
        image="https://thispersondoesnotexist.com/"
        lastMessage="Hello are we going bowling, or not?"
        isCurrentChat
      />
      <FriendCard
        name="Maciej Ostrowski"
        image="https://thispersondoesnotexist.com/"
        lastMessage="Hello are we going bowling, or not?"
      />
      <FriendCard
        name="Maciej Ostrowski"
        image="https://thispersondoesnotexist.com/"
        lastMessage="Hello are we going bowling, or not?"
      />
      <FriendCard
        name="Maciej Ostrowski"
        image="https://thispersondoesnotexist.com/"
        lastMessage="Hello are we going bowling, or not?"
      />
      <FriendCard
        name="Maciej Ostrowski"
        image="https://thispersondoesnotexist.com/"
        lastMessage="Hello are we going bowling, or not?"
      />
    </section>
  );
};
