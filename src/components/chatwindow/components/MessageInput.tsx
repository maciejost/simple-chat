import { useState } from "react";

export const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    if (!message.length) return;

    e.preventDefault();
    console.log({ message });
    setMessage("");
    // TODO: load default messages into a state variable owned higher up in the component tree
    // TODO: add the new message to the list of messages
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center justify-end gap-24 text-lg p-24"
    >
      <input
        className="w-full px-16 transition-all py-8 rounded-sm focus:border-2  border-[1px]  border-gray-600 hover:border-2 focus:border-black "
        name="message"
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Aa"
      />

      {!!message.length && (
        <button
          className="rounded-4xl bg-gray-800 px-20 py-10 text-white cursor-pointer hover:scale-107 transition-all"
          type="submit"
        >
          Send
        </button>
      )}
    </form>
  );
};
