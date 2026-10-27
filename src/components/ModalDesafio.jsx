import { useState } from "react";
import { FiX, FiYoutube, FiFileText } from "react-icons/fi"; // Ícones do modal

export function ModalDesafio({ aula, onClose }) {
  const [selecionada, setSelecionada] = useState(null);
  const [enviado, setEnviado] = useState(false);

  // Embaralha as opções se for quiz
  const [opcoesEmbaralhadas] = useState(() => {
    if (!aula.quiz || !aula.quiz.opcoes) return [];
    const array = [...aula.quiz.opcoes];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  });

  const handleSubmit = () => {
    if (selecionada !== null) setEnviado(true);
  };

  const temQuiz =
    aula.quiz && aula.quiz.pergunta && opcoesEmbaralhadas.length > 0;

  return (
    // Overlay escuro
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Container do Modal - O 'onClick' com stopPropagation evita que o modal feche ao clicar dentro dele */}
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagem de capa opcional */}
        {aula.capaUrl && (
          <img
            src={aula.capaUrl}
            alt={aula.titulo}
            className="w-full h-56 md:h-72 object-cover rounded-t-2xl"
          />
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-gray-800 shadow-sm transition-colors"
        >
          <FiX size={24} />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {aula.titulo}
          </h2>
          {aula.descricao && (
            <p className="text-gray-600 mb-6">{aula.descricao}</p>
          )}

          {/* ÁREA DO QUIZ */}
          {temQuiz && (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {aula.quiz.pergunta}
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                {opcoesEmbaralhadas.map((opcao, index) => {
                  let classeExtra =
                    "border-gray-200 hover:border-sky-400 bg-white";
                  if (enviado) {
                    if (opcao.correta)
                      classeExtra =
                        "border-green-500 bg-green-50 text-green-800 font-bold";
                    else if (selecionada === index)
                      classeExtra = "border-red-500 bg-red-50 text-red-800";
                    else classeExtra = "border-gray-200 opacity-50";
                  } else if (selecionada === index) {
                    classeExtra =
                      "border-sky-500 bg-sky-50 text-sky-800 font-bold ring-2 ring-sky-200";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !enviado && setSelecionada(index)}
                      disabled={enviado}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${classeExtra}`}
                    >
                      {opcao.texto}
                    </button>
                  );
                })}
              </div>

              {!enviado ? (
                <button
                  onClick={handleSubmit}
                  disabled={selecionada === null}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Enviar Resposta
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEnviado(false);
                    setSelecionada(null);
                  }}
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Tentar Novamente
                </button>
              )}
            </div>
          )}

          {/* ÁREA DOS LINKS */}
          {aula.links && aula.links.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Materiais:
              </h3>
              <div className="flex flex-col gap-3">
                {aula.links.map((link, index) => {
                  const linkFinal =
                    link.tipo === "arquivo" ? link.urlArquivo : link.url;
                  const isYoutube =
                    linkFinal?.includes("youtube.com") ||
                    linkFinal?.includes("youtu.be");

                  return (
                    <a
                      key={index}
                      href={linkFinal || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      {isYoutube ? (
                        <FiYoutube size={20} />
                      ) : (
                        <FiFileText size={20} />
                      )}
                      <span>{link.titulo}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
