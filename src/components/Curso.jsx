export const Curso = () => {
  return (
    <section id="curso" className="min-h-[60rem] bg-[#12352b] pb-16">
      <div className="flex items-center px-4 md:ml-24 pt-28">
        <span className="w-10 h-0.5 bg-red-800 mr-3"></span>
        <span className="uppercase tracking-widest text-gray-300">
          dentro do curso
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-5 px-4 md:ml-[6.1rem]">
        <div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
            Um caminho claro. <br />
            <i className="font-serif text-red-800">Do básico à conversa.</i>
          </h2>
        </div>
        <div className="flex mt-4 md:mt-0">
          <p className="text-gray-400 w-full md:w-[310px] md:mr-24 md:mt-7">
            Conteúdo organizado em uma sequência simples para você saber sempre
            qual é o próximo passo.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto mt-10 border-t border-b">
        <div className="flex flex-col items-center relative border-b md:border-b-0 md:border-r py-8 md:py-0">
          <span className="text-red-800 font-serif text-xl absolute left-8 top-4 md:top-auto">
            01
          </span>
          <h3 className="text-xl font-bold text-white mt-8 md:mt-16">
            Descomplique o básico
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Antes de avançar, é importante compreender os fundamentos do inglês.
            Vamos construir essa base com explicações claras e exemplos
            práticos, para que você entenda como o idioma funciona e consiga
            aprender novos conteúdos com mais segurança e autonomia.
          </p>
          <span className="hidden md:block absolute bottom-1 left-7 text-red-800 text-3xl">
            →
          </span>
        </div>

        <div className="flex flex-col items-center relative border-b md:border-b-0 md:border-r py-8 md:py-0">
          <span className="text-red-800 font-serif text-xl absolute left-8 top-4 md:top-auto">
            02
          </span>
          <h3 className="text-xl font-bold text-white mt-8 md:mt-16">
            Amplie seu vocabulário
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Aprender vocabulário vai muito além de memorizar listas de palavras.
            Vamos explorar expressões e palavras úteis para o seu dia a dia,
            ampliando seu repertório para que você consiga compreender melhor o
            idioma e comunicar suas ideias com mais naturalidade.
          </p>
          <span className="hidden md:block absolute bottom-1 left-7 text-red-800 text-3xl">
            →
          </span>
        </div>

        <div className="flex flex-col items-center relative border-b md:border-b-0 md:border-r py-8 md:py-0">
          <span className="text-red-800 font-serif text-xl absolute left-8 top-4 md:top-auto">
            03
          </span>
          <h3 className="text-xl font-bold text-white mt-8 md:mt-16 text-center px-4">
            Aprenda com o que você ama
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Listening, Speaking, Reading e Writing — compreensão auditiva, fala,
            leitura e escrita — fazem parte do aprendizado. E você pode
            desenvolver essas habilidades por meio dos seus próprios interesses!
            Vamos transformar aquilo de que você gosta em oportunidades de
            aprender, praticar e se divertir com o inglês.
          </p>
          <span className="hidden md:block absolute bottom-1 left-7 text-red-800 text-3xl">
            →
          </span>
        </div>

        <div className="flex flex-col items-center relative py-8 md:py-0">
          <span className="text-red-800 font-serif text-xl absolute left-8 top-4 md:top-auto">
            04
          </span>
          <h3 className="text-xl font-bold text-white mt-8 md:mt-16 text-center px-4 md:ml-8 md:mr-8">
            Pratique um pouco todos os dias
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Você não precisa estudar horas por dia para começar a evoluir.
            Dedicar cinco minutos à prática já pode ajudar a manter o contato
            com o idioma e criar o hábito de aprender. Com pequenas ações
            consistentes, o inglês se torna cada vez mais familiar, até você se
            aproximar do nível que deseja alcançar.
          </p>
          <span className="hidden md:block absolute bottom-1 left-7 text-red-800 text-3xl">
            →
          </span>
        </div>
      </div>
    </section>
  );
};
