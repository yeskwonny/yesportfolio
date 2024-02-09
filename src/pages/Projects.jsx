import Heading from "../component/Heading";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiLeaflet } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

function Projects() {
  return (
    <div id="projects" className="h-fit bg-zinc-50 px-8 sm:h-fit">
      <Heading
        title="Projects"
        intro="Explore a showcase of projects—a carefully curated blend of aesthetics and seamless user experiences."
      />
      <div></div>
      <div className="md:mx-auto">
        <div className="flex flex-col gap-4  md:grid grid-cols-2  m-auto ">
          <div className="">
            <img className="" src="/hsg_mockup.png" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center md:p-4">
            <h2 className="text-center font-semibold tracking-wider">
              HIGH STREET GYM
            </h2>
            <p className="text-sm text-center tracking-wider sm:max-w-4xl sm:text-left md:w-1/2">
              A full stack website for High Street Gym where members can book
              their workout classes and manage them effortlessly. Additionally,
              members can share their fitness journey with others using the blog
              function. The platform offers a seamless sign-up and login/logout
              process for a convenient user experience.
            </p>
            <h2 className="text-center mt-10 font-semibold tracking-wider">
              MADE WITH...
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
            <div className="text-center  text-[#3923eb] mt-4 mb-10 font-semibold">
              <a
                href="http://3.27.193.10/"
                className="tracking-wider hover:font-bold duration-300"
              >
                LIVE SITE{" "}
              </a>
              <span>|</span>
              <a
                href="https://github.com/yeskwonny/high-street-gym-frontend"
                className="tracking-wider hover:font-bold duration-300"
              >
                {" "}
                GITHUB{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4  md:grid grid-cols-2  m-auto  mt-24">
          <div className=" ">
            <img className="" src="/mapmemoir.jpg" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center p-4 ">
            <h2 className="text-center font-semibold tracking-wider ">
              MapMemoir,
            </h2>
            <p className="text-sm text-center tracking-wider sm:max-w-4xl sm:text-left md:w-1/2 ">
              MapMemoir is a unique journal web app that connects your memories
              to places. Create journals with dates, details, and locations on a
              map. Perfect for travelers or anyone wanting a visual diary of
              their experiences. Relive your moments with MapMemoir&rsquo;s
              interactive and easy-to-use interface.
            </p>
            <h2 className="text-center mt-10 font-semibold tracking-wider">
              MADE WITH...
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="text-[2rem]">
                <FaHtml5 />
              </span>
              <span className="text-[2rem] ">
                <FaCss3Alt />
              </span>
              <span className="text-[2rem]">
                <IoLogoJavascript />
              </span>
              <span className="text-[2rem]">
                <SiLeaflet />
              </span>
            </div>
            <div className="text-center  text-[#3923eb] mt-4 mb-10 font-semibold">
              <a
                href="https://mapmemoir.netlify.app/"
                className="tracking-wider hover:font-bold duration-300"
              >
                LIVE SITE{" "}
              </a>
              <span>|</span>
              <a
                href="https://github.com/yeskwonny/mapmemoir"
                className="tracking-wider hover:font-bold duration-300"
              >
                {" "}
                GITHUB{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4  md:grid grid-cols-2  m-auto  mt-24">
        <div className=" ">
          <img className="" src="/todayilearned.png" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center p-4 ">
          <h2 className="text-center font-semibold tracking-wider ">
            Today I learned
          </h2>
          <p className="text-sm text-center tracking-wider sm:max-w-4xl sm:text-left md:w-1/2 ">
            The Today I Learned is a platform where users can share interesting
            facts or pieces of knowledge that they have learned. Other users can
            interact with these facts by voting on them. Additionally, users can
            filter the facts based on different categories to explore specific
            topics of interest.
          </p>
          <h2 className="text-center mt-10 font-semibold tracking-wider">
            MADE WITH...
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="text-[2rem]">
              <FaHtml5 />
            </span>
            <span className="text-[2rem] ">
              <FaCss3Alt />
            </span>
            <span className="text-[2rem]">
              <FaReact />
            </span>
            <span className="text-[2rem]">
              <RiSupabaseFill />
            </span>
          </div>
          <div className="text-center  text-[#3923eb] mt-4 mb-10 font-semibold">
            <a
              href="https://what-i-learned.netlify.app/"
              className="tracking-wider hover:font-bold duration-300"
            >
              LIVE SITE{" "}
            </a>
            <span>|</span>
            <a
              href="https://github.com/yeskwonny/today-i-learned"
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
