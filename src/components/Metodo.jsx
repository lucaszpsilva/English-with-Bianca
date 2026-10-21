export const Metodo = () => {
  return (
    <section id="metodo" className="min-h-[640px] bg-[#fffcf6] py-16">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex items-center justify-center">
          <span className="w-10 h-0.5 bg-red-800 mr-3"></span>
          <span className="uppercase tracking-widest text-sm md:text-base">
            Um jeito leve de aprender
          </span>
          <span className="w-10 h-0.5 bg-red-800 ml-3"></span>
        </div>
        <h2 className="text-3xl md:text-4xl mt-2 font-serif leading-tight text-slate-600 text-center">
          O inglês não precisa ser <br />
          um <i className="text-red-800">bicho de sete cabeças.</i>
        </h2>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mt-10 gap-8 md:gap-0">
          <div className="w-full max-w-[380px] mx-auto my-auto text-gray-500 tracking-normal leading-normal px-4 md:px-0">
            <p className="mb-10">
              Cada pessoa aprende de um jeito, e suas aulas devem respeitar
              isso. Por isso, as aulas são personalizadas de acordo com seu
              estilo de aprendizagem, seus interesses e suas dificuldades, com
              foco no que você realmente precisa desenvolver.
            </p>
            <p>
              Aqui, você evolui no seu ritmo, construindo confiança e
              compreensão a cada etapa. Respeitando seu processo, sem
              comparações e sem a pressão de precisar aprender tudo de uma vez.
            </p>
          </div>

          <div className="w-full md:w-2/4 flex flex-col justify-start pr-0 md:pr-28">
            <div className="flex flex-col pb-4 mb-4">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-red-800 mr-4 md:mr-14 font-serif text-2xl italic">
                  01
                </span>
                <h3 className="text-xl md:text-2xl">Clareza antes da pressa</h3>
              </div>
              <p className="mt-3 text-gray-600 -tracking-tighter pl-0 md:pl-[3.25rem] border-b border-gray-600 pb-6">
                Você entende o porquê, não apenas repete fórmulas.
              </p>

              <div className="flex items-center gap-4 md:gap-6 mt-6">
                <span className="text-red-800 mr-4 md:mr-14 font-serif text-2xl italic">
                  02
                </span>
                <h3 className="text-xl md:text-2xl">Prática com propósito</h3>
              </div>
              <p className="mt-3 text-gray-600 -tracking-tighter pl-0 md:pl-[3.25rem] border-b border-gray-600 pb-6">
                Cada exercício prepara você para uma situação real.
              </p>

              <div className="flex items-center gap-4 md:gap-6 mt-6">
                <span className="text-red-800 mr-4 md:mr-14 font-serif text-2xl italic">
                  03
                </span>
                <h3 className="text-xl md:text-2xl">Consistência possível</h3>
              </div>
              <p className="mt-3 text-gray-600 -tracking-tighter pl-0 md:pl-[3.25rem] border-b border-gray-600 pb-6">
                Uma rotina leve que funciona até nos dias mais corridos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
