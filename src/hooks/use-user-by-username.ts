import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export const useUserByUsername = (username: string | string[] | undefined) => {
  if (username != undefined) {
    const { data } = useQuery({
      queryKey: ["getUserByUsername"],
      queryFn: () => userService.getUser(username),
    });

    return data;
  }
};
