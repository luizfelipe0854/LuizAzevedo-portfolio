import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiDocker,
  SiMysql,
} from "react-icons/si";

import Title from "../../atoms/title";
import SkillIcon from "../../molecules/skillIcon";

function Skills() {
  return (
    <section id="habilidades">
      <Title>Habilidades</Title>
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
        <SkillIcon label="Tailwind">
          <SiTailwindcss />
        </SkillIcon>
        <SkillIcon label="Bootstrap">
          <SiBootstrap />
        </SkillIcon>
        <SkillIcon label="Git">
          <SiGit />
        </SkillIcon>
        <SkillIcon label="Docker">
          <SiDocker />
        </SkillIcon>
        <SkillIcon label="MySQL">
          <SiMysql />
        </SkillIcon>
      </div>
    </section>
  );
}

export default Skills;
