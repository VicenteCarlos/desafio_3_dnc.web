import { IPropsMocksCardProject } from "@/interfaces";

export const CardProject = ({
  image,
  title,
  description,
  link
}: IPropsMocksCardProject) => (
  <div className="flex items-start justify-center mt-[1.938rem] border-b-[1rem] border-black">
    <a href={link} target="_blank">
      <img src={image} alt={title} className="w-[15.375rem] h-[11.25rem] rounded-[0.375rem]" />
    </a>
    <div className="flex flex-col ml-[3.625rem]">
      <h2 className="text-[1.875rem] font-[700]">{title}</h2>
      <p className="mt-[1rem] w-[37.125rem]">{description}</p>
    </div>
  </div>
);
