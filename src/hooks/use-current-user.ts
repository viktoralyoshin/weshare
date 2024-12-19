import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data } = useQuery({
    queryKey: ["getCurrentUser"],
    queryFn: () => userService.getCurrentUser(),
  });

  return data
};
