"use client";

import { Switch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isSelected, setSelected] = useState(true);

  useEffect(() => {
    setMounted(true);
    theme === "light" ? setSelected(true) : setSelected(false);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={() => {
        if (isSelected) {
          setSelected(false);
          setTheme("dark");
        } else {
          setSelected(true);
          setTheme("light");
        }
      }}
      color="primary"
      endContent={<MoonIcon />}
      startContent={<SunIcon />}
    />
  );
};

export default ThemeSwitcher;
