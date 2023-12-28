interface Props {
  toggle: boolean;
}

const MenuBar = ({ toggle }: Props) => {
  if (!toggle) return null;

  return (
    <div className="bg-white w-[20dvw] shadow-lg flex flex-col items-center justify-center h-32 rounded-b-xl text-orange-500 p-2 z-50 fixed top0- left-0">
      <a className="m-1" href="#about">
        About
      </a>
      <a className="m-1" href="#skills">
        Skills
      </a>
      <a className="m-1" href="#projects">
        Projects
      </a>
      <a className="m-1" href="#contact">
        Contact
      </a>
    </div>
  );
};

export default MenuBar;
