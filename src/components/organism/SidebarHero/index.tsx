import Image from "next/image";
import { SourceHTMLAttributes } from "react";

interface Props extends SourceHTMLAttributes<HTMLSourceElement> {
  src: string;
}

export const SidebarHero = ({ src }: Props) => {
  return (
    <div className="flex justify-center items-center bg-slate-300">
      <Image
        alt="Hero image"
        src={src}
        layout="intrinsic"
        width={700}
        height={700}
        blurDataURL={src}
        placeholder="blur"
      />
    </div>
  );
};
