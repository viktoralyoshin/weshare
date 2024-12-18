import { Link, User } from "@nextui-org/react";

const UserComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-foreground/5 gap-4 py-6 rounded-xl border border-foreground-300 dark:border-foreground-50">
      <User
        avatarProps={{
          radius: "lg",
        }}
        description={
          <Link href="/" size="sm">@1rowvy</Link>
        }
        name="1rowvy"
      />
      <div className="flex space-x-4">
        <p className="flex flex-col items-center">
          2,3k
          <span className="text-foreground/70">Подписчики</span>
        </p>
        <p className="flex flex-col items-center">
          213
          <span className="text-foreground/70">Подписок</span>
        </p>
      </div>
    </div>
  );
};

export default UserComponent;
