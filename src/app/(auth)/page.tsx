"use client";

import AuthForm, { EnumAuthType } from "@/components/AuthForm";
import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";

const page = () => {
  return (
    <Card className="max-w-full w-[340px] h-[400px] mr-0 md:mr-4">
      <CardHeader className="flex space-x-2 items-center">
        <Image src="/logo.svg" alt="logo" width={35} height={35} />
        <h1 className="text-xl font-semibold">WeShare</h1>
      </CardHeader>
      <CardBody className="overflow-hidden">
        <Tabs fullWidth color="primary" radius="lg" size="md">
          <Tab key="login" title="Вход">
            <AuthForm type={EnumAuthType.login} />
          </Tab>
          <Tab key="register" title="Регистрация">
            <AuthForm type={EnumAuthType.register} />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default page;
