"use client";

import { useUserByUsername } from "@/hooks/use-user-by-username";
import { useParams } from "next/navigation";
import User from "./User";
import Post from "@/components/post/Post";
import { useEffect } from "react";
import NewPost from "@/components/post/NewPost";
import { Avatar } from "@nextui-org/react";

const page = () => {
  const { username } = useParams();

  const data = useUserByUsername(username);
  useEffect(() => {
    console.log(data?.user.posts);
  }, [data]);

  return (
    <section className="space-y-4 mx-8 h-full">
      {data && <User profile={data} />}
      <div className="h-full space-y-4">
        <div className="flex items-center space-x-4 md:p-4 rounded-lg md:bg-foreground/5 md:border border-foreground-300 dark:border-foreground-50">
          <Avatar radius="lg" />
          <NewPost />
        </div>
        {data?.user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default page;
