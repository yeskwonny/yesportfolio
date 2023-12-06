import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import Nav from "../component/Nav";
import WavyFooter from "../component/WavyFooter";

function Home() {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Developer🏅",
      "Dedicated problem-solver⚡️",
      "Continuous Learner💻",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div id="home" className="bg-[#3923eb] h-screen overflow-hidden ">
      <Nav />
      <div className="profile-container h-[80vh] items-center justify-evenly flex flex-col  sm:flex-row sm:justify-center sm:gap-40">
        <div className="profile-intro ">
          <div className="profile-icon justify-center flex  gap-2 mb-2">
            <a
              className="text-[1.5rem] hover:-translate-y-1 ease-in duration-150"
              href="https://github.com/yeskwonny"
            >
              <FaGithub />
            </a>
            <a
              className="text-[1.5rem] hover:-translate-y-1 ease-in duration-150"
              href="https://www.linkedin.com/in/yesol-kwon-179231287"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="profile-greeting text-center">
            <span>Hello, I am </span>
            <span className="text-[3rem] font-medium text-[#c2ff03]">
              {" "}
              Yesol Kwon
            </span>
            <h1 className="text-[1.1rem] sm:text-[1.5rem]">{typeEffect}</h1>
          </div>
          <div className="btn flex justify-center gap-3 mt-6">
            <a href="#">
              <button className="px-3 py-1 text-sm rounded-md transition ease-in-out delay-100  bg-[#c2ff03] hover:bg-lime-600  sm:text-lg ">
                Resume
              </button>
            </a>
            <a className="" href="#contact">
              <button className="px-3 py-1 text-sm transition ease-in-out delay-100  bg-[#c2ff03] hover:bg-lime-600  rounded-md sm:text-lg ">
                Contact
              </button>
            </a>
          </div>
        </div>

        <div className="profile-image">
          <img
            className="w-[200px] h-[200px] object-cover rounded-full sm:w-[350px] sm:h-[350px]"
            src="/profile-image.jpeg"
            alt="profile image"
          />
        </div>
      </div>
      <WavyFooter />
    </div>
  );
}

export default Home;
