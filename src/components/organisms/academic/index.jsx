import Title from "@/components/atoms/title";
import { academico } from "@/data/timelinedata";
import Timeline from "@/components/molecules/timeline";

function Academic() {
  return (
    <section id="formacao">
      <Title>Formação Acadêmica</Title>
      <Timeline data={academico} tipo="academico" />
    </section>
  );
}

export default Academic;
