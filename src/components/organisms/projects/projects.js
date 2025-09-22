import todoListImage from "../../../assets/todolistImage.png";
import filmesFlixImage from "../../../assets/FilmesFlixImage.png";
import goTasksImage from "../../../assets/GoTasksImage.png";

export const projetos = [
  {
    id: 1,
    nome: "To do List",
    descricao:
      "Criado para auxiliar usuários a organizarem suas tarefas diárias de forma simples e eficiente, gerindo-as no celular e computador conforme login.",
    tecnologias: ["HTML5", "CSS3", "Javascript", "React", "Firebase"],
    imagem: todoListImage,
    url: "https://todolistluiz.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/todolist",
  },
  {
    id: 2,
    nome: "FilmesFlix",
    descricao:
      "Desenvolvido para facilitar a busca rápida e exibição organizada das informações detalhadas dos filmes, de maneira simples e eficiente",
    tecnologias: ["HTML5", "CSS3", "Javascript", "React", "Axios", "API"],
    imagem: filmesFlixImage,
    url: "https://filmsprojectluiz.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/filmsproject",
  },
  {
    id: 3,
    nome: "GoTasks",
    descricao:
      "Criado com o objetivo de ajudar usuários a gerenciarem tarefas de maneira prática e eficiente, antecessor do To do List.",
    tecnologias: ["HTML5", "CSS3", "Javascript"],
    imagem: goTasksImage,
    url: "https://go-tasks.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/go-tasks",
  },
];
