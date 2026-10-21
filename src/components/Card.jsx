import { Comecar } from "./Comecar";

export const Card = () => {
  return (
    <section className="min-h-[44rem] bg-[#e7795e] py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-20 mt-8 md:mt-20 gap-8">
        <div className="flex flex-col w-full md:w-auto">
          <span className="text-xl font-semibold text-gray-300 uppercase">
            Sua hora é agora
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-semibold mt-6 max-w-96 text-white leading-tight">
            O inglês que você quer <br className="hidden md:block" /> começa com
            o <i className="text-[#17362d]">primeiro passo.</i>
          </h3>
          <p className="text-gray-300 mt-6 text-lg w-full max-w-[32rem]">
            Entre para a próxima turma e comece a falar inglês com mais
            confiança, leveza e liberdade.
          </p>
          <Comecar
            className="mt-10 py-3 px-2 md:px-2 bg-white hover:scale-105 text-[#17362d] font-bold"
            text="Quero entrar para a turma →"
          />
        </div>

        <div className="w-full max-w-[20rem] h-auto min-h-[20rem] md:min-h-[34rem] md:w-[20rem] bg-white shadow-[25px_29px_15px_-3px_black] mx-auto md:mx-0 mt-8 md:mt-0 flex flex-col flex-row items-center justify-center">
          <h2 className="text-2xl font-serif italic text-[#991b1b]">
            Comece já <strong className="text-[#17362d]">sua jornada</strong>
          </h2>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              Aulas individuais ou em grupo - Grupos de 2 a 4 alunos
            </span>
          </div>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              Aulas personalizadas de acordo com o seu objetivo
            </span>
          </div>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">100% online - aulas pelo Google Meet</span>
          </div>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              Duas modalidades - Aulas 1 ou 2 vezes por semana
            </span>
          </div>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              Aulas para todas as idades - Infantil, juvenil e adulto
            </span>
          </div>
          <div className="flex flex-col flex-wrap w-10/12 mt-4 mx-2 md:mx-4 border-t border-t-black">
            <span className="mt-2 italic text-gray-400 text-center">
              <strong>Entre em contato</strong> - Consulte valores, horários
              disponíveis e a modalidade ideal para você.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
