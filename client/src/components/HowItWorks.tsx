import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, FileText, Search, Award } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cadastre-se",
      description: "Crie sua conta gratuita em menos de 5 minutos",
      icon: UserPlus,
    },
    {
      number: "02",
      title: "Preencha Documentos",
      description: "Envie os documentos necessários de forma simples e segura",
      icon: FileText,
    },
    {
      number: "03",
      title: "Análise de Elegibilidade",
      description: "Nossa equipe analisa seu perfil e verifica as bolsas disponíveis",
      icon: Search,
    },
    {
      number: "04",
      title: "Receba Sua Bolsa",
      description: "Seja aprovado e comece seus estudos com desconto garantido",
      icon: Award,
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido para você conseguir sua bolsa de estudos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-[60%] w-full h-0.5 bg-primary/20 -z-10" />
              )}
              <Card className="hover-elevate h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-5xl font-bold text-primary/20" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
