import tw from "tailwind-styled-components";
import { Button } from "../../../../components/atom/Button";
import { Edit, Trash } from "../../../../components/atom/SVG";

export const Card = ({ title, category, price }) => {
  return (
    <CardContainer>
      <main className="p-4 flex flex-col justify-between">
        <h2 className="font-bold text-base">{title}</h2>
        <p className="px-4 py-2 text-slate-600 text-xs bg-slate-100 self-start mb-2 rounded-full">
          {category}
        </p>
        <p className="text-sm font-medium">{price}</p>
      </main>
      <footer className="w-12">
        <Button
          className="min-w-full bg-red-100 hover:bg-red-200 text-red-700"
          variant="svg"
        >
          <Trash />
        </Button>
        <Button
          className="min-w-full bg-sky-100 hover:bg-sky-200 text-sky-700"
          variant="svg"
        >
          <Edit />
        </Button>
      </footer>
    </CardContainer>
  );
};

export const CardContainer = tw.article`
bg-white shadow-md h-32 flex justify-between gap-2
`;
