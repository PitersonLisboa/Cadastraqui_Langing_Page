import { ArrowUp, ArrowDown, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_office_workspace_hero_80f470ef.png";

type MetricCardProps = {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
};

function MetricCard({ title, value, trend, trendLabel }: MetricCardProps) {
  const isPositive = trend >= 0;
  
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-md p-6" data-testid={`card-metric-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-sm font-medium text-white/90 mb-2">{title}</div>
      <div className="text-5xl font-bold text-white mb-3">{value}</div>
      <div className="flex items-center gap-1 text-sm">
        {isPositive ? (
          <ArrowUp className="h-4 w-4 text-green-400" />
        ) : (
          <ArrowDown className="h-4 w-4 text-red-400" />
        )}
        <span className={isPositive ? "text-green-400" : "text-red-400"}>
          {Math.abs(trend)}%
        </span>
        <span className="text-white/70 ml-1">{trendLabel}</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  //todo: remove mock functionality
  const metrics = [
    { title: "Total Inquiries", value: "2,847", trend: 12, trendLabel: "from last week" },
    { title: "Response Rate", value: "94%", trend: 5, trendLabel: "from last week" },
    { title: "Avg Response Time", value: "1.2s", trend: -8, trendLabel: "improvement" },
    { title: "Satisfaction", value: "4.8/5", trend: 3, trendLabel: "from last week" },
  ];

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      <div className="relative h-full p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-white mb-2">
            Welcome back, Professional
          </h1>
          <p className="text-lg text-white/90">
            Your automation is learning and improving every day
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
      </div>
    </div>
  );
}
