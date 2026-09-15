import todoListImage from "@/assets/todolistImage.png";
import filmesFlixImage from "@/assets/FilmesFlixImage.png";
import goTasksImage from "@/assets/GoTasksImage.png";
import FinPulseImage from "@/assets/FinPulseImage.png";

export const projetos = [
    {
    id: 1,
    nome: "FinPulse",
    slug: "finpulse",
    descricao:
      "Desenvolvido para oferecer uma visão abrangente e em tempo real das atividades financeiras, permitindo uma melhor gestão e tomada de decisão.",
    tecnologias: [ "Vite", "React", "TypeScript", "Tailwind", "Recharts", "ExcelJS", "Toastify", "Firebase"],
    imagem: FinPulseImage,
    url: "https://finpulsedashboard.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/FinPulse",
  },  
  {
    id: 2,
    nome: "To do List",
    slug: "todolist",
    descricao:
      "Criado para auxiliar usuários a organizarem suas tarefas diárias de forma simples e eficiente, gerindo-as no celular e computador conforme login.",
    tecnologias: ["HTML5", "CSS3", "Javascript", "React", "Firebase"],
    imagem: todoListImage,
    url: "https://todolistluiz.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/todolist",
  },
  {
    id: 3,
    nome: "FilmesFlix",
    slug: "filmesflix",
    descricao:
      "Desenvolvido para facilitar a busca rápida e exibição organizada das informações detalhadas dos filmes, de maneira simples e eficiente",
    tecnologias: ["HTML5", "CSS3", "Javascript", "React", "Axios", "API"],
    imagem: filmesFlixImage,
    url: "https://filmsprojectluiz.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/filmsproject",
  },
  {
    id: 4,
    nome: "GoTasks",
    slug: "gotasks",
    descricao:
      "Criado com o objetivo de ajudar usuários a gerenciarem tarefas de maneira prática e eficiente, antecessor do To do List.",
    tecnologias: ["HTML5", "CSS3", "Javascript"],
    imagem: goTasksImage,
    url: "https://go-tasks.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/go-tasks",
  },
];
