import React, { FC, useState } from "react";
import Navbar from "../../common/Navbar";
import Sidebar from "../../common/Sidebar";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
    </>
  );
};

export default Header;
