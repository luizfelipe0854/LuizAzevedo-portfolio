import Title from "../../atoms/title";

import ProjectCard from "../../molecules/projectCard";

import { projetos } from "../projects/projects";

function ProjectsSection() {
  return (
    <section className="mt-12" id="projetos">
      <Title>Projetos</Title>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;
