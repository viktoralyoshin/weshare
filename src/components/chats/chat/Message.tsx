"use client";

import { useAuthStore } from "@/stores/auth.store";
import { IMessage } from "@/types/chat.types";

const Message = ({ message }: { message: IMessage }) => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="mx-2">
      {message.senderId === user.id ? (
        <div className="flex justify-end">
          <div className="dark:bg-primary bg-primary/20 max-w-[300px] rounded-xl py-1 px-2 dark:text-white flex">
            <div className="flex flex-col">
              <p className="text-sm break-all">{message.content}</p>
              <div className="w-full flex justify-end">
                <p className="text-[12px] text-foreground/70">
                  {new Intl.DateTimeFormat("ru").format(
                    new Date(message.createdAt)
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-start">
          <div className="bg-foreground/10 max-w-[300px] rounded-xl p-1 px-2 dark:text-white flex">
            <div className="flex flex-col">
              <p className="text-sm break-all">{message.content}</p>
              <div className="w-full flex justify-end">
                <p className="text-[12px] text-foreground/70">
                  {new Intl.DateTimeFormat("ru").format(
                    new Date(message.createdAt)
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
