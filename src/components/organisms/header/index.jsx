function Header() {
  return (
    <header id="header" className="flex justify-between items-center pb-4 pt-2">
      <h1 className="text-3xl font-bold text-textMain">Luiz Azevedo</h1>
      <nav className="header_nav">
        <ul className="flex gap-6">
          <li className="font-bold text-textSecondary">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#experiencia">Experiência</a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#formacao">Formação</a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#habilidades">Habilidades</a>
          </li>
          <li className="font-bold text-textSecondary">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
