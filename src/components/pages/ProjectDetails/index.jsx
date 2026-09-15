import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { projetos } from "@/data/projects";
import IconLink from "@/components/atoms/iconLink";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function ProjectDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const projeto = projetos.find((projeto) => projeto.slug === slug);

  if (!projeto) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen w-full pb-16">
      <Link
        to="#"
        onClick={() => navigate(-1)}
        className="group inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors duration-200 mt-4 mb-8"
      >
        <FaArrowLeftLong className="transition-transform duration-200 group-hover:-translate-x-1" />
        Voltar para a home
      </Link>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold text-textMain">
          {projeto.nome}
        </h1>

        <div className="flex gap-3">
          <IconLink
            link={projeto.repositorio}
            size="text-xl"
            className="inline-flex items-center justify-center text-xl text-textMain bg-background-light shadow-md rounded-full w-11 h-11 transition-all duration-200 hover:text-primary hover:shadow-lg hover:-translate-y-0.5"
          >
            <FaGithub />
          </IconLink>
          <IconLink
            link={projeto.url}
            size="text-xl"
            className="inline-flex items-center justify-center text-xl text-textMain bg-background-light shadow-md rounded-full w-11 h-11 transition-all duration-200 hover:text-primary hover:shadow-lg hover:-translate-y-0.5"
          >
            <TbWorld />
          </IconLink>
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
        <img
          src={projeto.imagem}
          alt={projeto.nome}
          className="w-full h-[260px] sm:h-[380px] object-cover"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-textMain uppercase tracking-wide mb-3">
          Tecnologias utilizadas
        </h2>
        <div className="flex flex-wrap gap-2">
          {projeto.tecnologias.map((tecnologia, index) => (
            <span
              key={index}
              className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
            >
              {tecnologia}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-background-light rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-sm font-semibold text-textMain uppercase tracking-wide mb-3">
          Sobre o projeto
        </h2>
        <p className="text-textMain leading-relaxed">{projeto.descricao}</p>
      </section>

      {projeto.galeria?.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-textMain uppercase tracking-wide mb-3">
            Galeria
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {projeto.galeria.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={`${projeto.nome} - imagem ${index + 1}`}
                className="w-full h-[160px] sm:h-[200px] object-cover rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.03]"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectDetails;
