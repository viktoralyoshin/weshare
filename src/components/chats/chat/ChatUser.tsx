"use client";

import { useAuthStore } from "@/stores/auth.store";
import { EnumUserRole, IUserResponse } from "@/types/user.types";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

const ChatUser = ({ users }: { users: IUserResponse[] }) => {
  let chatMember: IUserResponse = {
    id: "",
    username: "",
    displayName: "",
    role: EnumUserRole.user,
    createdAt: "",
    updatedAt: "",
  };

  const userState = useAuthStore((state) => state.user);

  users.map((user) => {
    if (user.id != userState.id) {
      chatMember = user;
    }
  });
  return (
    <Link
      href={`/${chatMember.username}`}
      className="flex p-2 gap-2 items-center hover:bg-foreground/5 rounded-xl ease-in-out duration-200"
    >
      <Avatar radius="lg" />
      <p>{chatMember.displayName}</p>
    </Link>
  );
};

export default ChatUser;
