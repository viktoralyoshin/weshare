"use client";

import { Button, Form, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export enum EnumAuthType {
  login = "login",
  register = "register",
}

const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
  password: z.string().min(1, {
    message: "Поле не может быть пустым",
  }),
});

const registerSchema = z.object({
  username: z
    .string({
      required_error: "Имя пользователя обязательное поле",
    })
    .min(4, {
      message: "Имя пользователя - должно быть не меньше 4 символов",
    }),
  password: z
    .string({
      required_error: "Пароль - обязательное поле",
    })
    .min(8, {
      message: "Пароль должен быть не меньше 8 символов",
    }),
});

const AuthForm = ({ type }: { type: EnumAuthType }) => {
  const [isVisible, setVisible] = useState(false);

  const router = useRouter();

  let formSchema;

  if (type === EnumAuthType.login) {
    formSchema = loginSchema;
  } else {
    formSchema = registerSchema;
  }

  const { handleSubmit, control } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: z.infer<typeof formSchema>) =>
      authService.main(type, data),
    onSuccess: () => {
      router.push("/feed");
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Controller
        control={control}
        name="username"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <Input
            ref={ref}
            errorMessage={error?.message}
            validationBehavior="aria"
            isInvalid={invalid}
            label="Имя пользователя"
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <Input
            ref={ref}
            errorMessage={error?.message}
            validationBehavior="aria"
            isInvalid={invalid}
            label="Пароль"
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            type={isVisible ? "text" : "password"}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={() => setVisible(!isVisible)}
              >
                {isVisible ? (
                  <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
        )}
      />
      {isPending ? (
        <Button isLoading type="submit" color="primary">
          {type === EnumAuthType.login ? "Войти" : "Создать аккаунт"}
        </Button>
      ) : (
        <Button type="submit" color="primary">
          {type === EnumAuthType.login ? "Войти" : "Создать аккаунт"}
        </Button>
      )}
    </Form>
  );
};

export default AuthForm;
