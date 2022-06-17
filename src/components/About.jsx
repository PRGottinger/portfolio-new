import React from "react";
import Paul from "../assets/paul.png";


const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#b60b0b]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi, I'm Paul. Nice to meet you. Feel free to take a look around.
            </p>
          </div>

          <div>
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              necessitatibus, placeat repudiandae molestiae id quidem
              perspiciatis excepturi magnam assumenda soluta dolorum quaerat!
              Doloremque ab incidunt repudiandae sunt asperiores! Temporibus,
              cupiditate.
            </p>
           
          </div>
          
        </div>
       <img className='pt-2' src={Paul} alt='Paul'/>
      </div>
      
    </div>
  );
};

export default About;
