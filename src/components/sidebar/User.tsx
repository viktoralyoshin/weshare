"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Link, User } from "@nextui-org/react";

const UserComponent = () => {
  const data = useCurrentUser();

  return (
    <div className="flex flex-col items-center justify-center bg-foreground/5 gap-4 py-6 rounded-xl border border-foreground-300 dark:border-foreground-50">
      <User
        avatarProps={{
          radius: "lg",
        }}
        description={
          <Link href="/" size="sm">
            @{data?.user.username}
          </Link>
        }
        name={data?.user.displayName}
      />
      <div className="flex space-x-4">
        {data?.statistics.map((statistic) => (
          <div key={statistic.label} className="flex flex-col items-center">
            <p>{statistic.value}</p>
            <p className="text-foreground/70">{statistic.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserComponent;
