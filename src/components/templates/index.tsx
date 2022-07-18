import tw from "tailwind-styled-components";

export const TemplateContainer = tw.div`
  w-screen h-screen flex justify-center
`;

export const TemplateContent = tw.div`
  w-full h-full grid grid-cols-2
`;

export const TemplateMainHeroSection = tw.main`
  w-full flex flex-col justify-center items-center gap-10 bg-slate-50 px-6
`;
