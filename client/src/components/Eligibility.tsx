import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function Eligibility() {
  const leftCriteria = [
    "Renda familiar per capita de até 1,5 salário mínimo",
    "Documentos de comprovação de renda atualizados",
    "CPF e RG de todos os membros da família",
    "Comprovante de residência atualizado",
  ];

  const rightCriteria = [
    "Histórico escolar do ensino médio",
    "Certificado de conclusão ou declaração escolar",
    "Carta de apresentação (opcional)",
    "Disponibilidade para início das aulas",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Critérios de Elegibilidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verifique se você atende aos requisitos para solicitar sua bolsa de estudos
          </p>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Requisitos Financeiros
                </h3>
                <ul className="space-y-4">
                  {leftCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`criteria-financial-${index}`}>
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Requisitos Acadêmicos
                </h3>
                <ul className="space-y-4">
                  {rightCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`criteria-academic-${index}`}>
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg" data-testid="button-verificar-elegibilidade">
                Verificar Minha Elegibilidade
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
