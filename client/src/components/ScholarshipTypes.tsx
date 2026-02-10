import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Check } from "lucide-react";

export function ScholarshipTypes() {
  const scholarships = [
    {
      title: "Bolsa Integral",
      percentage: "100%",
      benefits: [
        "Mensalidade totalmente coberta",
        "Material didático incluído",
        "Acesso completo à infraestrutura",
        "Sem custos adicionais",
      ],
    },
    {
      title: "Bolsa Parcial 70%",
      percentage: "70%",
      benefits: [
        "70% da mensalidade coberta",
        "Desconto em material didático",
        "Acesso à infraestrutura",
        "Renovação anual automática",
      ],
    },
    {
      title: "Bolsa Parcial 50%",
      percentage: "50%",
      benefits: [
        "50% da mensalidade coberta",
        "Processo seletivo simplificado",
        "Flexibilidade de cursos",
        "Suporte acadêmico",
      ],
    },
  ];

  return (
    <section id="bolsas" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Tipos de Bolsas Disponíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adequa à sua realidade e comece sua jornada educacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <Card key={index} className="hover-elevate" data-testid={`scholarship-card-${index}`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {scholarship.title}
                </CardTitle>
                <Badge className="text-lg py-1 px-4 rounded-full" data-testid={`badge-percentage-${index}`}>
                  {scholarship.percentage} de Cobertura
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {scholarship.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full" variant="outline" data-testid={`button-details-${index}`}>
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
