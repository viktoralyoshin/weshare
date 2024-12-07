"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
} from "@nextui-org/react";
import { LogOutIcon, Settings, User2Icon } from "lucide-react";

const UserComponent = () => {
  return (
    <Dropdown shouldBlockScroll={false}>
      <DropdownTrigger>
        <Avatar
          radius="lg"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownSection title="Профиль" showDivider>
          <DropdownItem key="profile" startContent={<User2Icon size={18} />}>
            Мой профиль
          </DropdownItem>
          <DropdownItem key="settings" startContent={<Settings size={18} />}>
            Настройки
          </DropdownItem>
          <DropdownItem></DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="logout"
            color="danger"
            startContent={<LogOutIcon size={18} />}
          >
            Выйти
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserComponent;
