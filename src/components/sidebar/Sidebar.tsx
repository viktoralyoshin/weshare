"use client";

import UserComponent from "./User";
import Link from "next/link";
import { routes } from "@/constants/routes";
import Icon from "../Icon";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="absolute z-45 w-[300px] top-[80px]">
      <div className="flex flex-col gap-6 mx-8">
        <UserComponent />
        <nav className="flex flex-col space-y-2 p-4 rounded-xl bg-foreground/5 border border-foreground-300 dark:border-foreground-50">
          {routes.map((route) => {
            const isActive =
              (pathname.includes(route.value) && route.value.length > 1) ||
              pathname === route.value;

            return (
              <Link
                href={`/home${route.value}`}
                className={`${isActive ? "bg-primary text-white" : "hover:bg-foreground/5"} flex gap-2 items-center p-2 px-3 rounded-lg ease-in-out duration-200`}
                key={route.id}
              >
                <Icon name={route.icon} size={18} />
                <p className="text-sm">{route.label}</p>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
