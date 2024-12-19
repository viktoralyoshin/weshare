"use client";

import { postService } from "@/services/post.service";
import { useAuthStore } from "@/stores/auth.store";
import { IUserResponse } from "@/types/user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  content: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
});

const NewPost = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { handleSubmit, control } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const user: IUserResponse = useAuthStore((state) => state.user);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (data: { userId: string; content: string }) =>
      postService.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCurrentUser"],
      });
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate({ userId: user.id, content: data.content });
  }

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
              <Form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <ModalBody>
                  <Controller
                    control={control}
                    name="content"
                    render={({
                      field: { name, value, onChange, onBlur, ref },
                      fieldState: { invalid, error },
                    }) => (
                      <Textarea
                        ref={ref}
                        errorMessage={error?.message}
                        validationBehavior="aria"
                        isInvalid={invalid}
                        placeholder="Напишите что-нибудь..."
                        name={name}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                      />
                    )}
                  />
                </ModalBody>
                <ModalFooter>
                  {isPending ? (
                    <Button isLoading type="submit" color="primary">
                      Опубликовать
                    </Button>
                  ) : (
                    <Button type="submit" color="primary">
                      Опубликовать
                    </Button>
                  )}
                </ModalFooter>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPost;
