import { Card } from "@/components/ui/card";
import { Receipt, DollarSign, Building2, Car, Home, Users } from "lucide-react";

export function BenefitsCEBAS() {
  const benefits = [
    {
      icon: Receipt,
      title: "Cota Patronal",
      description: "Imunidade de contribuição patronal ao INSS",
    },
    {
      icon: DollarSign,
      title: "Cofins",
      description: "Imunidade da Contribuição para o Financiamento da Seguridade Social",
    },
    {
      icon: Building2,
      title: "PIS/PASEP",
      description: "Imunidade do PIS sobre folha de pagamento",
    },
    {
      icon: Car,
      title: "IPVA",
      description: "Imunidade do Imposto sobre Veículos Automotores*",
    },
    {
      icon: Home,
      title: "IPTU",
      description: "Imunidade do Imposto Predial Territorial Urbano**",
    },
    {
      icon: Users,
      title: "Terceiros",
      description: "Imunidade de contribuições devidas a terceiros",
    },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Principais Benefícios do CEBAS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Obtenha e mantenha o Certificado de Entidade Beneficente de Assistência Social 
            para garantir importantes imunidades fiscais à sua instituição
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`benefit-${index}`}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-2">{benefit.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Base Legal: Lei Complementar nº 187/2021 | Decreto nº 11.791/2023 | Portaria nº 15/2017
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            *Conforme regramento estadual. **De acordo com a legislação municipal.
          </p>
        </div>
      </div>
    </section>
  );
}
