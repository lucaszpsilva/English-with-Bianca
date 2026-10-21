import { Quote } from "lucide-react";

export const Feedback = () => {
  return (
    <section className="min-h-[30rem] bg-[#fffcf6] flex justify-center py-16">
      <div className="flex flex-col justify-center items-center max-w-[60rem] px-4 md:px-0">
        <Quote className="text-red-800" />
        <h3 className="text-lg md:text-2xl text-[#17362d] font-serif italic mt-4 text-center">
          "Com a Bianca, eu não senti medo de errar. Ela me deixou confortável
          com meu próprio ritmo."
        </h3>

        <div className="flex flex-wrap mt-10 gap-4 md:gap-14 justify-center items-center">
          <div className="flex border shadow-lg px-6 md:px-14 py-3 md:py-5">
            <span className="border my-auto rounded-full p-1 mr-4 text-red-800 border-black">
              JG
            </span>
            <p>
              Uma didática muito boa, paciente e muito atenciosa, sempre
              identificando os pontos q possuo mais dificuldade e ajudando a
              melhorá-los. Uma didática muito boa, paciente e muito atenciosa,
              sempre identificando os pontos q possuo mais dificuldade e
              ajudando a melhorá-los.
            </p>
          </div>
          <div className="flex border shadow-lg px-6 md:px-14 py-3 md:py-5">
            <span className="border my-auto rounded-full p-1 mr-4 text-red-800 border-black">
              TW
            </span>
            <p>
              Bianca é uma excelente profissional, durante toda a aula me deixou
              confortável no processo de aprendizagem e através disso conseguiu
              identificar minhas dificuldades e personalizou as aulas conforme
              as metodologias que eram mais aderente para meu aprendizado
            </p>
          </div>
          <div className="flex border shadow-lg px-6 md:px-14 py-3 md:py-5">
            <span className="border my-auto rounded-full p-1 mr-4 text-red-800 border-black">
              LP
            </span>
            <p>Sem dúvidas a melhor professora que já tive, evoluí muito!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
