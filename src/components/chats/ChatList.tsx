"use client";

import { useChats } from "@/hooks/use-chats";
import ChatCard from "./ChatCard";
import { ScrollShadow } from "@nextui-org/react";

const ChatList = () => {
  const data = useChats();

  return (
    <ScrollShadow
      className="w-[300px]"
      offset={100}
      hideScrollBar
      orientation="horizontal"
    >
      <div className="mx-8 md:mx-0 md:p-4 space-y-4 md:bg-foreground/5 md:border rounded-xl dark:border-foreground-50 border-foreground-300">
        {data?.map((chat) => (
          <ChatCard key={chat.id} chat={chat} />
        ))}
      </div>
    </ScrollShadow>
  );
};

export default ChatList;
