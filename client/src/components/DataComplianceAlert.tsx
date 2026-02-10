import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsAppMessage } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  Eye,
  RefreshCw,
  Shield,
  TrendingDown,
  XCircle,
} from "lucide-react";

export function DataComplianceAlert() {
  const risks = [
    {
      icon: XCircle,
      title: "Perda do Certificado CEBAS",
      description: "Dados desatualizados podem resultar em cassação imediata",
    },
    {
      icon: TrendingDown,
      title: "Perda de Imunidades Fiscais",
      description: "Milhões em tributos voltam a ser cobrados retroativamente",
    },
    {
      icon: AlertTriangle,
      title: "Auditoria Reprovada",
      description: "Inconsistências nos dados levam à reprovação em auditorias",
    },
  ];

  const solutions = [
    {
      icon: Database,
      title: "Coleta Automatizada",
      description:
        "Sistema coleta dados periodicamente de forma automática e segura",
      highlight: true,
    },
    {
      icon: CheckCircle2,
      title: "Checagem Contínua",
      description:
        "Validação automática de documentos e informações em tempo real",
      highlight: true,
    },
    {
      icon: RefreshCw,
      title: "Atualização Regular",
      description:
        "Dados atualizados mensalmente mantendo perfil socioeconômico preciso",
      highlight: true,
    },
    {
      icon: Eye,
      title: "Acesso Governamental",
      description: "Informações prontas para consulta e verificação por MEC",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-destructive/5">
      <div className="container mx-auto px-6 md:px-8">
        {/* Alerta de Risco */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8 border-destructive/30 bg-destructive/5">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/20 flex-shrink-0">
                <AlertTriangle className="h-7 w-7 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="destructive" className="text-xs">
                    ATENÇÃO CRÍTICA
                  </Badge>
                  <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Dados Desatualizados = Risco de Perder o CEBAS
                  </h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A falta de conformidade nos dados pode resultar na{" "}
                  <strong>cassação do certificado CEBAS</strong>, fazendo sua
                  instituição perder as imunidades de Contribuições Sociais e
                  ainda ter que pagar tributos atrasados. É fundamental manter
                  informações{" "}
                  <strong>precisas, atualizadas e auditáveis</strong> o tempo
                  todo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {risks.map((risk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg border border-destructive/20"
                >
                  <risk.icon className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm mb-1">
                      {risk.title}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {risk.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Solução Cadastraqui */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-4">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-semibold">Solução Cadastraqui</span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Garantia de Conformidade Contínua
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O Cadastraqui mantém seus dados{" "}
              <strong>sempre atualizados, verificados e prontos</strong>
              para consulta pelos órgãos governamentais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate border-accent/20"
                data-testid={`solution-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <solution.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{solution.title}</h3>
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Card de Destaque - Processo */}
          <Card className="p-8 bg-accent/5 border-accent/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-4">
                  <Database className="h-8 w-8 text-accent" />
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Coleta Mensal Automática
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sistema solicita atualização de renda, despesas e documentos
                  automaticamente todo mês
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Validação em Tempo Real
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cada dado é validado instantaneamente contra critérios CEBAS
                  para garantir conformidade
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-4">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Pronto para Auditoria
                </h3>
                <p className="text-sm text-muted-foreground">
                  Relatórios e documentação sempre disponíveis para ser
                  analisada pelo MEC ou auditores
                </p>
              </div>
            </div>
          </Card>

          {/* CTA Final */}
          <div className="mt-8 text-center">
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                ✅ Nunca Mais Se Preocupe com Dados Desatualizados
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg max-w-2xl mx-auto">
                Com o Cadastraqui, você tem a tranquilidade de saber que todos
                os dados estão
                <strong> sempre conformes, auditáveis e prontos</strong> para
                verificação governamental.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 h-14 px-8"
                data-testid="button-garantir-conformidade"
                onClick={() => whatsAppMessage({ type: "seller" })}
              >
                <Shield className="h-5 w-5 mr-2" />
                Garantir Conformidade Agora
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
