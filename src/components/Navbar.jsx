import { useState } from "react";

import { close, menu, profilepic, eyelogo } from "../assets";

import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex py-6 justify-between items-center navbar`}
    >
      <img
        src={eyelogo}
        alt="logo"
        className="h-30 w-24 hover:animate-pulse duration-500 ease-out hover:ease-in hover:scale-125 "
      />
      {/* <h1 className="invisible sm:visible font-poppins font-semibold xs:text-[22px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]">
        nicolo.francis
      </h1> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-q-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }  text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
