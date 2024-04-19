import { IPropsMocksCardBlog } from "@/interfaces";

export const CardBlog = ({
  title,
  paragraph_1,
  paragraph_2,
  text,
}: IPropsMocksCardBlog) => (
  <div className="bg-white p-5 mr-[5.75rem] rounded-[0.25rem] w-[26.125rem] h-[18.438rem]">
    <h2 className="text-[1.625rem] font-[700]">{title}</h2>
    <div className="flex justify-start mt-[1.063rem] mb-[0.688rem]">
      <span className="mr-[3rem]">{paragraph_1}</span>
      <span>{paragraph_2}</span>
    </div>
    <p>{text}</p>
  </div>
);
