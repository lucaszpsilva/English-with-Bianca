import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity";
import { FiEye } from "react-icons/fi"; // Ícone para indicar que é clicável
import { ModalDesafio } from "./ModalDesafio"; // Importe o novo Modal

export function Challenges() {
  const [desafios, setDesafios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [modalAberto, setModalAberto] = useState(null);

  useEffect(() => {
    const query = `*[_type == "aula" && categoria == "challenges"] | order(_createdAt desc) {
      _id,
      titulo,
      descricao,
      "capaUrl": capa.asset->url,
      "links": links[] { titulo, tipo, url, "urlArquivo": arquivo.asset->url },
      quiz { pergunta, opcoes }
    }`;

    client
      .fetch(query)
      .then((data) => {
        setDesafios(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
        setCarregando(false);
      });
  }, []);

  if (carregando)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5e9db]">
        Carregando...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f5e9db] p-4 sm:p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <Link
            to="/area-do-aluno"
            className="text-sky-700 hover:text-sky-900 font-bold mb-2 inline-block"
          >
            ← Voltar para a Área do Aluno
          </Link>
          <h1 className="text-4xl font-serif italic font-bold text-gray-800">
            Challenges
          </h1>
        </div>

        {desafios.length === 0 ? (
          <p className="text-center text-gray-600 bg-white p-10 rounded-xl shadow-sm">
            Nenhum desafio publicado ainda.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desafios.map((desafio) => {
              // Verifica se o card tem algo para mostrar no modal
              const temQuiz =
                desafio.quiz &&
                desafio.quiz.pergunta &&
                desafio.quiz.opcoes?.length > 0;
              const temLinks = desafio.links && desafio.links.length > 0;

              return (
                // O Card inteiro é um botão que abre o Modal
                <button
                  key={desafio._id}
                  onClick={() => setModalAberto(desafio)}
                  className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left w-full h-full"
                >
                  {desafio.capaUrl && (
                    <img
                      src={desafio.capaUrl}
                      alt={desafio.titulo}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {desafio.titulo}
                    </h2>
                    {desafio.descricao && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {desafio.descricao}
                      </p>
                    )}

                    {/* Rodapé do Card com o aviso de clique */}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sky-600 font-semibold text-sm">
                      <span>
                        {temQuiz
                          ? "Responder Desafio"
                          : temLinks
                            ? "Ver Materiais"
                            : "Ver Detalhes"}
                      </span>
                      <FiEye size={18} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Renderiza o Modal se um card for selecionado */}
      {modalAberto && (
        <ModalDesafio aula={modalAberto} onClose={() => setModalAberto(null)} />
      )}
    </div>
  );
}
