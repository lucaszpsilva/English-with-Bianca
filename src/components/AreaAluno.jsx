import { useState } from "react";

export const AreaAluno = () => {
  const [codigoDigitado, setCodigoDigitado] = useState("");
  const [acessoLiberado, setAcessoLiberado] = useState(() => {
    const jaLogado = localStorage.getItem("alunoLogado");
    return jaLogado === "true";
  });

  const verificarCodigo = (e) => {
    e.preventDefault();

    const codigoLimpo = codigoDigitado.trim().toLowerCase();
    const codigoCorreto = "soualuno2026";

    if (codigoLimpo === codigoCorreto) {
      setAcessoLiberado(true);
      localStorage.setItem("alunoLogado", "true");
    } else {
      alert("Código incorreto");
      setCodigoDigitado("");
    }
  };

  // Se o acesso está liberado, mostra a área de membros
  if (acessoLiberado) {
    return (
      <div className="min-h-screen bg-[#dce7d8] p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-serif text-[#17362d] mb-6">
            Bem-vindo(a) à Área do Aluno!
          </h1>

          <div className="flex flex-col gap-4 mb-8">
            <a href="#" className="p-4 bg-gray-100 rounded hover:bg-gray-200">
              Material em PDF
            </a>
            <a href="#" className="p-4 bg-gray-100 rounded hover:bg-gray-200">
              Aulas
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Se não liberou o acesso, mostra a tela de login
  return (
    <div className="min-h-screen bg-[#fffcf6] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-serif text-[#17362d] mb-6">
          Área do Aluno
        </h1>
        <form onSubmit={verificarCodigo} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Digite seu código"
            value={codigoDigitado}
            onChange={(e) => setCodigoDigitado(e.target.value)}
            className="border border-gray-300 p-3 rounded text-center"
          />
          <button type="submit" className="bg-red-800 text-white py-3 rounded">
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
};
