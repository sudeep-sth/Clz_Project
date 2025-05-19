import Navbar from "@/components/hero/Navbar";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

type Props = {};

const Admin = (props: Props) => {
  Cookies.get("auth_token")
    ? (window.location.href = "/shop/dashboard")
    : (window.location.href = "/login");
};

export default Admin;
