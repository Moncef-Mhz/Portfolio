import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { navlinks } from "../constant";
import { CiMenuBurger, TfiClose } from "../constant";
import { styles } from "../style";

const Header = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 z-20 left-0 flex h-[80px] ${
        styles.paddingX
      }  w-full justify-between items-center  duration-200 ease-in ${
        scrolled ? "bg-tertiary" : "bg-transparent"
      }`}
    >
      <div className="flex gap-4 items-center">
        <img src={logo} className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex ">
          Moncef &nbsp;
          <span className="sm:block hidden"> | Web developer</span>
        </p>
      </div>
      <ul className="list-none hidden md:flex flex-row gap-10">
        {navlinks.map((nav) => (
          <li
            key={nav.id}
            className={
              active === nav.title
                ? "text-white"
                : "cursor-pointer text-[#7a7a7a]  hover:text-white duration-200"
            }
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div
        className="md:hidden flex flex-1 justify-end items-center"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <TfiClose /> : <CiMenuBurger />}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navlinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title
                    ? "text-white "
                    : "text-[#7a7a7a] cursor-pointer hover:text-white duration-200"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
