import { Link } from "react-router-dom";
import challenge from "../../public/challenges.jpg";
import englishClub from "../../public/english-club.jpg";

export const AreaAluno = () => {
  return (
    <main className="bg-[#f5e9db] min-h-screen pb-12 flex flex-col">
      <div className="flex flex-col items-center pt-2 md:pt-4 justify-center mb-4 md:mb-6 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic font-bold text-gray-800">
          Área do Aluno
        </h2>
        <h3 className="text-xl md:text-3xl font-serif italic mt-4 text-gray-600">
          Acesse
        </h3>
      </div>

      {/* Container center - Flex para centralizar os cards */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 mx-auto w-full max-w-4xl px-6">
        {/* MENU ESQUERDO/CIMA - English Club */}
        <Link
          to="/english-club"
          className="group flex flex-col w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-sky-300 cursor-pointer transition-all duration-300"
        >
          {/* Imagem com altura fixa para não dominar a tela */}
          <div className="w-full h-56 md:h-64 overflow-hidden">
            <img
              src={englishClub}
              alt="English Club"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow items-center">
            <h2 className="text-2xl text-center font-bold uppercase mb-3 text-gray-800">
              English Club
            </h2>
            <p className="text-center text-gray-600 leading-relaxed">
              Something new to explore: Expressions and everyday English,
              Videos, music and podcasts, English Hacks, etc.
            </p>
          </div>
        </Link>

        {/* MENU DIREITO/BAIXO - Challenges */}
        <Link
          to="/challenges"
          className="group flex flex-col w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-sky-300 cursor-pointer transition-all duration-300"
        >
          <div className="w-full h-56 md:h-64 overflow-hidden">
            <img
              src={challenge}
              alt="Challenges"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow items-center">
            <h2 className="text-2xl text-center font-bold uppercase mb-3 text-gray-800">
              Challenges
            </h2>
            <p className="text-center text-gray-600 leading-relaxed">
              Quizzes, games and challenges, Monthly Surprise.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};
