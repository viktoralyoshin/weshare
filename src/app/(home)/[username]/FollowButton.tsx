"use client";

import { useFollows } from "@/hooks/use-follows";
import { followerService } from "@/services/follower.service";
import { useAuthStore } from "@/stores/auth.store";
import { Button } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const FollowButton = ({ id }: { id: string }) => {
  const [isFollow, setFollow] = useState(false);

  const data = useFollows();

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (data) {
      data.map((follower) => {
        if (follower.followerId === user.id) setFollow(true);
      });
    }
  });

  const queryClient = useQueryClient();

  const { mutate: follow } = useMutation({
    mutationKey: ["createFollow"],
    mutationFn: () => followerService.follow(id),
    onSuccess: () => {
      setFollow(true);
      queryClient.invalidateQueries({
        queryKey: ["getUserByUsername"],
      });
      queryClient.invalidateQueries({
        queryKey: ['getCurrentUser']
      })
    },
  });

  const { mutate: unFollow } = useMutation({
    mutationKey: ["createFollow"],
    mutationFn: () => followerService.unFollow(id),
    onSuccess: () => {
      setFollow(false);
      queryClient.invalidateQueries({
        queryKey: ["getUserByUsername"],
      });
    },
  });

  const onFollow = () => {
    follow();
  };

  const onUnFollow = () => {
    unFollow();
  };

  return (
    <div>
      {!isFollow ? (
        <Button onClick={onFollow} color="primary">
          Подписаться
        </Button>
      ) : (
        <Button onClick={onUnFollow}>Отписаться</Button>
      )}
    </div>
  );
};

export default FollowButton;
