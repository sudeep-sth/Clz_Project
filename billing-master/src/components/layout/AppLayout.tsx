"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  // const router = useRouter();
  // const [loading, setLoading] = React.useState(!Cookies.get("auth_token"));

  // useEffect(() => {
  //   if (!Cookies.get("auth_token")) {
  //     router.push("/login").finally(() => setLoading(false));
  //   }
  // }, [router.pathname]);
  return  <div>{children}</div>;
};

export default AppLayout;

