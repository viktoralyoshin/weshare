import { followerService } from "@/services/follower.service";
import { useQuery } from "@tanstack/react-query";

export const useFollows = () => {
  const { data } = useQuery({
    queryKey: ["getFollows"],
    queryFn: () => followerService.getFollows(),
  });

  return data;
};
