import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div
                  className="font-bold text-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Cadastraqui
                </div>
                <div className="text-xs text-muted-foreground">
                  Bolsas CEBAS
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando estudantes brasileiros às melhores oportunidades de
              bolsas de estudo CEBAS.
            </p>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Links Úteis
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre o CEBAS
                </a>
              </li>
              <li>
                <a
                  href="#bolsas"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bolsas Disponíveis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                comercial@cadastraqui.com.br
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                0800 123 4567
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5" />
                <span>
                  Seg-Sex: 8h às 18h
                  <br />
                  Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades sobre bolsas disponíveis
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Seu email"
                className="text-sm"
                data-testid="input-newsletter"
              />
              <Button size="sm" data-testid="button-newsletter">
                Enviar
              </Button>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Cadastraqui. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
