import Link from "next/link";
import React from "react";
import MenuItems from "./MenuItems";

const NavBar = () => {
  return (
    <nav className="border-gray-200 text-gray-500 p-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="self-center text-3xl font-semibold whitespace-nowrap hover:underline"
        >
          Atiqur Rahman
        </Link>
        <MenuItems />
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"></hr>
    </nav>
  );
};

export default NavBar;
