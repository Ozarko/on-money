import React from "react";

import { NavGuest } from "@components/layout/guest/nav-guest";
import { LayoutProps } from "@typeslib/app";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavGuest />
      {children}
    </>
  );
};

export default Layout;
