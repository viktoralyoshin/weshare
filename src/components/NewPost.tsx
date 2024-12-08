"use client";

import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { PlusIcon, MailIcon, LockIcon } from "lucide-react";

const NewPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        startContent={<PlusIcon />}
        onPress={onOpen}
        className="w-[90%]"
      >
        Создать пост
      </Button>
      <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Новый пост
              </ModalHeader>
              <ModalBody>
                <Textarea
                  placeholder="Напишите что-нибудь..."
                />
                <Input type="file"/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Опубликовать
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPost;
