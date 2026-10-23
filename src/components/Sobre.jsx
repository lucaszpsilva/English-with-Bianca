import bianca from "../../public/bianca.jpeg";

export const Sobre = () => {
  return (
    <section id="sobre" className="bg-[#dce7d8] min-h-[36rem] py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-11/12 gap-12 md:gap-16">
        <div className="relative flex-1 flex justify-center w-full mt-8">
          <div className="relative w-full max-w-sm">
            <span className="text-white z-20 italic font-serif font-bold text-2xl md:text-4xl -rotate-[20deg] bottom-4 right-0 md:bottom-8 md:-right-8 absolute whitespace-nowrap">
              Bianca Nishikawa
            </span>

            <div className="absolute inset-0 border-2 border-red-800 translate-x-4 translate-y-4 z-0"></div>

            <img
              src={bianca}
              alt="bianca"
              className="w-full saturate-[0.78] object-cover relative z-10"
            />
          </div>
        </div>
        <div className="flex-1 w-full px-4 md:px-0">
          <div className="flex items-center">
            <span className="w-10 h-0.5 bg-red-800 mr-3"></span>
            <span className="uppercase tracking-widest text-sm md:text-base">
              Sua teacher nessa jornada.
            </span>
          </div>
          <div className="flex flex-col mt-4">
            <h2 className="text-4xl md:text-6xl mt-6">
              Hi, eu sou a <em className="text-red-800">Bianca.</em>
            </h2>
            <p className="mt-4 text-lg">
              Apaixonada por comunicação e pela liberdade que um novo idioma
              pode trazer.
            </p>

            <p className="mt-4 text-gray-400">
              Após quase dois anos morando na Irlanda e tendo contato diário com
              o inglês, percebi que o problema nunca foi falta de capacidade.
              Era excesso de cobrança, métodos engessados e pouca conexão com a
              vida real.
            </p>
            <p className="mt-4 text-gray-400">
              Por isso criei uma forma mais humana de aprender: com acolhimento,
              direção e espaço para você encontrar a sua própria voz em inglês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
