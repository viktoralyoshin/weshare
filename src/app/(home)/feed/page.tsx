import { Avatar } from "@nextui-org/react";
import PostList from "./PostList";

const page = () => {
  return (
    <div className="flex flex-col space-y-6 mx-8">
      <h1 className="text-4xl font-semibold">Лента</h1>
      <PostList />
    </div>
  );
};

export default page;
