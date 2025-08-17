function SkillIcon({ children, label }) {
  return (
    <div className="flex flex-col items-center text-4xl">
      {children}
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}
export default SkillIcon;
