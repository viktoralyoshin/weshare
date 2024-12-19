"use client";

import { useParams } from "next/navigation";
import ChatUser from "@/components/chats/chat/ChatUser";
import MessageList from "@/components/chats/chat/MessageList";
import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { HeartHandshakeIcon, SendIcon } from "lucide-react";
import { socket } from "@/socket";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth.store";
import { useChat } from "./use-chat";

export type TypeMessage = {
  senderId: string;
  chatId: string;
  content: string;
};

const page = () => {
  const { id } = useParams();

  const [value, setValue] = useState("");

  const data = useChat(id);

  const { mutate } = useMutation({
    mutationKey: ["sendMessage"],
    mutationFn: (message: any): any => {
      socket.emit("sendMessage", message);
    },
    onSuccess: () => {
      setValue("");
    },
  });

  const user = useAuthStore((state) => state.user);

  const sendMessage = () => {
    const message = {
      content: value,
      chatId: id,
      senderId: user.id,
    };
    mutate(message);
  };

  return (
    <div className="flex flex-col justify-between space-y-4 h-full w-full">
      {data?.users && <ChatUser users={data.users} />}
      {!data?.messages || data?.messages.length === 0 ? (
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center p-2 rounded-lg justify-center bg-background gap-2">
            <HeartHandshakeIcon />
            <p>Начните диалог</p>
          </div>
        </div>
      ) : (
        <MessageList messages={data.messages} />
      )}
      <div className="mx-2 flex gap-2">
        <Textarea
          placeholder="Введите сообщение..."
          value={value}
          onValueChange={setValue}
          minRows={1}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <Button color="primary" onClick={sendMessage}>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default page;
