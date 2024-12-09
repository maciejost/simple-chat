import { ChatList, ChatWindow } from "./components";

function App() {
  return (
    <main className="chat-grid overflow-hidden">
      <ChatList />
      <ChatWindow />
    </main>
  );
}

export default App;
