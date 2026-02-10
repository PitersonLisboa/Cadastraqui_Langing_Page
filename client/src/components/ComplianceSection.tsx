import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComplianceDashboard } from "@/components/ComplianceDashboard";
import { Shield, FileText, Database, Clock, CheckCircle } from "lucide-react";
import dashboardImage from "@assets/image_1762112912184.png";

export function ComplianceSection() {
  const complianceItems = [
    { icon: FileText, label: "Lei Complementar nº 187/2021", description: "Certificação CEBAS" },
    { icon: Shield, label: "Portaria 15/2017", description: "Normas MEC" },
    { icon: Database, label: "LGPD", description: "Proteção de Dados" },
    { icon: Clock, label: "Trilha de Auditoria", description: "Logs completos" },
    { icon: CheckCircle, label: "Integração MEC", description: "Envio automático" },
  ];

  return (
    <section id="compliance" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <Badge className="mb-4" variant="outline">
              Compliance Garantido
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Conformidade Garantida com Legislação CEBAS
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa plataforma é desenvolvida em parceria com especialistas jurídicos 
              para garantir conformidade total com todas as exigências legais e regulamentações 
              do CEBAS. Reduza riscos e foque no que importa: educar.
            </p>

            <div className="space-y-4 mb-8">
              {complianceItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`compliance-item-${index}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" variant="outline" data-testid="button-documentacao">
              <FileText className="h-5 w-5 mr-2" />
              Documentação Legal Completa
            </Button>
          </div>

          <div>
            <Card className="p-6 mb-4">
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Dashboard de Compliance em Tempo Real
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize todos os indicadores de conformidade da sua instituição
              </p>
            </Card>
            
            <Card className="p-0 overflow-hidden mb-4">
              <img 
                src={dashboardImage} 
                alt="Dashboard Cadastraqui mostrando editais abertos, vagas disponíveis, distribuição de inscritos e candidatos interessados"
                className="w-full h-auto"
                data-testid="img-dashboard"
              />
            </Card>

            <ComplianceDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
