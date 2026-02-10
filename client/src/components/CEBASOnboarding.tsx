import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsAppMessage } from "@/lib/utils";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export function CEBASOnboarding() {
  const steps = [
    {
      icon: FileCheck,
      title: "Análise Documental",
      description:
        "Revisamos toda sua documentação e identificamos o que está faltando",
    },
    {
      icon: ClipboardCheck,
      title: "Organização Completa",
      description: "Organizamos todos os documentos conforme exigências do MEC",
    },
    {
      icon: Building2,
      title: "Requerimento CEBAS MEC",
      description:
        "Serviço de orientação sobre o processo de concessão e renovação de CEBAS",
    },
    {
      icon: TrendingUp,
      title: "Benefícios Fiscais",
      description:
        "Sua instituição passa a usufruir de imunidade de Contribuições para Seguridade Social",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-4">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-semibold">
                Ainda não tem CEBAS?
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Não se Preocupe, o Cadastraqui Está Aqui Para Ajudar!
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Sua instituição ainda não possui o CEBAS? Esta é sua oportunidade
              de começar a usufruir de{" "}
              <span className="font-bold text-accent">
                todos os benefícios fiscais
              </span>{" "}
              de forma organizada e eficiente.
            </p>

            <Card className="p-8 bg-accent/5 border-accent/20 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Organizamos Toda Documentação do Processo Seletivo por ser
                    exigência do CEBAS Educação
                  </h3>
                  <p className="text-muted-foreground">
                    Do zero ao CEBAS: podemos cuidar de cada etapa do processo
                    para que você possa focar no que importa - educar com
                    excelência.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate"
                data-testid={`onboarding-step-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        Etapa {index + 1}
                      </Badge>
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="text-center">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                🎯 Comece Hoje Mesmo a Economizar com Benefícios Fiscais
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Imunidade de Cota Patronal, Cofins, PIS/PASEP, IPVA*, IPTU** e
                muito mais. Transforme sua instituição em uma entidade
                beneficente certificada.
              </p>
              <p className="text-primary-foreground/80 text-sm mb-6">
                *Conforme regramento estadual. **De acordo com a legislação
                municipal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 h-14 px-8"
                  data-testid="button-consulta-cebas"
                >
                  <Building2 className="h-5 w-5 mr-2" />
                  Solicitar Consultoria CEBAS
                </Button> */}
                <Button
                  size="lg"
                  variant="outline"
                  // className="border-white/30 text-white hover:bg-white/10 h-14 px-8"
                  className="bg-white text-primary hover:bg-white/90 h-14 px-8"
                  data-testid="button-saiba-mais"
                  onClick={() => whatsAppMessage({ type: "seller" })}
                >
                  Saiba Como Funciona
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              ✨ Processo 100% acompanhado por especialistas em compliance CEBAS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
