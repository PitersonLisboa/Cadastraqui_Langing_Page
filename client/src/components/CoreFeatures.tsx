import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Users2, FileCheck, Check } from "lucide-react";

export function CoreFeatures() {
  const features = [
    {
      icon: UserCheck,
      title: "Seleção Automatizada",
      points: [
        "Cadastro digital de candidatos com validação automática",
        "Análise de elegibilidade baseada em critérios CEBAS",
        "Triagem e pontuação automatizada de documentos",
        "Fluxo de aprovação com múltiplos revisores",
      ],
    },
    {
      icon: Users2,
      title: "Gestão de Bolsistas",
      points: [
        "Acompanhamento acadêmico e frequência em tempo real",
        "Renovação automática com verificação de critérios",
        "Portal do aluno com documentos e comunicações",
        "Gestão de vagas e distribuição por curso/campus",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Auditoria",
      points: [
        "Relatórios automáticos para MEC",
        "Trilha completa de auditoria com log de alterações",
        "Alertas de não-conformidade e prazos",
        "Armazenamento seguro de documentação legal",
      ],
    },
  ];

  return (
    <section id="recursos" className="py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Plataforma Completa para Gestão CEBAS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tudo que sua instituição precisa para gerenciar bolsas de estudo com eficiência, transparência e conformidade total
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover-elevate" data-testid={`feature-card-${index}`}>
              <CardHeader className="p-0 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
