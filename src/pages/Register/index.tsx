import { Button } from "../../components/atom/Button";
import { InputText } from "../../components/molecules/InputText";
import { Link } from "../../components/molecules/Link";
import { SidebarHero } from "../../components/organism/SidebarHero";
import {
  TemplateContainer,
  TemplateContent,
  TemplateMainHeroSection,
} from "../../components/templates";

import heroImage from "../../../public/assets/hero-register.svg";

export const Register = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SidebarHero src={heroImage} />
        <TemplateMainHeroSection>
          <h1 className="font-bold text-3xl">Crie sua conta</h1>
          <form className="w-full md:w-5/12 flex flex-col gap-4">
            <InputText id="email" label="E-mail" type="email" />
            <InputText id="password" label="Senha" type="password" />
            <Button>Criar Conta</Button>
          </form>
          <Link href="/">Já tenho uma conta.</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  );
};
