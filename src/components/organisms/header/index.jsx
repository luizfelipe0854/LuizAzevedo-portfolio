import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="header"
      className="flex justify-between items-center pb-4 pt-2 relative"
    >
      <h1 className="text-3xl font-bold text-textMain z-50">
        &lt;Luiz Azevedo/&gt;
      </h1>

      <button
        className="md:hidden text-2xl text-textMain z-50"
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
        md:flex
        flex-col md:flex-row
        fixed md:relative
        inset-0 md:inset-auto
        bg-background-light md:bg-transparent
        justify-center items-center
        md:w-auto
        p-4 md:p-0
        md:shadow-none
        z-40
      `}
      >
        <ul className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
          <li className="font-bold text-textSecondary">
            <a href="#sobre" onClick={handleLinkClick}>
              Sobre
            </a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#projetos" onClick={handleLinkClick}>
              Projetos
            </a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#experiencia" onClick={handleLinkClick}>
              Experiência
            </a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#formacao" onClick={handleLinkClick}>
              Formação
            </a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#habilidades" onClick={handleLinkClick}>
              Habilidades
            </a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#contato" onClick={handleLinkClick}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
