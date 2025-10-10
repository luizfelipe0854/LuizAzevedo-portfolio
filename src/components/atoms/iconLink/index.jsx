function IconLink({ link, children, size, ...props }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${size} text-textMain`}
      {...props}
    >
      {children}
    </a>
  );
}

export default IconLink;
