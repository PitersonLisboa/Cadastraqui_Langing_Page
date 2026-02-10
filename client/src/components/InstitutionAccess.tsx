import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, ArrowRight, GraduationCap } from "lucide-react";

/**
 * Instituições parceiras cadastradas na plataforma.
 * Cada entrada gera um card com botão de acesso direto ao portal do tenant.
 * 
 * Para adicionar uma nova instituição, basta adicionar um objeto ao array.
 * O `slug` deve corresponder ao slug cadastrado no backend (tabela tenants).
 */
const institutions = [
  {
    slug: "PUCMinas",
    name: "PUC Minas",
    fullName: "Pontifícia Universidade Católica de Minas Gerais",
    city: "Belo Horizonte",
    state: "MG",
    initials: "PUC",
    color: "#1a237e",      // Azul marinho
    colorLight: "#e8eaf6",
    description: "Programa de Bolsas CEBAS para graduação e pós-graduação",
    active: true,
  },
  {
    slug: "Metodista",
    name: "Universidade Metodista",
    fullName: "Universidade Metodista de São Paulo",
    city: "São Bernardo do Campo",
    state: "SP",
    initials: "MET",
    color: "#1b5e20",      // Verde escuro
    colorLight: "#e8f5e9",
    description: "Programa de Bolsas CEBAS para ensino superior",
    active: true,
  },
];

export function InstitutionAccess() {
  const portalBaseUrl = import.meta.env.VITE_PORTAL_URL || "";

  const handleAccess = (slug: string) => {
    // Se VITE_PORTAL_URL está configurado, usa ele como base
    // Caso contrário, assume que é relativo (mesma origin)
    if (portalBaseUrl) {
      window.open(`${portalBaseUrl}/${slug}/login`, "_blank");
    } else {
      window.location.href = `/${slug}/login`;
    }
  };

  return (
    <section id="instituicoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <GraduationCap className="h-3.5 w-3.5 mr-1.5" />
            Instituições Parceiras
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Acesse Sua Instituição
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione sua instituição de ensino para acessar o portal de bolsas
            e iniciar seu processo de candidatura
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {institutions.filter(i => i.active).map((inst) => (
            <Card
              key={inst.slug}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30"
              onClick={() => handleAccess(inst.slug)}
              data-testid={`institution-card-${inst.slug}`}
            >
              <CardContent className="p-0">
                {/* Color bar no topo */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: inst.color }}
                />

                <div className="p-6">
                  {/* Logo + Info */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Initials badge como "logo" */}
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

                  {/* Descrição */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {inst.description}
                  </p>

                  {/* CTA */}
                  <Button
                    className="w-full h-12 text-base font-semibold group/btn"
                    style={{
                      backgroundColor: inst.color,
                      borderColor: inst.color,
                    }}
                    data-testid={`button-access-${inst.slug}`}
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

        {/* Footnote */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Sua instituição não está listada?{" "}
          <a
            href="#precos"
            className="text-primary font-medium hover:underline"
          >
            Entre em contato
          </a>{" "}
          para conhecer o Cadastraqui.
        </p>
      </div>
    </section>
  );
}
