import { Card, CardContent } from "@/components/ui/card";
import { School, Users, DollarSign, TrendingUp } from "lucide-react";

export function AboutCEBAS() {
  const stats = [
    { icon: School, value: "100+", label: "Escolas Parceiras" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Aprovação" },
    { icon: DollarSign, value: "R$ 50M+", label: "Em Bolsas Concedidas" },
    { icon: Users, value: "25 mil", label: "Estudantes Beneficiados" },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              Sobre o CEBAS
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              O Certificado de Entidades Beneficentes de Assistência Social (CEBAS) é um 
              programa governamental que permite que instituições de ensino ofereçam bolsas 
              de estudo para estudantes de baixa renda.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Através da nossa plataforma, facilitamos o acesso dessas bolsas, conectando 
              estudantes qualificados com as melhores oportunidades educacionais disponíveis.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nossa missão é democratizar o acesso à educação de qualidade, garantindo que 
              todos tenham a chance de alcançar seus objetivos acadêmicos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-elevate" data-testid={`stat-card-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
