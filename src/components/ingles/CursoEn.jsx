export const CursoEn = () => {
  return (
    <section id="course" className="min-h-[54rem] bg-[#12352b] pb-16">
      <div className="flex items-center px-4 md:ml-24 pt-28">
        <span className="w-10 h-0.5 bg-red-800 mr-3"></span>
        <span className="uppercase tracking-widest text-gray-300">
          In this course
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-5 px-4 md:ml-[6.1rem]">
        <div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
            A clear path. <br />
            <i className="font-serif text-red-800">
              From the basics to real conversations.
            </i>
          </h2>
        </div>
        <div className="flex mt-4 md:mt-0">
          <p className="text-gray-400 w-full md:w-[310px] md:mr-24 md:mt-7">
            Content organized into a simple learning path, so you always know
            what to focus on next.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto mt-10 border-t border-b">
        <div className="flex flex-col items-center relative border-b md:border-b-0 md:border-r py-8 md:py-0">
          <span className="text-red-800 font-serif text-xl absolute left-8 top-4 md:top-auto">
            01
          </span>
          <h3 className="text-xl font-bold text-white mt-8 md:mt-16">
            Make the Basics Simple
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Before moving forward, let’s build a strong foundation with clear
            explanations and practical examples, helping you understand how
            Portuguese works and learn with confidence.
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
            Expand Your Vocabulary
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Learning a language is more than memorizing words. We’ll explore
            useful vocabulary and everyday expressions to help you understand
            Portuguese and communicate more naturally.
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
            Learn Through What You Love
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            Let’s develop your Listening, Speaking, Reading, and Writing skills
            through your interests, turning music, movies, series, and hobbies
            into fun learning opportunities.
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
            Practice a Little Every Day
          </h3>
          <p className="mt-4 md:mt-10 mb-8 md:mb-14 text-gray-400 mx-4 md:mx-9">
            You don’t need to study for hours to make progress! Even five
            minutes a day can help you build a habit and become more familiar
            with Portuguese. Consistency is key.
          </p>
          <span className="hidden md:block absolute bottom-1 left-7 text-red-800 text-3xl">
            →
          </span>
        </div>
      </div>
    </section>
  );
};
