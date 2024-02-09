import Heading from "../component/Heading";
import { FcBinoculars } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";

function Aboutme() {
  return (
    <div id="aboutme" className="h-fit bg-zinc-50 px-8 sm:h-screen">
      <Heading
        title="About Me"
        intro="Step into a realm where my education harmonizes with my current programming prowess, revealing the core of who I am."
      />
      <div className="flex flex-col h-fit sm:flex-row justify-center gap-11  ">
        <div className="introduction sm:w-1/2">
          <h2 className="font-semibold text-[1.2rem] py-4 ">
            <FcBinoculars className="text-[1.8rem]" />
            Get to know me
          </h2>
          <p className="text-sm tracking-wider text-justify md:w-[1/9] md:text-[17px] ">
            I am a passionate{" "}
            <span className="font-bold ">frontend developer. </span> I have
            recently completed an
            <span className="font-bold">
              {" "}
              full-stack web development course
            </span>
            .
            <br />
            This comprehensive program has provided me with a strong foundation
            in both backend and frontend technologies, enhancing my
            problem-solving skills and technical proficiency.
            <br />
            <br />
            As a frontend developer, I can bring a unique blend of{" "}
            <span className="font-bold">technical expertise</span> and a{" "}
            <span className="font-bold">customer-focused mindset</span> to every
            project. I am excited to contribute my skills and dedication to
            creating engaging and{" "}
            <span className="font-bold">user-friendly web experiences.</span>
            <br />
            <br />
            💻🧘‍♂️ #CodeAndZen
            <br /> When I&rsquo;m not immersed in code, you&rsquo;ll find me
            striking yoga poses and finding balance on and off the mat.
          </p>
        </div>

        <div className="flex flex-col text-[0.9rem] sm:w-1/3">
          <h2 className="font-semibold text-[1.2rem] py-4">
            <FcFlashOn className="text-[1.8rem]" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-2 ">
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              HTML
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2  ">
              CSS
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              Tailwind
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              JavaScript
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              React
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              Express
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              MySQL
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              MongoDB
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              AWS basics
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              Wordpress
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2  ">
              Figma
            </span>
            <span className="px-2 border border-gray-200 bg-slate-200 sm:h-10 py-2 ">
              Github
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
