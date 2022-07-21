import { Button } from "../../components/atom/Button";
import { Trash } from "../../components/atom/SVG";
import { TemplateContainer } from "../../components/templates";
import { Card } from "./components/Card";

export const Dashboard = () => {
  const array = [
    { id: "0", title: "Netflix", category: "streaming", price: "R$ 39.90" },
    { id: "1", title: "Amazon", category: "streaming", price: "R$ 9.90" },
    { id: "2", title: "Internet", category: "serviços", price: "R$ 79.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
  ];
  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-32">
        <span className="font-bold text-2xl">Expense Tracker</span>
        <nav className="flex gap-4">
          <Button>Adicionar Nova Conta</Button>
          <Button variant="ghost">Sair</Button>
        </nav>
      </header>
      <main className="w-full max-w-screen-lg h-3/4 p-4 bg-slate-100 overflow-y-scroll grid grid-cols-3 content-start gap-4">
        {array.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
          />
        ))}
      </main>
    </TemplateContainer>
  );
};
