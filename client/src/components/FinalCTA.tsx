import { Button } from "@/components/ui/button";
import { whatsAppMessage } from "@/lib/utils";
import { Calendar, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Pronto Para Transformar Sua Gestão CEBAS?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Junte-se a centenas de instituições que já automatizaram seus
          processos e garantiram conformidade total. Agende uma demonstração
          personalizada sem compromisso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90"
            data-testid="button-demo-final"
            onClick={() => whatsAppMessage({ type: "demo" })}
          >
            <Calendar className="h-5 w-5 mr-2" />
            Demonstração Gratuita
          </Button>
          {/* <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-guia"
          >
            <FileDown className="h-5 w-5 mr-2" />
            Baixar Guia Compliance
          </Button> */}
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>Implantação rápida e automatizada</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>Suporte dedicado</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>Treinamento incluído</span>
          </div>
        </div>
      </div>
    </section>
  );
}
