import ScrollToTop from "@/components/atoms/scrollToTop";

import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";
import Hero from "@/components/organisms/hero";

import About from "@/components/organisms/about";
import ProjectsSection from "@/components/organisms/projects";
import Skills from "@/components/organisms/skills";
import WorkExperience from "@/components/organisms/workExperience";
import Academic from "@/components/organisms/academic";

function Home() {
  return (
    <>
      <Hero />

      <About />

      <Skills />

      <ProjectsSection />

      <Academic />

      <WorkExperience />
    </>
  );
}

export default Home;
