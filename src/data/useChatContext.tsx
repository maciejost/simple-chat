// import { createContext } from "react";

import { createContext, useContext } from "react";
import { Chat, User } from "./model";

//   const loggedInUser = users[0];
//   const usersWithoutLoggedIn = users.splice(1);

//   const [currentChat, setCurrentChat] = useState(
//     `chat-${usersWithoutLoggedIn[0].id}-${loggedInUser.id}`,
//   );

//   const chats = useMemo(() => {
//     return usersWithoutLoggedIn.map((user) => chatFactory(user, loggedInUser));
//   }, [loggedInUser]);

type ChatContextType = {
  currentChat: string;
  setCurrentChat: (id: string) => void;
  chats: Chat[];
  users: User[];
};

export const ChatContext = createContext({
  currentChat: "",

  chats: [] as Chat[],
  users: [] as User[],
} as ChatContextType);

export const ChatProvider = ChatContext.Provider;

export const useChatContext = () => {
  return useContext(ChatContext);
};
