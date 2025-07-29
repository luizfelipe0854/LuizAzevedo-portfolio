import "./reset.css";

import Button from "../atoms/button";

import IconLink from "../atoms/iconLink";

import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="bg-background min-h-screen w-full flex justify-center">
      <div className="bg-background-light w-[90%] my-6">
        <Button onClick={() => alert("Clicado!")}>Ver projetos</Button>
        <IconLink link="https://github.com">
          <FaLinkedin />
        </IconLink>
      </div>
    </div>
  );
}

export default App;
