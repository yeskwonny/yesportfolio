import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative">
      <div className="nav-container p-4 ">
        <ul className="hidden md:flex text-[1.5rem] gap-4 justify-center text-[#c2ff03]">
          <li>
            <a className="hover:underline" href="#aboutme">
              ABOUTME
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#projects">
              PROJECTS
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* mobile nav */}

      <button
        onClick={handleClick}
        className=" flex flex-col gap-1 absolute right-2 md:hidden"
      >
        <div
          className={` ${
            !isOpen
              ? "bg-[#c2ff03] w-6 h-1 "
              : " bg-[#c2ff03] w-6 h-1 rotate-45 right-2 absolute"
          }`}
        ></div>

        <div
          className={` ${!isOpen ? "bg-[#c2ff03] w-6 h-1" : "hidden"}`}
        ></div>
        <div
          className={` ${
            !isOpen
              ? "bg-[#c2ff03] w-6 h-1"
              : " bg-[#c2ff03] w-6 h-1 -rotate-45 right-2 absolute"
          }`}
        ></div>
      </button>
      <ul
        className={`${isOpen ? "flex flex-col items-center gap-1" : "hidden"}`}
      >
        <li>
          <a
            className="text-[#c2ff03] hover:underline decoration-[#c2ff03]"
            href="#profile"
          >
            ABOUTME
          </a>
        </li>
        <li>
          <a className=" text-[#c2ff03]  hover:underline" href="#experience">
            PROJECTS
          </a>
        </li>
        <li>
          <a className=" text-[#c2ff03] hover:underline" href="#projects">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
