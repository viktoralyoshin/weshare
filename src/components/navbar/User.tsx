"use client";

import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/stores/auth.store";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { LogOutIcon, Settings, User2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserComponent = () => {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      setUser({});
      router.push("/");
    },
  });

  function logOut() {
    mutate();
  }

  return (
    <Dropdown shouldBlockScroll={false}>
      <DropdownTrigger>
        <Avatar radius="lg" />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownSection title="Профиль" showDivider>
          <DropdownItem key="profile">
            <Link
              className="flex items-center gap-2"
              href={`/${user.username}`}
            >
              <User2Icon />
              Мой профиль
            </Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="logout"
            color="danger"
            startContent={<LogOutIcon size={18} />}
            onPress={logOut}
          >
            Выйти
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserComponent;
