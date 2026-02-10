import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQB2B() {
  const faqs = [
    {
      question: "Quanto tempo leva a implementação da plataforma?",
      answer: "A implementação padrão leva entre 15 a 30 dias, dependendo do porte da instituição e da quantidade de dados a serem migrados. Nossa equipe acompanha todo o processo, desde a configuração inicial até o treinamento completo dos usuários.",
    },
    {
      question: "Como funciona a migração de dados do sistema atual?",
      answer: "Oferecemos suporte completo para migração de dados. Nossa equipe técnica realiza a extração, transformação e carga dos dados existentes de forma segura, mantendo a integridade das informações. O processo é realizado sem interrupção das suas operações.",
    },
    {
      question: "A plataforma está realmente em conformidade com todas as exigências CEBAS?",
      answer: "Sim. Nossa plataforma foi desenvolvida em parceria com especialistas jurídicos e está 100% alinhada com a Lei Complementar nº 187/2021, Portaria 15/2017 e todas as normas do MEC. Incluímos atualizações automáticas sempre que há mudanças na legislação.",
    },
    {
      question: "Quais integrações estão disponíveis?",
      answer: "Integramos com os principais sistemas acadêmicos, ERPs educacionais, sistemas de contabilidade, plataformas de gestão financeira e sistemas do MEC. Também oferecemos API aberta para integrações customizadas em planos Enterprise.",
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Oferecemos suporte por email, telefone e WhatsApp Business. Planos Profissional e Enterprise têm suporte prioritário com tempo de resposta garantido. Também disponibilizamos central de ajuda online com documentação completa e vídeos tutoriais.",
    },
    {
      question: "Os dados dos alunos estão seguros e protegidos?",
      answer: "Absolutamente. Utilizamos criptografia end-to-end, armazenamento em servidores brasileiros com certificação ISO 27001, backups automáticos diários e conformidade total com a LGPD. Todos os acessos são registrados em logs de auditoria.",
    },
    {
      question: "Posso personalizar os critérios de seleção de candidatos?",
      answer: "Sim. A plataforma permite configurar critérios de elegibilidade específicos da sua instituição, criar fluxos de aprovação personalizados e definir pesos para diferentes documentos e requisitos, sempre respeitando as normas CEBAS.",
    },
    {
      question: "Como funciona a renovação de bolsas?",
      answer: "O sistema automatiza o processo de renovação, verificando automaticamente os critérios de manutenção (frequência, desempenho acadêmico, documentação atualizada). Você pode configurar alertas e lembretes, e o aluno é notificado automaticamente sobre pendências.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre implementação, conformidade e recursos da plataforma
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
