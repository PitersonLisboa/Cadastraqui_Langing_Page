import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import admin1 from "@assets/generated_images/School_administrator_portrait_cbf4a6ab.png";
import admin2 from "@assets/generated_images/University_administrator_portrait_5f1a3b36.png";

export function CaseStudies() {
  const cases = [
    {
      institution: "Colégio Santa Maria",
      type: "Ensino Fundamental e Médio",
      logo: "CSM",
      admin: "Maria Oliveira",
      role: "Diretora Administrativa",
      photo: admin1,
      quote: "Reduzimos 70% do tempo gasto com análise de documentos. O processo que levava semanas agora é concluído em dias, com muito mais segurança e rastreabilidade.",
      metrics: [
        { value: "70%", label: "Redução de Tempo" },
        { value: "Zero", label: "Não-conformidades" },
        { value: "500", label: "Bolsistas Gerenciados" },
      ],
    },
    {
      institution: "Universidade Comunitária",
      type: "Ensino Superior",
      logo: "UC",
      admin: "Carlos Santos",
      role: "Coordenador de Bolsas",
      photo: admin2,
      quote: "A plataforma transformou nossa gestão CEBAS. Passamos em todas as auditorias sem estresse, com documentação sempre organizada e acessível. Suporte técnico impecável.",
      metrics: [
        { value: "2.500", label: "Bolsistas Ativos" },
        { value: "100%", label: "Aprovação Auditoria" },
        { value: "15 dias", label: "Implementação" },
      ],
    },
  ];

  return (
    <section id="casos" className="py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Casos de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Instituições de ensino de todo o Brasil confiam no Cadastraqui para gestão CEBAS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-8" data-testid={`case-study-${index}`}>
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                    {caseStudy.logo}
                  </div>
                  <div>
                    <div className="font-semibold">{caseStudy.institution}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.type}</div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-foreground/80 leading-relaxed pl-6 italic">
                    "{caseStudy.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <img
                    src={caseStudy.photo}
                    alt={caseStudy.admin}
                    className="h-12 w-12 rounded-full object-cover"
                    data-testid={`img-admin-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-sm">{caseStudy.admin}</div>
                    <div className="text-xs text-muted-foreground">{caseStudy.role}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
