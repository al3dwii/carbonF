"use client";
import { Menu } from "@headlessui/react";
import i18n from "@/lib/i18n";

export default function AvatarMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-8 h-8 rounded-full bg-gray-300" />
      <Menu.Items className="absolute right-0 mt-2 rounded bg-white shadow">
        <Menu.Item onSelect={() => i18n.changeLanguage("en")}>English</Menu.Item>
        <Menu.Item onSelect={() => i18n.changeLanguage("ar")}>العربية</Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
