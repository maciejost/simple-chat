import { Dispatch, useMemo, useState } from "react";
import { ChatList, ChatWindow } from "./components";
import { chatFactory, users } from "./data";
import { createContext, useContext } from "react";
import { Chat, User } from "./data/model";

type ChatContextType = {
  currentChat: [User["id"], User["id"]];
  setCurrentChat: Dispatch<React.SetStateAction<[User["id"], User["id"]]>>;
  chats: Chat[];
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
  console.log(loggedInUser, usersWithoutLoggedIn);

  const [currentChat, setCurrentChat] = useState([
    loggedInUser.id,
    usersWithoutLoggedIn[0].id,
  ] as [User["id"], User["id"]]);

  const chats = useMemo(() => {
    return usersWithoutLoggedIn.map((user) => chatFactory(user, loggedInUser));
  }, [loggedInUser, usersWithoutLoggedIn]);

  return (
    <ChatContext.Provider
      value={{ currentChat, setCurrentChat, chats, users, loggedInUser }}
    >
      <main className="chat-grid overflow-hidden">
        <ChatList />
        <ChatWindow />
      </main>
    </ChatContext.Provider>
  );
}

export default App;
