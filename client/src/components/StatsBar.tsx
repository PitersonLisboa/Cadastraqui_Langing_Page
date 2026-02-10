import { Card } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Shield } from "lucide-react";

export function StatsBar() {
  const stats = [
    { icon: Building2, value: "100+", label: "Instituições Parceiras" },
    { icon: Users, value: "10mil+", label: "Candidatos Gerenciados" },
    { icon: Shield, value: "100%", label: "Conformidade LGPD" },
    { icon: TrendingUp, value: "95%", label: "Tempo Economizado" },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center" data-testid={`stat-${index}`}>
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
