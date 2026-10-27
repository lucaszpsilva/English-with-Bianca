import { Link } from "react-router-dom";

export const Header = () => {
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
          <span className="hidden md:inline font-semibold text-sm md:text-xs lg:text-base">
            Bianca Nishikawa
          </span>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm">
          <a
            href="#metodo"
            onClick={() => {
              setTimeout(() => {
                document
                  .getElementById("metodo")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="hover:text-gray-500 transition"
          >
            O método
          </a>
          <a
            href="#curso"
            onClick={() => {
              setTimeout(() => {
                document
                  .getElementById("curso")
                  ?.scrollIntoView({ behavior: "smooth" });
              });
            }}
            className="hover:text-gray-500 transition"
          >
            Conteúdo
          </a>
          <a
            href="#sobre"
            onClick={() => {
              setTimeout(() => {
                document
                  .getElementById("sobre")
                  ?.scrollIntoView({ behavior: "smooth" });
              });
            }}
            className="hover:text-gray-500 transition"
          >
            Sobre mim
          </a>
          <Link
            to="/login"
            className="text-xs md:text-sm  hover:text-gray-500 transition "
          >
            Já sou aluno(a)
          </Link>
        </div>
        <div className="flex justify-center md:hidden">
          <Link
            to="/login"
            className="text-sm border border-black hover:border-red-800 hover:text-red-800 px-4 py-2 transition "
          >
            Já sou aluno(a)
          </Link>
        </div>

        <Link
          to="/en"
          className="bg-gray-600 hover:bg-gray-700 text-xs md:text-sm px-6 py-3 text-white"
        >
          English
        </Link>
      </nav>
    </header>
  );
};
