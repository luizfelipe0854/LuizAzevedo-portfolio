import "./reset.css";

import ScrollToTop from "../atoms/scrollToTop";

import Header from "../organisms/header";
import Footer from "../organisms/footer";
import Hero from "../organisms/hero";

import About from "../organisms/about";
import ProjectsSection from "../organisms/projects";
import Skills from "../organisms/skills";
import WorkExperience from "../organisms/workExperience";
import Academic from "../organisms/academic";

function App() {
  return (
    <div className="bg-background min-h-screen w-full flex justify-center">
      <div className="bg-background-light w-[90%] max-w-[1200px] my-6 rounded-lg shadow-lg p-4 sm:p-10">
        <Header />

        <Hero />

        <About />

        <Skills />

        <ProjectsSection />

        <Academic />

        <WorkExperience />

        <ScrollToTop />

        <Footer />
      </div>
    </div>
  );
}

export default App;
