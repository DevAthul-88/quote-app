import React from "react";
import Navbar from "../Components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}

export default MainLayout;
