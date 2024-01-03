import { useState } from "react";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="fixed w-full top-0 left-0 z-10 bg-opacity-80 bg-white">
      <div className="text-2xl font-bold text-orange-500 h-[12dvh] lg:h-[16dvh] shadow-lg flex justify-start items-center">
        <button
          onClick={() => setToggle(!toggle)}
          className={`lg:hidden md:hidden text-3xl ml-5 transition-transform duration-700 ${
            toggle ? "transform rotate-90" : "transform rotate-0"
          }`}
        >
          {toggle ? "×" : "☰"}
        </button>
        <div className="hidden md:flex md:justify-around md:items-center lg:flex lg:justify-around lg:items-center w-full">
          <a className="hover:text-3xl hover:text-orange-300" href="#about">
            About
          </a>
          <a className="hover:text-3xl hover:text-orange-300" href="#skills">
            Skills
          </a>
          <a className="hover:text-3xl hover:text-orange-300" href="#projects">
            Projects
          </a>
          <a className="hover:text-3xl hover:text-orange-300" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <MenuBar toggle={toggle} />
    </div>
  );
};

export default Navbar;
