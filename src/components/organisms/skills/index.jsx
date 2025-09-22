import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
} from "react-icons/si";

import Title from "../../atoms/title";
import SkillIcon from "../../molecules/skillIcon";

function Skills() {
  return (
    <section id="habilidades">
      <Title>Minhas Habilidades</Title>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <SkillIcon label="HTML5">
          <SiHtml5 />
        </SkillIcon>
        <SkillIcon label="CSS3">
          <SiCss3 />
        </SkillIcon>
        <SkillIcon label="JavaScript">
          <SiJavascript />
        </SkillIcon>
        <SkillIcon label="TypeScript">
          <SiTypescript />
        </SkillIcon>
        <SkillIcon label="React">
          <SiReact />
        </SkillIcon>
      </div>
    </section>
  );
}

export default Skills;
