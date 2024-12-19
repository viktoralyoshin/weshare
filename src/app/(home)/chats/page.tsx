"use client";

import { Check } from "lucide-react";

export default function page() {

  return (
    <div className="flex h-full items-center justify-center">
      <div className="bg-background flex flex-col items-center p-4 rounded-lg">
        <Check />
        <p>Выберите чат</p>
      </div>
    </div>
  );
}
