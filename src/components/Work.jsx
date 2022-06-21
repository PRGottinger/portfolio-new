import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import Home from "../assets/home.png"
import Festival from "../assets/fes.png"
import Travel from "../assets/travel.png"
import Blog from "../assets/blog.png"
import Budget from "../assets/budget.png"
import Run from "../assets/run.png"


const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#b60b0b]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Home})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-centermx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 pt-14 group-hover:opacity-100">
              <span className="text-2xl pl-20 items-center font-bold text-white tracking-wider">
                Dev Drip
              </span>
              <div className="pt-8 text-center">
                <a href="https://calm-bayou-49842.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App
                  </button>
                </a>
                <a href="https://github.com/PRGottinger/dev-drip">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://drive.google.com/file/d/1rYvhBbsixd4kvrIXda7dmpMcUPQGaeuY/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Video
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Festival})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-centermx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 pt-14 group-hover:opacity-100">
              <span className="text-2xl pl-4 font-bold text-white tracking-wider">
                Festival of Nations
              </span>
              <div className="pt-8 text-center">
                <a href="https://powerful-mesa-61465.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App
                  </button>
                </a>
                <a href="https://github.com/PRGottinger/festivalOfNations">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://drive.google.com/file/d/1JP3mtlenMz5G7-W9_wFYAj402YfNHep6/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Travel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-centermx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 pt-14 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Travel Briefing
              </span>
              <div className="pt-8 text-center">
                <a href="https://pjlawler.github.io/destination-briefing/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App
                  </button>
                </a>
                <a href="https://github.com/PRGottinger/destination-briefing">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Blog})` }}
            className="shadow-lg shadow-[#041216] group container rounded-md flex justify-center items-centermx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 pt-14 group-hover:opacity-100">
              <span className="text-2xl pl-16 font-bold text-white tracking-wider">
                Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a href="https://stark-caverns-96055.herokuapp.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App
                  </button>
                </a>
                <a href="https://github.com/PRGottinger/community-posting-board">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://drive.google.com/file/d/1TRPmbs2LJF4X7ojKbHKQN-xPWDDzJi-e/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Video
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Budget})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-centermx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 pt-14 group-hover:opacity-100">
              <span className="text-2xl pl-3 font-bold text-white tracking-wider">
                Budget App
              </span>
              <div className="pt-4 text-center">
                <a href="https://afternoon-reef-93872.herokuapp.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App
                  </button>
                </a>
                <a href="https://github.com/PRGottinger/budget-tracker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Run})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-centermx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 pt-14 mt-2 group-hover:opacity-100">
              <span className="text-2xl pt-10 pl-3 font-bold text-white tracking-wider">
                Run Buddy
              </span>
              <div className="pt-4 text-center">
                <a href="https://prgottinger.github.io/run-buddy-page/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    App
                  </button>
                </a>
                <a href="https://github.com/PRGottinger/run-buddy-page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
