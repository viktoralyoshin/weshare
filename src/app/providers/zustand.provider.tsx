import { EnumTokens } from "@/services/auth-token.service";
import { userService } from "@/services/user.service";
import { useAuthStore } from "@/stores/auth.store";
import { user } from "@nextui-org/theme";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ZustandProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (accessToken) {
      const fetchUser = async () => {
        setUser((await userService.getCurrentUser()).user);
      };

      fetchUser();
    }
  }, [accessToken]);

  return <>{children}</>;
};

export default ZustandProvider;
