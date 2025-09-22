import Title from "../../atoms/title";
import { profissional } from "../data/timelinedata";
import Timeline from "../../molecules/timeline";

function WorkExperience() {
  return (
    <section id="experiencia">
      <Title>Experiência</Title>
      <Timeline data={profissional} tipo="profissional" />
    </section>
  );
}

export default WorkExperience;
