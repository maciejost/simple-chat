import { createContext, Dispatch, useContext, useState } from "react";

import { users } from "@data/mockUsers";
import { Chat, User } from "@data/model";
import { chatFactory } from "@data/chatFactory";
import { ChatList, ChatWindow } from "@components/index";

type ChatContextType = {
  currentChat: Chat["participants"];
  setCurrentChat: Dispatch<React.SetStateAction<Chat["participants"]>>;
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
  ] as Chat["participants"]);

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
