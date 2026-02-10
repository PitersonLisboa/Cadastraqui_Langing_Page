import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { whatsAppMessage } from "@/lib/utils";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Básico",
      badge: null,
      price: "R$ 2.000",
      period: "por mês",
      description: "Até 100 bolsistas incluídos",
      features: [
        "Até 100 bolsistas no perfil CEBAS",
        "R$ 8,00 por bolsista adicional",
        "Gestão completa de candidatos",
        "Aferição do perfil socioeconômico",
        "Relatórios para MEC",
        "Suporte por email",
        "Treinamento inicial incluído",
      ],
      cta: "Começar Agora",
      type: "plan-basic",
      highlighted: false,
    },
    {
      name: "Profissional",
      badge: "Mais Popular",
      price: "R$ 5.000",
      period: "por mês",
      description: "Até 500 bolsistas incluídos",
      features: [
        "Até 500 bolsistas no perfil CEBAS",
        "R$ 6,00 por bolsista adicional",
        "Ranqueamento automático",
        "Atualização periódica automática",
        "Parecer semi-preenchido",
        "Suporte prioritário",
        "Multi-campus",
        "Consultoria em compliance",
      ],
      cta: "Agendar Demonstração",
      type: "plan-pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      badge: null,
      price: "Entre em Contato",
      period: "Acima de 500 bolsistas",
      description: "Plano customizado para grandes instituições",
      features: [
        "Acima de 500 bolsistas",
        "Preço por bolsista negociável",
        "Multi-campus ilimitado",
        "Recursos personalizados",
        "SLA garantido",
        "Gerente de conta dedicado",
        "Integração customizada",
        "Consultoria jurídica",
      ],
      cta: "Falar com Vendas",
      type: "plan-enterprise",
      highlighted: false,
    },
  ];

  return (
    <section id="precos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Planos Transparentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o porte da sua instituição. Todos incluem
            conformidade CEBAS completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.highlighted ? "border-primary shadow-lg" : ""
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div>
                  <div
                    className="text-4xl font-bold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {plan.period}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  data-testid={`button-pricing-${index}`}
                  onClick={() => whatsAppMessage({ type: plan.type as any })}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos os planos incluem 30 dias de teste gratuito. Sem compromisso de
          longo prazo.
        </p>
      </div>
    </section>
  );
}
