import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#b60b0b]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Paul Gottinger
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a developer with a passion for crafting compelling user stories
          and transforming them into exceptionally-designed digital experiences.
          I specialize in working with the MERN stack. I also possess strong
          communication and project managment skills, which I developed over the
          seven years I worked as a journalist and editor in digital media.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#b60b0b] hover:border-[#b60b0b]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default home;
