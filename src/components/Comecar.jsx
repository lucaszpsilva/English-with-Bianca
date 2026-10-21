export const Comecar = ({ text, className = "" }) => {
  return (
    <a
      href="https://wa.me/5511920900339"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-center text-sm rounded-md transition ${className}`}
    >
      {text}
    </a>
  );
};
