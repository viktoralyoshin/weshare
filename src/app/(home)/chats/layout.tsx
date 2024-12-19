import React from "react";
import ChatList from "../../../components/chats/ChatList";

const ChatLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex gap-2 w-full h-[calc(100vh-100px)]">
      <ChatList />
      <div className="w-full md:bg-foreground/5 md:p-4 md:border rounded-xl dark:border-foreground-50 border-foreground-300">
        {children}
      </div>
    </div>
  );
};

export default ChatLayout;
