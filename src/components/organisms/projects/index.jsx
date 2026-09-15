import Title from "@/components/atoms/title";
import ProjectCard from "@/components/molecules/projectCard";
import { projetos } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function ProjectsSection() {
  return (
    <section className="mt-12" id="projetos">
      <Title>Projetos</Title>

      <div className="hidden lg:grid mt-6 gap-8 grid-cols-3 justify-between">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>

      <div className="lg:hidden mt-6">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="h-[520px]"
        >
          {projetos.map((projeto) => (
            <SwiperSlide key={projeto.id}>
              <ProjectCard projeto={projeto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default ProjectsSection;
