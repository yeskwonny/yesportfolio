import Heading from "../component/Heading";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="h-screen bg-zinc-50 px-8 ">
      <Heading
        title="Contact Me"
        intro="I'm on the lookout for new opportunities. Whether it's a project or just a chat about front-end development, I'd love to hear from you. Let's connect and explore possibilities together!"
      />

      <div className="flex flex-col gap-3 justify-center items-center h-[320px] w-[320px] bg-[#3923eb] rounded-full sm:w-[400px] sm:h-[400px] mx-auto">
        <div className="flex items-center gap-2 justify-center text-[1rem] text-[#c2ff03] font-semibold tracking-wider">
          <span>
            <AiOutlineMail />
          </span>
          <p>
            <a
              className="hover:text-[1.5rem] ease-out duration-300"
              href="mailto:yeahsol.kwon@gmail.com"
            >
              yeahsol.kwon@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2 justify-center text-[1rem] font-bold tracking-wider text-[#c2ff03]  ">
          <span>
            <FaLinkedin />
          </span>
          <p>
            <a
              className="hover:text-[1.5rem] ease-out duration-300"
              href="https://www.linkedin.com/in/yesol-kwon-179231287"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
