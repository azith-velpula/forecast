import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const StartPage = () => {
  return (
    <div className="flex flex-col border border-black h-[100vh]">
      <Header />
      <div className="flex grow items-center  justify-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default StartPage;
