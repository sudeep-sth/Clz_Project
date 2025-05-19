import Contact from "@/components/contact/Contact";
import Navbar from "@/components/hero/Navbar";
import React from "react";

type Props = {};

const contact = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Contact />
    </div>
  );
};

export default contact;
