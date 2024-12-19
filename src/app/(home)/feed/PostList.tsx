"use client";

import Post from "@/components/post/Post";
import { useFeed } from "@/hooks/use-feed";

const PostList = () => {
  const data = useFeed();

  return (
    <div className="flex flex-col md:space-y-6 space-y-4 items-start">
      {data?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
