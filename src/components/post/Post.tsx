import { likeService } from "@/services/like.service";
import { useAuthStore } from "@/stores/auth.store";
import { IPost } from "@/types/post.types";
import { Button, User } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart, MessageCircleIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Post = ({ post }: { post: IPost }) => {
  const [isLiked, setLiked] = useState(false);

  const user = useAuthStore((state) => state.user);

  const queryClient = useQueryClient();

  useEffect(() => {
    post.Like.map((like) => {
      if (like.userId === user.id) setLiked(true);
    });
  }, []);

  const { mutate: createLike } = useMutation({
    mutationKey: ["createLike"],
    mutationFn: () => likeService.createLike(post.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCurrentUser"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getUserByUsername"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getFeed"],
      });
      setLiked(true);
    },
  });

  const { mutate: deleteLike } = useMutation({
    mutationKey: ["createLike"],
    mutationFn: () => likeService.deleteLike(post.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCurrentUser"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getUserByUsername"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getFeed"],
      });
      setLiked(false);
    },
  });

  function handleLiked() {
    isLiked ? deleteLike() : createLike();
  }

  return (
    <div className="flex flex-col w-full md:p-4 space-y-4 md:bg-foreground/5 md:border rounded-xl dark:border-foreground-50 border-foreground-300">
      <div className="flex gap-2 items-center justify-between">
        <Link href={`/${post.author.username}`}>
          <User
            avatarProps={{
              radius: "lg",
              size: "sm",
            }}
            name={post.author.displayName}
          />
        </Link>
        <p className="text-sm text-foreground/70">
          {new Intl.DateTimeFormat("ru", {
            month: "long",
            day: "numeric",
          }).format(new Date(post.createdAt))}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <p>{post.content}</p>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center">
          <Button
            color={isLiked ? "danger" : "default"}
            radius="full"
            variant="flat"
            onClick={handleLiked}
          >
            <Heart size={16} />
            <p className="text-sm">{post.Like.length}</p>
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button radius="full" variant="flat">
            <MessageCircleIcon size={16} />
            <p className="text-sm">{post.Comment.length}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
