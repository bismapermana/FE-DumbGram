import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Navs = () => {
  return (
    <nav className="flex md:h-16 md:justify-around h-12 border-2 overflow-hidden justify-between items-center sticky space-y-0.5 w-full bg-white">
      <p className="font-sans">Instagram</p>
      <form>
        <input
          type="text"
          name="text"
          className=" md:p-1.5 outline-none bg-gray-50 border-gray-100 border-2 rounded md:w-72 my-2 tex"
          placeholder="Search"
        />
      </form>
      <ul className="flex md:space-x-10 sm:space-x-5 space-x-5 ">
        <MdNotificationsNone size="1.7em" />
        <FiSend size="1.5em" />
        <FaRegUser size="1.5em" />
      </ul>
    </nav>
  );
};

export default Navs;
