function Button({ children, onClick, size }) {
  return (
    <button
      className={`bg-primary text-white py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center ${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
