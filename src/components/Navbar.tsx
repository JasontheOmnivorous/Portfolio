import { useState } from "react";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="sticky top-0 bg-opacity-80 bg-white">
      <div className="text-2xl font-bold text-orange-500 h-[12dvh] lg:h-[16dvh] shadow-lg flex justify-start items-center">
        <button
          onClick={() => setToggle(!toggle)}
          className={`lg:hidden md:hidden text-3xl ml-5 transition-transform duration-700 ${
            toggle ? "transform rotate-45" : "transform rotate-0"
          }`}
        >
          {toggle ? "X" : "☰"}
        </button>
        <div className="hidden md:flex md:justify-around md:items-center lg:flex lg:justify-around lg:items-center w-full">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <MenuBar toggle={toggle} />
    </div>
  );
};

export default Navbar;
