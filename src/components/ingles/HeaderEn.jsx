import { Link } from "react-router-dom";

export const HeaderEn = () => {
  return (
    <header className="py-4 border-b border-b-gray-400">
      <nav className="flex items-center justify-between px-4 md:px-10">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setTimeout(() => {
              document
                .getElementById("inicio")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        >
          <span className="w-10 h-10 grid place-items-center italic border border-solid border-current rounded-full font-serif text-sm mr-2">
            BN
          </span>
          <span className="font-semibold text-sm md:text-xs lg:text-base">
            Bianca Nishikawa
          </span>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm">
          <a
            href="#method"
            onClick={() => {
              setTimeout(() => {
                document
                  .getElementById("method")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="hover:text-gray-500 transition"
          >
            My Teaching Approach
          </a>
          <a
            href="#course"
            onClick={() => {
              setTimeout(() => {
                document
                  .getElementById("course")
                  ?.scrollIntoView({ behavior: "smooth" });
              });
            }}
            className="hover:text-gray-500 transition"
          >
            Learning Resources
          </a>
          <a
            href="#about"
            onClick={() => {
              setTimeout(() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              });
            }}
            className="hover:text-gray-500 transition"
          >
            About me
          </a>
        </div>

        <Link
          to="/"
          className="bg-red-800 hover:bg-red-900 text-xs md:text-sm px-4 py-3 text-white"
        >
          Português
        </Link>
      </nav>
    </header>
  );
};
