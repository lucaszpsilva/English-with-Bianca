import { Comecar } from "../Comecar";

export const CardEn = () => {
  return (
    <section className="min-h-[44rem] bg-[#e7795e] py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-20 mt-8 md:mt-20 gap-8">
        <div className="flex flex-col w-full md:max-w-[32rem]">
          <span className="text-xl font-semibold text-gray-300 uppercase">
            Whether you're planning to visit Brazil, living here, or simply
            curious about the language.
          </span>
          <h3 className="text-3xl md:text-5xl font-serif font-semibold mt-6 max-w-96 text-white leading-tight">
            I'll help you build confidence and
            <br className="hidden md:block" />
            communicate more
            <i className="text-[#17362d]"> naturally in Portuguese.</i>
          </h3>
          <Comecar
            className="mt-10 py-3 px-2 md:px-2 bg-white hover:scale-105 text-[#17362d] font-bold"
            text="Your Portuguese journey starts here →"
          />
        </div>

        <div className="w-full max-w-[20rem] h-auto min-h-[20rem] md:min-h-[34rem] md:w-[20rem] bg-white shadow-[25px_29px_15px_-3px_black] mx-auto md:mx-0 mt-8 md:mt-0 flex flex-col flex-row items-center justify-center">
          <h2 className="text-2xl font-serif italic text-[#991b1b] mt-4 mx-auto text-center">
            Take the
            <strong className="text-[#17362d]"> first step</strong>
          </h2>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              100% online — Classes via Google Meet Lessons for all ages — Kids,
              teens, and adults
            </span>
          </div>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              1- lesson per week R$ 200/month Approximately US$ 40 / €35 One
              60-minute lesson per week
            </span>
          </div>
          <div className="flex items-center mt-4 md:mt-8 mx-2 md:mx-4">
            <span className="rounded-full px-1 border border-black text-green-400">
              ✓
            </span>
            <span className="ml-2">
              2- lessons per week R$ 300/month Approximately US$ 60 / €53 Two
              55-minute lessons per week
            </span>
          </div>
          <div className="flex flex-col flex-wrap w-10/12 mt-4 mx-2 md:mx-4 border-t border-t-black">
            <span className="mt-2 italic text-gray-600 text-center">
              <strong>
                Pricing & Currency <br />
              </strong>
              All prices are fixed in Brazilian Reais (BRL). USD and EUR amounts
              are approximate conversions and may vary depending on the current
              exchange rate.
            </span>
            <span className="mt-2 italic text-gray-600 text-center mb-4">
              <strong>
                Payment Methods <br />
              </strong>
              <p>International students: Payments via Wise or Revolut</p>
              <p>
                Students living in Brazil: Payments via Brazilian bank transfer.
              </p>
            </span>
            <span className=" italic text-gray-600 text-center mb-4"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
