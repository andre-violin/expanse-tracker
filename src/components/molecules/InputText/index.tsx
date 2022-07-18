import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const InputText = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id}>{label}</label>
      <input {...props} className="border border-slate-200 h-10 px-2" />
    </div>
  );
};
