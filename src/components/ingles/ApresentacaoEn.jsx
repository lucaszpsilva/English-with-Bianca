import { Comecar } from "../Comecar";
import { Sun } from "lucide-react";
import bianca from "../../../public/bianca.jpeg";

export const ApresentacaoEn = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex flex-col px-4 md:ml-16 mt-10 md:my-auto items-center text-center md:text-left w-full md:w-auto">
        <div className="flex flex-col items-center mx-4 md:mx-16">
          <div className="flex flex-row items-center justify-center md:justify-start md:-ml-16">
            <span className="hidden md:inline w-10 h-0.5 bg-red-800 mr-3"></span>
            <span className="uppercase tracking-widest">
              portuguese for your life
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl mt-2 font-serif leading-tight text-slate-600">
            Your Portuguese. <br />
            <i className="text-red-800">Your way.</i>
          </h1>
          <div className="max-w-[23rem] mt-4 md:ml-2 text-gray-600 -tracking-tighter ">
            <span className="">
              <p>
                Learn with confidence, enjoy the process, and take your
                Portuguese to the next level.
              </p>
              <p> From your first words to real-life conversations.</p>
            </span>
          </div>
        </div>
        <Comecar
          className="mt-6 bg-red-800 hover:bg-red-900 text-white py-3 px-4"
          text="Ready to start your journey? →"
        />
      </div>

      <div className="relative rounded-t-full mx-auto md:mr-16 my-8 md:my-0 mt-8 md:mt-[70px] w-full max-w-[430px] h-auto md:h-[540px] bg-black">
        <img
          src={bianca}
          alt="Bianca"
          className="w-full h-full rounded-t-full object-cover"
        />
        <div className="hidden md:block py-2 px-6 bg-white absolute text-center bottom-14 md:left-0 md:bottom-8 xl:-left-20 shadow-xl z-30">
          <span className="flex justify-center items-center">
            <Sun className="w-6 h-6 mr-4 text-red-900" strokeWidth={1.8} />
            Ready to start <br /> your journey?
          </span>
        </div>

        <div className="hidden md:flex py-3 px-1 text-center text-white bg-red-800 absolute items-center -right-14 top-32 shadow-2xl rounded-md">
          <span className="mx-3 font-serif italic text-2xl">
            Once <strong className="text-base">or</strong> twice <br />
            <i className="font-normal text-base">a week</i>
          </span>
        </div>

        <span className="hidden md:block text-red-800 absolute transition-transform -rotate-[20deg] font-serif italic text-xl top-5 left-6">
          Oie!
        </span>
      </div>
    </section>
  );
};
