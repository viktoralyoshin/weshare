import { postService } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";

export const useFeed = () => {
  const { data } = useQuery({
    queryKey: ["getFeed"],
    queryFn: () => postService.getFeed(),
  });

  return data;
};
