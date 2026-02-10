import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Brazilian_students_studying_together_8faee48f.png";

export function HeroScholarship() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Sua Bolsa de Estudos CEBAS Começa Aqui
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Conquiste seu futuro com bolsas de estudo de até 100%. 
            Cadastre-se gratuitamente e descubra as oportunidades disponíveis para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg rounded-full font-semibold shadow-lg"
              data-testid="button-buscar-bolsas"
            >
              Buscar Bolsas Disponíveis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg rounded-full font-semibold bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              data-testid="button-saiba-mais"
            >
              Saiba Mais
            </Button>
          </div>

          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <span className="text-sm md:text-base font-medium">
              Mais de 10.000 estudantes já cadastrados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
