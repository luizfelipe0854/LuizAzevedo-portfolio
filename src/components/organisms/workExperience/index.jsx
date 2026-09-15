import Title from "@/components/atoms/title";
import { profissional } from "@/data/timelinedata";
import ExperienceList from "@/components/molecules/experienceList";

function WorkExperience() {
  return (
    <section id="experiencia">
      <Title>Experiência</Title>
      <ExperienceList data={profissional} />
    </section>
  );
}

export default WorkExperience;
