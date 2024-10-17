import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

import {
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black text-center"
    >
      <div className="w-full flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Saurabh Saini</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a full stack developer with some experience using React and Node.js. Reach out if you'd like to learn more.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-around">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/SaurabhSaini04" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://x.com/SaurabhSai25432" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sauarbhsaini" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Banner
