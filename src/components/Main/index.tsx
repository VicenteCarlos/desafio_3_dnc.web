import { mocksCardBlog, mocksCardProject } from "@/mocks";
import { CardBlog } from "../CardBlog";
import { CardProject } from "../CardProject";

export const Main = () => {
  return (
    <main>
      <section className="flex flex-col items-start mt-[9.938rem] ml-[10.188rem]">
        <h1 className="text-[2.75rem] font-[700] w-[31.625rem]">
          Olá, eu sou Vicente Carlos Desenvolvedor Full-stack
        </h1>
        <p className="text-[1rem] mt-[2.5rem] mb-[2.375rem] w-[31.063rem]">
          Tenho contato com o universo de Front-End e Back-End, usando
          React/Node e Angular/SpringBoot, portanto, sou um profissional com as
          habilidades necessárias para o desenvolvimento, projeção e
          aplicabilidade de testes em aplicações web.
        </p>
        <button className="bg-[#FF6464] text-[1.25rem] font-[500] rounded-[0.125rem] text-white w-[13rem] h-[2.938rem]">
          <a
            href="https://drive.google.com/file/d/1zXradmgh5Wo4umhGUJ2GBVU7tJV9zusS/view?usp=sharing"
            target="_blank"
          >
            Download resumo
          </a>
        </button>
      </section>
      <section className="bg-[#EDF7FA] mt-[4.438rem] w-[72rem] h-[24.75rem] flex flex-col items-start justify-center">
        <h3 className="ml-[10.188rem] mb-[0.625rem] text-[1.375rem]">Blog</h3>
        <div className="ml-[10.188rem] flex justify-start items-center">
          {mocksCardBlog.map((cardBlog, i) => (
            <CardBlog key={`card-blog-${++i}`} {...cardBlog} />
          ))}
        </div>
      </section>
      <section className="mt-[2rem]">
        <h3 className="ml-[10.188rem] mb-[0.625rem] text-[1.375rem]">
          Projetos
        </h3>
        <div className="ml-[10.188rem] mt-[1.375rem] flex flex-col items-start">
          {mocksCardProject.map((cardProject, i) => (
            <CardProject key={`card-project-${++i}`} {...cardProject} />
          ))}
        </div>
      </section>
      <section>iii</section>
    </main>
  );
};
