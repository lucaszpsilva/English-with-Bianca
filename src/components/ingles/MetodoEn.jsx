export const MetodoEn = () => {
  return (
    <section id="method" className=" bg-[#fffcf6] py-16">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex items-center justify-center">
          <span className="w-10 h-0.5 bg-red-800 mr-3"></span>
          <span className="uppercase tracking-widest text-sm md:text-base">
            A lighter way to learn
          </span>
          <span className="w-10 h-0.5 bg-red-800 ml-3"></span>
        </div>
        <h2 className="text-3xl md:text-4xl mt-2 font-serif leading-tight text-slate-600 text-center">
          Portuguese doesn’t have
          <br />
          to be <i className="text-red-800">overwhelming.</i>
        </h2>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mt-10 gap-8 md:gap-0">
          <div className="w-full max-w-[380px] mx-auto my-auto text-gray-500 tracking-normal leading-normal px-4 md:px-0">
            <p className="mb-10">
              Everyone learns differently. That’s why lessons are customized to
              your interests, goals, and needs, helping you build confidence and
              speak Portuguese at your own pace.
            </p>
          </div>

          <div className="w-full mx-5 md:w-2/4 flex flex-col justify-start pr-0 md:pr-28">
            <div className="flex flex-col pb-4 mb-4">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-red-800 mr-4 md:mr-14 font-serif text-2xl italic">
                  01
                </span>
                <h3 className="text-xl md:text-2xl">Meaningful learning</h3>
              </div>
              <p className="mt-3 text-gray-600 -tracking-tighter pl-0 md:pl-[3.25rem] border-b border-gray-600 pb-6">
                Focus on understanding the logic behind the words, not just rote
                learning.
              </p>

              <div className="flex items-center gap-4 md:gap-6 mt-6">
                <span className="text-red-800 mr-4 md:mr-14 font-serif text-2xl italic">
                  02
                </span>
                <h3 className="text-xl md:text-2xl">
                  Action-oriented practice
                </h3>
              </div>
              <p className="mt-3 text-gray-600 -tracking-tighter pl-0 md:pl-[3.25rem] border-b border-gray-600 pb-6">
                Every activity helps you prepare for daily life scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
