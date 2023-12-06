import Heading from "../component/Heading";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
function Projects() {
  return (
    <div id="projects" className="h-fit bg-zinc-50 px-8 sm:h-fit">
      <Heading
        title="Projects"
        intro="Explore a showcase of projects—a carefully curated blend of aesthetics and seamless user experiences."
      />
      <div className="flex flex-col gap-4  ">
        <div className="flex justify-center">
          <img className="sm:w-3/5 " src="/hsg_mockup.png" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-center font-semibold tracking-wider">
            HIGH STREET GYM
          </h2>
          <p className="text-sm text-center tracking-wider sm:max-w-4xl ">
            A full stack website for High Street Gym where members can book
            their workout classes and manage them effortlessly. Additionally,
            members can share their fitness journey with others using the blog
            function. The platform offers a seamless sign-up and login/logout
            process for a convenient user experience.
          </p>
          <h2 className="text-center mt-10 font-semibold tracking-wider">
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="text-[2rem]">
              <FaHtml5 />
            </span>
            <span className="text-[2rem] ">
              <FaCss3Alt />
            </span>
            <span className="text-[2rem]">
              <BiLogoTailwindCss />
            </span>
            <span className="text-[2rem]">
              <IoLogoJavascript />
            </span>
            <span className="text-[2rem]">
              <FaReact />
            </span>
            <span className="text-[2rem]">
              <FaNode />
            </span>
            <span className="text-[2rem]">
              <SiMysql />
            </span>
            <span className="text-[2rem]">
              <FaAws />
            </span>
          </div>
          <div className="text-center  text-[#3923eb] mt-4 mb-3 ">
            <a
              href="http://3.27.193.10/"
              className="tracking-wider hover:font-bold duration-300"
            >
              LIVE SITE{" "}
            </a>
            <span>|</span>
            <a
              href="https://github.com/yeskwonny"
              className="tracking-wider hover:font-bold duration-300"
            >
              {" "}
              GITHUB{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;