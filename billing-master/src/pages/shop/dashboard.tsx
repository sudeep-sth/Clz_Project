import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const DashBoard = dynamic(() => import("@/components/dashboard/DashBoard"), {
  ssr: false,
});

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dashborad</title>
      </Head>
      <DashBoard />
    </>
  );
};

export default index;
