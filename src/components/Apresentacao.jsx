import { Comecar } from "./Comecar";
import { Sun } from "lucide-react";
import bianca from "../../public/bianca.jpeg";

export const Apresentacao = () => {
  return (
    <section
      id="inicio"
      className="flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex flex-col px-4 md:ml-16 mt-10 md:my-auto items-center text-center md:text-left w-full md:w-auto">
        <div className="flex items-center justify-center md:justify-start">
          <span className="w-10 h-0.5 bg-red-800 mr-3"></span>
          <span className="uppercase tracking-widest">
            inglês para a sua vida
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl mt-2 font-serif leading-tight text-slate-600">
          Your English. <br />
          <i className="text-red-800">Do seu jeito.</i>
        </h1>
        <div className="mt-4 md:ml-2 text-gray-600 -tracking-tighter">
          <span>
            Aprenda inglês com leveza, método e propósito — <br /> mesmo que
            você já tenha tentado várias vezes.
          </span>
        </div>
        <Comecar
          className="mt-4 bg-red-800 hover:bg-red-900 text-white py-2 px-2"
          text="Quero começar minha jornada →"
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
            Inglês que cabe <br /> na sua rotina
          </span>
        </div>

        <div className="hidden md:flex py-5 px-2 text-center text-white bg-red-800 absolute items-center -right-4 top-32 shadow-2xl rounded-md">
          <span className="mx-3 font-serif italic text-2xl">
            1 <strong className="text-base">ou</strong> 2 <br />
            <i className="font-normal text-base">vezes na semana</i>
          </span>
        </div>

        <span className="hidden md:block text-red-800 absolute transition-transform -rotate-[20deg] font-serif italic text-xl top-5 left-6">
          Hello!
        </span>
      </div>
    </section>
  );
};
