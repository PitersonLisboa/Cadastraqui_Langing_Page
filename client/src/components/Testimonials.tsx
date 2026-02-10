import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import student1 from "@assets/generated_images/Student_testimonial_portrait_1_a20e7dfa.png";
import student2 from "@assets/generated_images/Student_testimonial_portrait_2_8ef4ceee.png";
import student3 from "@assets/generated_images/Student_testimonial_portrait_3_6c54f2e1.png";

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      course: "Administração",
      institution: "Universidade Federal",
      photo: student1,
      quote: "Consegui uma bolsa de 100% através da plataforma. Foi muito fácil e rápido. Hoje estou realizando meu sonho de fazer faculdade!",
      rating: 5,
    },
    {
      name: "João Santos",
      course: "Engenharia Civil",
      institution: "Faculdade Estadual",
      photo: student2,
      quote: "O processo foi totalmente transparente e o suporte foi excelente. Minha bolsa de 70% fez toda a diferença para minha família.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      course: "Pedagogia",
      institution: "Centro Universitário",
      photo: student3,
      quote: "Nunca pensei que conseguiria fazer ensino superior. Com a bolsa CEBAS, estou no 3º semestre e muito feliz com minha escolha!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Histórias de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como outros estudantes transformaram suas vidas com as bolsas CEBAS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="h-20 w-20 rounded-full object-cover border-4 border-primary/10"
                    data-testid={`img-student-${index}`}
                  />
                </div>
                
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="text-center">
                  <div className="font-semibold" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.course}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.institution}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
