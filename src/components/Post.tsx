import { IPost } from "@/types/post.types";
import { Button, Image, User } from "@nextui-org/react";
import { Heart, MessageCircleIcon } from "lucide-react";
import React from "react";

const Post = ({ post }: { post: IPost }) => {
  return (
    <div className="flex flex-col w-full md:p-4 space-y-4 md:bg-foreground/5 md:border rounded-xl dark:border-foreground-50 border-foreground-300">
      <div className="flex gap-2 items-center justify-between">
        <User
          avatarProps={{
            radius: "lg",
            size: "sm",
          }}
          name="Jacob Monarch"
        />
        <p className="text-sm text-foreground/70">
          {new Intl.DateTimeFormat("ru", {
            month: "long",
            day: "numeric",
          }).format(post.createdAt)}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <p>{post.content}</p>
        <Image
          alt="NextUI hero Image"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-2 items-center">
          <Button color="danger" radius="full" variant="flat">
            <Heart size={16} />
            <p className="text-sm">123</p>
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button radius="full" variant="flat">
            <MessageCircleIcon size={16} />
            <p className="text-sm">12</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
