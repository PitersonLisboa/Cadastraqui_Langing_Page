import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  ArrowRight,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";
import logoImage from "@assets/logo.png";

const institutions = [
  {
    slug: "PUCMinas",
    name: "PUC Minas",
    fullName: "Pontifícia Universidade Católica de Minas Gerais",
    city: "Belo Horizonte",
    state: "MG",
    initials: "PUC",
    color: "#1a237e",
    description: "Programa de Bolsas CEBAS para graduação e pós-graduação",
  },
  {
    slug: "Metodista",
    name: "Universidade Metodista",
    fullName: "Universidade Metodista de São Paulo",
    city: "São Bernardo do Campo",
    state: "SP",
    initials: "MET",
    color: "#1b5e20",
    description: "Programa de Bolsas CEBAS para ensino superior",
  },
];

export default function Plataforma() {
  const portalBaseUrl = import.meta.env.VITE_PORTAL_URL || "";

  const handleAccess = (slug: string) => {
    if (portalBaseUrl) {
      window.open(`${portalBaseUrl}/${slug}/login`, "_blank");
    } else {
      window.location.href = `/${slug}/login`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      {/* Header limpo — logo centralizado + botão voltar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
          {/* Spacer esquerdo para balancear o layout */}
          <div className="w-[160px] hidden md:block" />

          {/* Logo centralizado */}
          <a href="/" className="flex items-center">
            <img
              src={logoImage}
              alt="Cadastraqui Logo"
              className="h-60 w-60 object-contain"
            />
          </a>

          {/* Botão voltar */}
          <a href="/">
            <Button variant="default" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar ao início</span>
              <span className="sm:hidden">Voltar</span>
            </Button>
          </a>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 md:px-8">
        <Badge className="mb-4" variant="outline">
          <GraduationCap className="h-3.5 w-3.5 mr-1.5" />
          Instituições Parceiras
        </Badge>

        <h1
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Acesse Sua Instituição
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-center mb-10">
          Selecione sua instituição de ensino para acessar o portal de bolsas e
          iniciar seu processo de candidatura
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-10">
          {institutions.map((inst) => (
            <Card
              key={inst.slug}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30"
              onClick={() => handleAccess(inst.slug)}
            >
              <CardContent className="p-0">
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: inst.color }}
                />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl font-bold text-xl text-white shadow-md transition-transform group-hover:scale-105"
                      style={{ backgroundColor: inst.color }}
                    >
                      {inst.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-xl font-bold truncate"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {inst.name}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {inst.fullName}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>
                          {inst.city}, {inst.state}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {inst.description}
                  </p>

                  <Button
                    className="w-full h-12 text-base font-semibold group/btn"
                    style={{
                      backgroundColor: inst.color,
                      borderColor: inst.color,
                    }}
                  >
                    <Building2 className="h-4.5 w-4.5 mr-2" />
                    Acessar Portal
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Sua instituição não está listada?{" "}
          <a href="/#precos" className="text-primary font-medium hover:underline">
            Entre em contato
          </a>{" "}
          para conhecer o Cadastraqui.
        </p>
      </main>
    </div>
  );
}
