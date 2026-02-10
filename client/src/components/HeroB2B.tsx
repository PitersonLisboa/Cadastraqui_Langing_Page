import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { whatsAppMessage } from "@/lib/utils";
import dashboardImage from "@assets/image_1762114303218.png";
import { CheckCircle2 } from "lucide-react";

export function HeroB2B() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6" variant="outline" data-testid="badge-hero">
              Plataforma Líder em Compliance CEBAS
            </Badge>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Automatize Gestão CEBAS
              <br />e Garanta Conformidade Legal
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Sistema completo para seleção de candidatos e governança de
              bolsistas. 100% alinhado com a Lei Complementar nº 187/2021 e
              Portaria 15/2017. Reduza tempo, elimine riscos e mantenha
              auditoria sempre pronta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="h-14 px-8 text-lg"
                data-testid="button-agendar-demo"
                onClick={() => whatsAppMessage({ type: "demo" })}
              >
                Agendar Demonstração
              </Button>
              {/* <Button size="lg" variant="outline" className="h-14 px-8 text-lg" data-testid="button-ver-plataforma">
                <Play className="h-5 w-5 mr-2" />
                Ver Plataforma
              </Button> */}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>
                  Implantação rápida e automatizada. Treinamento incluído.
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>100+ instituições parceiras</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Conformidade 100% com LGPD</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border">
              <img
                src={dashboardImage}
                alt="Formulário de cadastro Cadastraqui mostrando dados pessoais, CPF, data de nascimento, telefone e email"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
