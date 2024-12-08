import NewPost from "@/components/NewPost";
import Post from "@/components/Post";
import { IPost } from "@/types/post.types";
import { Avatar } from "@nextui-org/react";

const page = () => {
  const posts: IPost[] = [
    {
      id: "123",
      content: "Привет, мир!",
      createdAt: new Date(),
    },
    {
      id: "123",
      content: "Привет, мир!",
      createdAt: new Date(),
    },
  ];

  return (
    <div className="flex flex-col space-y-6 mx-8">
      <h1 className="text-4xl font-semibold">Лента</h1>
      <div className="flex items-center space-x-4 md:p-4 rounded-lg md:bg-foreground/5 md:border border-foreground-300 dark:border-foreground-50">
        <Avatar radius="lg" />
        <NewPost />
      </div>
      <div className="flex flex-col md:space-y-6 space-y-4 items-start">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
