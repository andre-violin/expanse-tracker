import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost";
}

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <BaseButton {...props} variant={variant} className="">
      {children}
    </BaseButton>
  );
};

export const BaseButton = tw.button`
  h-10 px-8 font-bold disabled:cursor-not-allowed disabled:bg-slate-100
  ${({ variant }) => (variant === "ghost" ? Ghost : Main)}
`;

const Main = "bg-slate-600 hover:bg-slate-500 text-white";
const Ghost = "hover:bg-slate-200 text-slate-600";
