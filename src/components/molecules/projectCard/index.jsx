import IconLink from "../../atoms/iconLink";

import { FaGithub } from "react-icons/fa";
import Button from "../../atoms/button";

function ProjectCard({ projeto }) {
  return (
    <div className="group rounded-lg shadow-md p-4 max-w-full flex flex-col justify-between h-[480px]">
      <img
        src={projeto.imagem}
        alt={projeto.nome}
        className="w-full h-[180px] object-cover rounded-md mb-4 blur-[2px] group-hover:blur-none transition duration-300"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{projeto.nome}</h3>
        <div className="flex flex-wrap gap-2 mb-2 min-h-[3rem] items-start">
          {projeto.tecnologias.map((tecnologia, index) => (
            <span
              key={index}
              className="text-sm text-color p-1 bg-gray-200 rounded h-fit"
            >
              {tecnologia}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-2 text-default-size">
          {projeto.descricao}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <IconLink link={projeto.repositorio} size="text-3xl">
          <FaGithub />
        </IconLink>
        <Button size="w-full">
          <a
            href={projeto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            Ver em Produção
          </a>
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
