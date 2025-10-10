import { useState, useEffect } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  function toggleReadMore() {
    setIsExpanded(!isExpanded);
  }

  return (
    <section id="sobre" className="flex flex-col justify-center">
      <p
        className={`text-default-size leading-[24px] ${
          isMobile && !isExpanded ? "max-h-[190px]" : "max-h-none"
        } overflow-y-hidden sm:max-h-none`}
      >
        Sou Desenvolvedor Frontend com experiência em JavaScript, TypeScript e
        ReactJS, criando interfaces modernas, responsivas e centradas no
        usuário. Tenho domínio em HTML5, CSS3, Tailwind, Bootstrap, Flexbox e
        CSS Grid, aplicando boas práticas de UI/UX para transformar ideias em
        experiências digitais envolventes.
        <br /> Sou formado em Análise e Desenvolvimento de Sistemas e
        pós-graduando em Front-end Engineering pela FIAP. Tenho conhecimento em
        APIs REST, Firebase (autenticação e banco de dados), Git/GitHub, Docker
        e testes com Jest. Também possuo noções de SQL (MySQL e SQL Server), o
        que amplia minha compreensão do fluxo entre front e back-end.
        <br /> Me destaco pela boa comunicação, colaboração em equipe e foco em
        soluções escaláveis, buscando sempre unir código limpo, performance e
        experiência do usuário.
      </p>
      {isMobile && (
        <button
          onClick={toggleReadMore}
          className="text-default-size font-bold text-textMain cursor-pointer justify-center mt-2"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </section>
  );
}

export default About;
