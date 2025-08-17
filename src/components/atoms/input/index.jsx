function Input({ type, placeholder }) {
  return (
    <input
      className="border rounded-lg p-2"
      type={type}
      name={type}
      placeholder={placeholder}
      required
      autoComplete="off"
    />
  );
}
export default Input;
