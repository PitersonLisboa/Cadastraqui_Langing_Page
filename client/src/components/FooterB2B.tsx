import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

export function FooterB2B() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Cadastraqui Logo"
                className="object-contain"
                width={160}
                height={160}
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Plataforma líder em gestão CEBAS para instituições educacionais
              brasileiras. Compliance garantido e gestão simplificada.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                LGPD Compliant
              </Badge>
              <Badge variant="outline" className="text-xs">
                ISO 27001
              </Badge>
              <Badge variant="outline" className="text-xs">
                Hosting Brasil
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#recursos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#compliance"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compliance
                </a>
              </li>
              <li>
                <a
                  href="#precos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Preços
                </a>
              </li>
              <li>
                <a
                  href="#seguranca"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#casos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Casos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                comercial@cadastraqui.com.br
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +55 (12) 98144-8120
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Cadastraqui. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
