import React from "react";
import Body from "./Body/Body.jsx";
import SideMenu from "./SideMenu/SideMenu.jsx";

const Container = () => {
  return (
    <div
      className=" flex
    w-full
     rounded-sm overflow-hidden"
    >
      <Body />
    </div>
  );
};

export default Container;
