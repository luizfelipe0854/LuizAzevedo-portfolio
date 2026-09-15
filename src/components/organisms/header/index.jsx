import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projetos/");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="header"
      className="flex justify-between items-center pb-4 pt-2 relative"
    >
      <h1 className="text-2xl font-bold text-textMain z-50">
        &lt;Luiz Azevedo/&gt;
      </h1>

      <button
        className="sm:hidden text-2xl text-textMain z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? (
          <FaTimes className="text-textMain" />
        ) : (
          <FaBars className="text-textMain" />
        )}
      </button>

      <nav
        className={`
        ${isOpen ? "flex" : "hidden"}
        sm:flex
        flex-col sm:flex-row
        fixed sm:relative
        inset-0 sm:inset-auto
        justify-center items-center
        sm:w-auto
        p-4 sm:p-0
        sm:shadow-none
        z-40
        bg-background sm:bg-background-light
      `}
      >
        {!isProjectPage && (
          <ul className="flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
            <li className="font-bold text-textSecondary text-default-size">
              <a href="#projetos" onClick={handleLinkClick}>
                Projetos
              </a>
            </li>
            <li className="font-bold text-textSecondary text-default-size">
              <a href="#habilidades" onClick={handleLinkClick}>
                Habilidades
              </a>
            </li>
            <li className="font-bold text-textSecondary text-default-size">
              <a href="#formacao" onClick={handleLinkClick}>
                Formação
              </a>
            </li>
            <li className="font-bold text-textSecondary text-default-size">
              <a href="#experiencia" onClick={handleLinkClick}>
                Experiência
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
