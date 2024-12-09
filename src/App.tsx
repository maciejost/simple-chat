import { Dispatch, useState } from "react";
import { ChatList, ChatWindow } from "./components";
import { chatFactory, users } from "./data";
import { createContext, useContext } from "react";
import { Chat, User } from "./data/model";

type ChatContextType = {
  currentChat: [User["id"], User["id"]];
  setCurrentChat: Dispatch<React.SetStateAction<[User["id"], User["id"]]>>;
  chats: Chat[];
  setChats: Dispatch<React.SetStateAction<Chat[]>>;
  users: User[];
  loggedInUser: User;
};

const ChatContext = createContext({} as ChatContextType);

export const useChatContext = () => {
  return useContext(ChatContext);
};

function App() {
  const loggedInUser = users[0];

  const usersWithoutLoggedIn = users.filter(
    (user) => user.id !== loggedInUser.id,
  );

  const [currentChat, setCurrentChat] = useState([
    usersWithoutLoggedIn[0].id,
    loggedInUser.id,
  ] as [User["id"], User["id"]]);

  const [chats, setChats] = useState<Chat[]>(
    usersWithoutLoggedIn.map((user) => chatFactory(user, loggedInUser)),
  );

  return (
    <ChatContext.Provider
      value={{
        currentChat,
        setCurrentChat,
        chats,
        setChats,
        users,
        loggedInUser,
      }}
    >
      <main className="chat-grid overflow-hidden">
        <ChatList />
        <ChatWindow />
      </main>
    </ChatContext.Provider>
  );
}

export default App;
