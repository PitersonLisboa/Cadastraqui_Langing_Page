import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "O que é o CEBAS?",
      answer: "O Certificado de Entidades Beneficentes de Assistência Social (CEBAS) é um certificado concedido pelo governo federal a entidades que prestam serviços gratuitos em educação, saúde ou assistência social. Através dele, instituições de ensino podem oferecer bolsas de estudo para estudantes de baixa renda.",
    },
    {
      question: "Quem pode se candidatar às bolsas CEBAS?",
      answer: "Podem se candidatar estudantes com renda familiar per capita de até 1,5 salário mínimo, que atendam aos requisitos acadêmicos e documentais estabelecidos pela instituição de ensino parceira.",
    },
    {
      question: "Quanto tempo leva o processo de aprovação?",
      answer: "O processo de análise geralmente leva de 7 a 15 dias úteis após o envio completo da documentação. Você será notificado por email sobre o andamento da sua solicitação.",
    },
    {
      question: "Preciso pagar algo para me cadastrar?",
      answer: "Não! O cadastro na plataforma Cadastraqui é 100% gratuito. Não cobramos nenhuma taxa para intermediar sua solicitação de bolsa CEBAS.",
    },
    {
      question: "Posso escolher qualquer curso?",
      answer: "As bolsas CEBAS estão disponíveis para diversos cursos oferecidos pelas instituições parceiras. A disponibilidade varia de acordo com a instituição e o semestre letivo.",
    },
    {
      question: "A bolsa é renovada automaticamente?",
      answer: "Sim, a bolsa CEBAS é renovada semestralmente, desde que o estudante mantenha bom desempenho acadêmico e continue atendendo aos critérios de elegibilidade.",
    },
    {
      question: "Quais documentos preciso apresentar?",
      answer: "Você precisará de: RG e CPF, comprovante de residência, comprovante de renda familiar, histórico escolar do ensino médio e certificado de conclusão. Todos os documentos podem ser enviados digitalmente pela plataforma.",
    },
    {
      question: "Posso acumular a bolsa CEBAS com outras bolsas?",
      answer: "Depende do tipo de bolsa. Geralmente, bolsas integrais CEBAS não podem ser acumuladas com outras bolsas de desconto na mesma instituição. Consulte as regras específicas de cada instituição parceira.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o processo de solicitação de bolsas CEBAS
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
