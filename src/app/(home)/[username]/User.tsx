"use client";

import { chatService } from "@/services/chat.service";
import { useAuthStore } from "@/stores/auth.store";
import { IProfile } from "@/types/user.types";
import { Avatar, Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { PenBoxIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FollowButton from "./FollowButton";

const User = ({ profile }: { profile: IProfile }) => {
  const router = useRouter();

  const [isCurrentUser, setCurrent] = useState(false);

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (profile.user.id === user.id) setCurrent(true);
  });

  console.log(isCurrentUser);

  const { mutate } = useMutation({
    mutationKey: ["createChat"],
    mutationFn: () => chatService.createChat(profile.user.id),
    onSuccess: (response) => {
      router.push(`/chats/${response.id}`);
    },
  });

  function onSubmit() {
    mutate();
  }

  return (
    <div className="flex flex-col w-full md:p-4 space-y-4 md:bg-foreground/5 md:border rounded-xl dark:border-foreground-50 border-foreground-300">
      <div className="flex items-center gap-4">
        <Avatar className="w-20 h-20 text-large" radius="lg" />
        <div className="flex gap-4">
          {profile.statistics.map((statistic) => (
            <div key={statistic.label} className="flex flex-col items-center">
              <p>{statistic.value}</p>
              <p className="text-foreground/70">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{profile.user.displayName}</h1>
          <p className="text-muted text-primary">@{profile.user.username}</p>
        </div>
        {!isCurrentUser && (
          <div className="flex gap-2 items-center">
            <FollowButton id={profile.user.id}/>
            <Button onClick={onSubmit} color="default">
              <PenBoxIcon size={16} /> Написать
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
