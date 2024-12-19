'use client'

import { useAuthStore } from "@/stores/auth.store";
import { IChat } from "@/types/chat.types";
import { EnumUserRole, IUser, IUserResponse } from "@/types/user.types";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

const ChatCard = ({ chat }: { chat: IChat }) => {
  let chatMember: IUserResponse = {
    id: "",
    username: "",
    displayName: "",
    role: EnumUserRole.user,
    createdAt: "",
    updatedAt: "",
  };

  const userState = useAuthStore((state)=>state.user)

  chat.users.map((user) => {
    if (user.id != userState.id) {
      chatMember = user;
    }
  });

  return (
    <Link href={`/chats/${chat.id}`} className="flex p-2 gap-2 items-center hover:bg-foreground/5 rounded-xl ease-in-out duration-200">
      <Avatar radius="lg" />
      <p>{chatMember.displayName}</p>
    </Link>
  );
};

export default ChatCard;
