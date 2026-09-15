import Title from "@/components/atoms/title";
import { academico } from "@/data/timelinedata";
import ExperienceList from "@/components/molecules/experienceList";

function Academic() {
  return (
    <section id="formacao">
      <Title>Formação Acadêmica</Title>
      <ExperienceList data={academico} />
    </section>
  );
}

export default Academic;
