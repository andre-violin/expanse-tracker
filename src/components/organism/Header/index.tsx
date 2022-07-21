import Router from "next/router";
import { Button } from "../../atom/Button";

export const Header = () => {
  const handleNavigateToAddNewExpense = () => {
    Router.push("/dashboard/add");
  };
  return (
    <header className="w-full max-w-screen-lg flex justify-between items-center h-32">
      <span className="font-bold text-2xl">Expense Tracker</span>
      <nav className="flex gap-4">
        <Button onClick={handleNavigateToAddNewExpense}>
          Adicionar Nova Conta
        </Button>
        <Button variant="ghost">Sair</Button>
      </nav>
    </header>
  );
};
