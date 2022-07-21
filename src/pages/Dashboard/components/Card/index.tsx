import { Button } from "../../../../components/atom/Button";
import { Trash } from "../../../../components/atom/SVG";

export const Card = ({ title, category, price }) => {
  return (
    <article className="bg-white p-4 shadow-md h-40 relative flex flex-col justify-between gap-2">
      <Button
        className="absolute right-0 bottom-0 bg-red-800 hover:bg-red-700 text-red-50"
        variant="svg"
      >
        <Trash />
      </Button>
      <h2 className="font-bold text-base">{title}</h2>
      <p className="px-4 py-2 text-slate-600 text-xs bg-slate-100 self-start mb-2 rounded-full">
        {category}
      </p>
      <p className="text-sm font-medium">{price}</p>
    </article>
  );
};
