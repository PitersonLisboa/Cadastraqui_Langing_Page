import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whatsAppMessage } from "@/lib/utils";
import candidateFormImage from "@assets/Screenshot 2025-11-02 172410_1762115072131.png";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Database,
  FileCheck,
  Link2,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

export function AISelectionProcess() {
  const processSteps = [
    {
      icon: Users,
      number: "01",
      title: "Captação de Candidatos",
      description:
        "Editais publicados e candidatos se inscrevem online preenchendo formulário completo",
    },
    {
      icon: FileCheck,
      number: "02",
      title: "Validação Automatizada",
      description:
        "Sistema valida documentos, CPF, RG e cruza informações com bases governamentais",
    },
    {
      icon: Brain,
      number: "03",
      title: "IA Classifica Candidatos",
      description:
        "Inteligência Artificial analisa perfil socioeconômico conforme Lei Complementar nº 187/2021 e critérios do edital",
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Seleção Automática",
      description:
        "Sistema ranqueia e seleciona automaticamente os candidatos mais elegíveis",
    },
    {
      icon: Link2,
      number: "05",
      title: "Integração Instantânea",
      description:
        "Candidatos aprovados são automaticamente inseridos no sistema de gestão de alunos",
    },
  ];

  const validationFeatures = [
    { label: "Validação de CPF/RG", icon: Shield },
    { label: "Cruzamento CadÚnico", icon: Database },
    { label: "Verificação de Renda", icon: FileCheck },
    { label: "Análise Documental", icon: FileCheck },
    { label: "Score Socioeconômico", icon: Brain },
    { label: "Conformidade Legal", icon: Shield },
  ];

  const governanceFeatures = [
    {
      title: "Controle de Frequência",
      description: "Registro automático de presença e faltas",
    },
    {
      title: "Gestão de Notas",
      description: "Lançamento e acompanhamento de desempenho acadêmico",
    },
    {
      title: "Controle de Acesso",
      description: "Gerenciamento de permissões e entrada na instituição",
    },
    {
      title: "Histórico Escolar",
      description: "Registro completo de vida acadêmica do aluno",
    },
    {
      title: "Comunicação com Responsáveis",
      description: "Notificações automáticas e avisos importantes",
    },
    {
      title: "Gestão Financeira",
      description: "Controle de mensalidades, bolsas e pagamentos",
    },
    {
      title: "Biblioteca e Recursos",
      description: "Empréstimos, reservas e material didático",
    },
    {
      title: "Relatórios Gerenciais",
      description: "Dashboards completos para gestão institucional",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Header Principal */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Tecnologia de Ponta</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Seleção Inteligente de Bolsistas com Inteligência Artificial
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Do cadastro à matrícula: <strong>processo 100% automatizado</strong>{" "}
            que organiza documentações, valida dados com bases governamentais e
            usa <strong>IA para classificar candidatos</strong> conforme a
            legislação CEBAS e especificidades de cada edital.
          </p>
        </div>

        {/* Processo em 5 Etapas */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card
                  className="p-6 h-full hover-elevate"
                  data-testid={`process-step-${index}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className="text-xs font-bold bg-primary">
                        {step.number}
                      </Badge>
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Validação com IA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge className="mb-4 bg-accent">
              <Brain className="h-3 w-3 mr-1" />
              Inteligência Artificial
            </Badge>
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Validação Inteligente de Candidatos
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa <strong>Inteligência Artificial</strong> analisa
              automaticamente cada candidato, cruzando informações com bancos de
              dados oficiais (CadÚnico, Receita Federal) e classificando
              conforme os critérios da{" "}
              <strong>Lei Complementar nº 187/2021</strong> e da{" "}
              <strong>Portaria 15/2017</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {validationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-accent/5 rounded-lg border border-accent/20"
                >
                  <feature.icon className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Resultado Instantâneo</h4>
                  <p className="text-sm text-muted-foreground">
                    Em segundos, o sistema processa centenas de inscrições,
                    valida documentos e gera ranking automaticamente - tudo em
                    conformidade com a legislação.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-0 overflow-hidden">
            <img
              src={candidateFormImage}
              alt="Edital Cadastraqui mostrando taxa de conversão de candidatos interessados em inscritos com gráfico de desempenho e lista de assistentes sociais"
              className="w-full h-auto"
              data-testid="img-candidate-form"
            />
          </Card>
        </div>

        {/* Integração Automática */}
        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                    <Link2 className="h-7 w-7 text-accent" />
                  </div>
                  <Badge className="bg-accent">Automação Total</Badge>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Integração Automática com Sistema de Gestão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Assim que os candidatos são selecionados e efetivados, o
                  Cadastraqui
                  <strong> insere automaticamente todos os dados</strong> no seu
                  sistema de gerência de alunos. Sem digitação manual, sem
                  erros, sem retrabalho.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">
                    100%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Automatizado
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">
                    Zero
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Erros Manuais
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">95%</div>
                  <div className="text-xs text-muted-foreground">
                    Tempo Economizado
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">
                    Real-Time
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Sincronização
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Governança de Alunos */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Solução Completa
            </Badge>
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Governança Completa de Alunos
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O Cadastraqui vai além da seleção: é também sua{" "}
              <strong>ferramenta completa de gestão acadêmica</strong>,
              centralizando todas as informações e processos dos seus alunos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {governanceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-5 hover-elevate"
                data-testid={`governance-${index}`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Final */}
          <Card className="mt-12 p-8 bg-primary text-primary-foreground">
            <div className="text-center">
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                🚀 Transforme a Gestão da Sua Instituição
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg max-w-2xl mx-auto">
                Da seleção de bolsistas à governança completa:{" "}
                <strong>tudo em uma única plataforma</strong>
                inteligente, automatizada e 100% conforme a legislação CEBAS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 h-14 px-8"
                  data-testid="button-demonstracao"
                  onClick={() => whatsAppMessage({ type: "demo" })}
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Agendar Demonstração
                </Button>
                {/* <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 h-14 px-8"
                  data-testid="button-conhecer-ia"
                >
                  <Brain className="h-5 w-5 mr-2" />
                  Conhecer a IA
                </Button> */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
