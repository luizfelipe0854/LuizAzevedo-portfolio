import Hero from "@/components/organisms/hero";

import About from "@/components/organisms/about";
import Resume from "@/components/organisms/resume";
import ProjectsSection from "@/components/organisms/projects";
import Skills from "@/components/organisms/skills";
import WorkExperience from "@/components/organisms/workExperience";
import Academic from "@/components/organisms/academic";

function Home() {
  return (
    <>
      <Hero />

      <Resume />

      <About />

      <ProjectsSection />

      <Skills />

      <Academic />

      <WorkExperience />
    </>
  );
}

export default Home;
