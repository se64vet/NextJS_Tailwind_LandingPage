import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Space Explorer</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="w-screen h-screen flex-1">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
