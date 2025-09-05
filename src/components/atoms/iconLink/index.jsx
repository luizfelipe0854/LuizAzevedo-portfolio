function IconLink({ link, children, size = "text-4xl" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${size} text-textMain`}
    >
      {children}
    </a>
  );
}

export default IconLink;
