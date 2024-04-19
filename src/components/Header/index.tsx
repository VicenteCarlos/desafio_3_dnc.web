import { mocksLinks } from "@/mocks";

export const Header = () => (
  <header>
    <nav className="flex justify-end items-center mt-[1.625rem] mr-[5.938rem]">
      <ul className="flex">
        {mocksLinks.map((link, i) => (
          <li key={`link-${++i}`}>
            <a className="text-[1.25rem] mx-[1.4rem] font-[500]" href={`#${link.toLocaleLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
