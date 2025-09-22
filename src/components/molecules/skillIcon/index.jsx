function SkillIcon({ children, label }) {
  return (
    <div className="flex flex-col items-center text-4xl">
      <div className="p-2 rounded-md duration-200 hover:inset-ring-2 hover:inset-ring-(--color-primary) hover:scale-110 cursor-pointer">
        {" "}
        {children}
      </div>
      <span className="text-sm text-(--color-text-secondary) ">{label}</span>
    </div>
  );
}
export default SkillIcon;
