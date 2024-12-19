import { Badge, Button, Input } from "@nextui-org/react";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import UserComponent from "./User";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <section className="fixed z-50 bg-background h-[70px] top-0 left-0 w-full">
      <div className="flex items-center justify-between mx-8 h-full gap-8">
        <div className="flex items-center gap-[150px]">
          <div className="flex space-x-2 items-center">
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
            <h1 className="text-xl font-semibold md:flex hidden">WeShare</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <UserComponent />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
