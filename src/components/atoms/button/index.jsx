function Button({ children, onClick }) {
  return (
    <button
      className="bg-primary text-white py-2 px-4 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
