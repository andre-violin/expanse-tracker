import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="bg-slate-600 text-white h-10 font-bold hover:bg-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
    >
      {children}
    </button>
  );
};
