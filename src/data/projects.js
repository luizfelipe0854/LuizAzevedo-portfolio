import todoListImage from "@/assets/projectsImages/ToDoList/todolistImage.png";
import filmesFlixImage from "@/assets/projectsImages/Filmesflix/FilmesFlixImage.png";
import goTasksImage from "@/assets/projectsImages/GoTasks/GoTasksImage.png";
import FinPulseImage from "@/assets/projectsImages/FinPulse/FinPulseImage.png";

export const projetos = [
  {
    id: 1,
    nome: "FinPulse",
    slug: "finpulse",
    descricaoCurta: "Suas finanças, em tempo real e sob controle.",
    descricao:
      "Dashboard financeiro pessoal com gráficos interativos (Recharts) para acompanhar receitas, despesas e evolução patrimonial em tempo real. Permite importar/exportar dados via planilhas (ExcelJS) e mantém tudo sincronizado na nuvem com autenticação Firebase.",
    tecnologias: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "Recharts",
      "ExcelJS",
      "Toastify",
      "Firebase",
    ],
    imagem: FinPulseImage,
    url: "https://finpulsedashboard.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/FinPulse",
  },
  {
    id: 2,
    nome: "To do List",
    slug: "todolist",
    descricaoCurta: "Suas tarefas, sempre com você e em qualquer lugar.",
    descricao:
      "Gerenciador de tarefas com login via Firebase, permitindo sincronizar a mesma lista entre celular e computador. Interface simples para criar, concluir e organizar tarefas do dia a dia sem perder o progresso ao trocar de dispositivo.",
    tecnologias: ["HTML5", "CSS3", "Javascript", "React", "Firebase"],
    imagem: todoListImage,
    url: "https://todolistluiz.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/todolist",
  },
  {
    id: 3,
    nome: "FilmesFlix",
    slug: "filmesflix",
    descricaoCurta: "Todo filme que você procura, em um só lugar.",
    descricao:
      "Catálogo de filmes com busca em tempo real, consumindo uma API pública via Axios para exibir pôster, sinopse, nota e informações de cada título de forma organizada e responsiva.",
    tecnologias: ["HTML5", "CSS3", "Javascript", "React", "Axios", "API"],
    imagem: filmesFlixImage,
    url: "https://filmsprojectluiz.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/filmsproject",
  },
  {
    id: 4,
    nome: "GoTasks",
    slug: "gotasks",
    descricaoCurta: "Onde tudo começou: organização com simplicidade.",
    descricao:
      "Primeira versão do gerenciador de tarefas, construída em JavaScript puro (vanilla), sem frameworks. Projeto que deu origem ao To do List e marcou os primeiros passos do autor com manipulação de DOM e lógica de front-end.",
    tecnologias: ["HTML5", "CSS3", "Javascript"],
    imagem: goTasksImage,
    url: "https://go-tasks.netlify.app/",
    repositorio: "https://github.com/luizfelipe0854/go-tasks",
  },
];
