import { Button } from "../../components/atom/Button";
import { InputText } from "../../components/molecules/InputText";
import { Link } from "../../components/molecules/Link";
import { SidebarHero } from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";

import heroImage from "../../../public/assets/hero-login.svg";
import { Header } from "../../components/organism/Header";

export const DashboardAdd = () => {
  return (
    <TemplateContainer>
      <Header />
      <TemplateContent>
        <SidebarHero src={heroImage} />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Adicionar nova despesa</h1>
          <form className="w-full md:w-5/12 flex flex-col gap-4">
            <InputText id="expense" label="Despesa" type="text" />
            <InputText id="category" label="Categoria" type="text" />
            <InputText id="price" label="Valor" type="number" step="0.01" />
            <Button>Entrar</Button>
          </form>
          <Link href="/dashboard">Voltar</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};
