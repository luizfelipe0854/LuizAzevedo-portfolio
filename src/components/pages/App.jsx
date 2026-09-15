import "@/components/pages/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/atoms/scrollToTop";
import ScrollRestoration from "@/components/atoms/scrollRestoration";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

import Home from "@/components/pages/Home";
import ProjectDetails from "@/components/pages/ProjectDetails";

function App() {
  return (
    <div className="bg-background min-h-screen w-full flex justify-center">
      <div className="w-[90%] max-w-[1200px] my-6 p-4 sm:p-10">
        <BrowserRouter>
          <ScrollRestoration />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos/:slug" element={<ProjectDetails />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
