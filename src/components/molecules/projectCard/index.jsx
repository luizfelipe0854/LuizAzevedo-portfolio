import { Link, useNavigate } from "react-router-dom";

function ProjectCard({ projeto }) {
  const navigate = useNavigate();

  return (
    <div
      className="group rounded-lg shadow-md p-4 max-w-full flex flex-col justify-between h-[350px] cursor-pointer"
      onClick={() => navigate(`/projetos/${projeto.slug}`)}
    >
      <img
        src={projeto.imagem}
        alt={projeto.nome}
        className="w-full h-[180px] object-cover rounded-md mb-4"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{projeto.nome}</h3>

        <p className="text-gray-700 mb-2 text-default-size">
          {projeto.descricaoCurta}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          className="bg-primary text-white py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center w-full transition-colors duration-100 group-hover:bg-primary-hover"
          to={`/projetos/${projeto.slug}`}
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
