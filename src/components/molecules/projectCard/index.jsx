import IconLink from "../../atoms/iconLink";

import { FaRegFolder } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

function ProjectCard({ projeto }) {
  return (
    <div className="rounded-lg shadow-md p-4 max-w-xs">
      <img
        src={projeto.imagem}
        alt={projeto.nome}
        className="w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{projeto.nome}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {projeto.tecnologias.map((tecnologia, index) => (
          <span
            key={index}
            className="text-sm text-color p-1 bg-gray-200 rounded"
          >
            {tecnologia}
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-2">{projeto.descricao}</p>
      <div className="flex gap-2">
        <IconLink link={projeto.url} size="text-xl">
          <FaEarthAmericas />
        </IconLink>
        <IconLink link={projeto.repositorio} size="text-xl">
          <FaRegFolder />
        </IconLink>
      </div>
    </div>
  );
}

export default ProjectCard;
