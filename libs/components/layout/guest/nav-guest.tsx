import React from "react";

import { ModeToggle } from "@components/theme/theme-toggle";

import { GuestNavigationMenu } from "./nav-menu";

export const NavGuest = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between border-b border-foreground/35 bg-background/60 px-4 transition-colors duration-200 hover:bg-background/90">
      <div></div>
      <GuestNavigationMenu />
      <ModeToggle />
    </div>
  );
};
