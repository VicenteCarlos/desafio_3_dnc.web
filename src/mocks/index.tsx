import { IPropsMocksCardBlog, IPropsMocksCardProject, IPropsMocksNetwork } from "@/interfaces";

export const mocksLinks: string[] = ["Projetos", "Blog", "Contato"];

export const mocksCardBlog: IPropsMocksCardBlog[] = [
  {
    title: "Fazendo um cronômetro pro cliente",
    paragraph_1: "12 Fev 2024",
    paragraph_2: "HTML, CSS E JS",
    text: "O projeto HTML, CSS e JavaScript do cronômetro combina a estrutura HTML, o estilo CSS e a funcionalidade dinâmica do JavaScript para criar uma aplicação interativa que permite aos usuários acompanhar o tempo decorrido.",
  },
  {
    title: "Fazendo uma landing-page pro cliente",
    paragraph_1: "20 Fev 2024",
    paragraph_2: "HTML, CSS E JS",
    text: " O projeto de landing page em HTML, CSS e JavaScript combina a estrutura HTML para conteúdo, o estilo CSS para design visual e o JavaScript para interatividade, criando uma página eficaz para converter visitantes em leads ou clientes.",
  },
];

export const mocksCardProject: IPropsMocksCardProject[] = [
  {
    image: "../../public/img/time-project.png",
    title: "Projeto de cálculo de temperatura e localização",
    description:
      "Projeto tem como objetivo fornecer ao usuário informações sobre o clima e localização baseado em latitude e longitude",
    link: "https://master--desafio-2-callsodapi-dnc.netlify.app/",
  },
  {
    image: "../../public/img/arquitecture-project.png",
    title: "Projeto de landing-page da área de arquitetura",
    description:
      "Projeto tem como objetivo demonstrar ao usuário trabalhos relacionados a arquitetura",
    link: "https://master--desafio-1-dnc-by-vicente.netlify.app/",
  },
];

export const mocksNetwork: IPropsMocksNetwork[] = [
  {
    image: "../../public/svg/facebook.svg",
    link: "",
  },
  {
    image: "../../public/svg/instagram.svg",
    link: "https://www.instagram.com/vicent3.dev/",
  },
  {
    image: "../../public/svg/twitter.svg",
    link: "",
  },
  {
    image: "../../public/svg/linkedin.svg",
    link: "https://www.linkedin.com/in/vicente-carlos-silva/",
  },
];
