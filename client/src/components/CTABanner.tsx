import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Não Perca Esta Oportunidade
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          As vagas para bolsas CEBAS são limitadas e preenchidas rapidamente. 
          Cadastre-se agora e garanta seu futuro!
        </p>
        
        <Button 
          size="lg" 
          className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-white/90 font-semibold shadow-xl"
          data-testid="button-iniciar-cadastro"
        >
          Iniciar Cadastro Agora
        </Button>
        
        <div className="mt-6 flex items-center justify-center gap-2 text-white/80">
          <Clock className="h-4 w-4" />
          <span className="text-sm">Processo simples e rápido - apenas 5 minutos</span>
        </div>
      </div>
    </section>
  );
}
