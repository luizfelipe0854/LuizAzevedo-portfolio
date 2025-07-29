function IconLink({ link, children }) {
  return (
    <a href={link} className="flex items-center space-x-2">
      <span className="w-auto h-auto flex items-center justify-center text-4xl">
        {children}
      </span>
    </a>
  );
}

export default IconLink;
