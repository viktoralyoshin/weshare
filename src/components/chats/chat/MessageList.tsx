import { IMessage } from "@/types/chat.types";
import Message from "./Message";
import { ScrollShadow } from "@nextui-org/react";
import { socket } from "@/socket";

const MessageList = ({ messages }: { messages: IMessage[] }) => {

  if (messages) {
    const scrollElement = document.getElementById("scroll");
    if (scrollElement) {
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }

  return (
    <ScrollShadow
      id="scroll"
      className="w-full"
      offset={100}
      hideScrollBar
      orientation="horizontal"
    >
      <div className="flex flex-col w-full gap-2">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </ScrollShadow>
  );
};

export default MessageList;
