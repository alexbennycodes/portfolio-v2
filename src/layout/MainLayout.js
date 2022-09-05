import React from "react";
import { LeftSocialLinks, Navbar, RightMailLink } from "../components";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-black">
      {/* <div className="bg-slate-600 no-scrollbar"> */}
      <Navbar />
      <LeftSocialLinks />
      <RightMailLink />
      {children}
    </div>
  );
};

export default MainLayout;
