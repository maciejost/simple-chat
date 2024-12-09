import { useMemo, useState } from "react";
import { ChatList, ChatWindow } from "./components";
import { chatFactory, users } from "./data";
import { createContext, useContext } from "react";
import { Chat, User } from "./data/model";

type ChatContextType = {
  currentChat: string;
  setCurrentChat: (id: string) => void;
  chats: Chat[];
  users: User[];
};

const ChatContext = createContext({} as ChatContextType);

export const useChatContext = () => {
  return useContext(ChatContext);
};

function App() {
  const loggedInUser = users[0];
  const usersWithoutLoggedIn = users.splice(1);

  const [currentChat, setCurrentChat] = useState(
    `chat-${usersWithoutLoggedIn[0].id}-${loggedInUser.id}`,
  );

  const chats = useMemo(() => {
    return usersWithoutLoggedIn.map((user) => chatFactory(user, loggedInUser));
  }, [loggedInUser, usersWithoutLoggedIn]);

  return (
    <ChatContext.Provider value={{ currentChat, setCurrentChat, chats, users }}>
      <main className="chat-grid overflow-hidden">
        <ChatList />
        <ChatWindow />
      </main>
    </ChatContext.Provider>
  );
}

export default App;
