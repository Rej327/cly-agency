import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { profile } from "../assets";
import { toggleStyle } from "../global-styles/globalstyles";
import { navTextStyles } from "../global-styles/globalstyles";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between absolute items-center h-24 z-[999] w-full mx-auto px-5 text-black">
      <h2 className="text-2xl sm:text-3xl tracking-widest text-white">
        CLY AGENCY.
      </h2>
      <div onClick={handleNav} className="block cursor-pointer text-white">
        {nav ? <AiOutlineMenu size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className={nav ? toggleStyle.NAVTOOGLE : toggleStyle.NAVTOOGLEOUT}>
        <TfiClose
          onClick={handleNav}
          className="w-8 h-8 font-thin cursor-pointer mt-4 ml-auto hover:bg-[#E2B8AC] hover:text-white rounded-md p-1 duration-500"
        />
        <ul className="mt-8">
          <Link to="/">
            <li className={navTextStyles.li} onClick={handleNav}>
              BLOG
            </li>
          </Link>
          <Link to="/single-blog">
            <li className={navTextStyles.li} onClick={handleNav}>
              SINGLE BLOG
            </li>
          </Link>
          <li className={navTextStyles.li} onClick={handleNav}>
            ABOUT ME
          </li>
          <li className={navTextStyles.li} onClick={handleNav}>
            CONTACT ME
          </li>
        </ul>
        <div className="w-full h-full">
          <h1 className="font-tenor mt-9 text-center tracking-wider">
            ABOUT ME
          </h1>
          <img src={profile} alt="/" className="w-60 my-5 mx-auto" />
          <div>
            <h1 className="font-tenor tracking-wide text-lg py-3 text-center">
              Carolyn Ollarte
            </h1>
            <p className="text-gray-600 text-center">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
