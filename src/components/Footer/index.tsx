import { mocksNetwork } from "@/mocks";

export const Footer = () => (
  <footer className="text-center h-[12vh]">
    <nav className="flex justify-center items-center mt-[8.375rem] mb-[1.625rem]">
      <ul className="flex">
        {mocksNetwork.map((network, i) => (
          <li key={`network-${++i}`} className="mx-[1.188rem]">
            <a href={network.link}>
              <img src={network.image} alt="#" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <strong className="text-[0.875rem] font-[400]">
      Copyright ©2020 All rights reserved
    </strong>
  </footer>
);
