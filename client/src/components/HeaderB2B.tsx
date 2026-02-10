import { Button } from "@/components/ui/button";
import { whatsAppMessage } from "@/lib/utils";
import logoImage from "@assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function HeaderB2B() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Instituições", href: "#instituicoes" },
    { label: "Recursos", href: "#recursos" },
    { label: "Compliance", href: "#compliance" },
    { label: "Casos de Uso", href: "#casos" },
    // { label: "Segurança", href: "#seguranca" },
    { label: "Preços", href: "#precos" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-3" data-testid="logo">
          <img
            src={logoImage}
            alt="Cadastraqui Logo"
            className="h-60 w-60 object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              data-testid={`link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden md:flex"
            data-testid="button-vendas"
            onClick={() => whatsAppMessage({ type: "seller" })}
          >
            Falar com Vendas
          </Button>
          <Button
            className="hidden md:flex"
            data-testid="button-demo"
            onClick={() => window.open(import.meta.env.VITE_PORTAL_URL)}
          >
            Acessar a plataforma
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => whatsAppMessage({ type: "seller" })}
            >
              Falar com Vendas
            </Button>
            <Button
              className="w-full"
              onClick={() => window.open(import.meta.env.VITE_PORTAL_URL)}
            >
              Acessar a plataforma
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
