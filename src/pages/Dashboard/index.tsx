import Router from "next/router";
import { Button } from "../../components/atom/Button";
import { Trash } from "../../components/atom/SVG";
import { Header } from "../../components/organism/Header";
import { TemplateContainer } from "../../components/templates";
import { Card } from "./components/Card";

export const Dashboard = () => {
  const array = [
    { id: "0", title: "Netflix", category: "streaming", price: "R$ 39.90" },
    { id: "1", title: "Amazon", category: "streaming", price: "R$ 9.90" },
    { id: "2", title: "Internet", category: "serviços", price: "R$ 79.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
    { id: "3", title: "Spotify", category: "streaming", price: "R$ 9.90" },
  ];

  return (
    <TemplateContainer>
      <Header />
      <main className="w-full max-w-screen-lg h-3/4 p-4 bg-slate-100 overflow-y-auto grid grid-cols-3 content-start gap-4">
        {array?.map((item) => (
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
