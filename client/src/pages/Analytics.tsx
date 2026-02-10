import { AnalyticsCharts } from "@/components/AnalyticsCharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Clock } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
};

function StatCard({ title, value, change, trend, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="flex items-center gap-1 text-sm">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-accent" />
          ) : (
            <TrendingDown className="h-4 w-4 text-destructive" />
          )}
          <span className={trend === "up" ? "text-accent" : "text-destructive"}>
            {change}
          </span>
          <span className="text-muted-foreground ml-1">from last period</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Analytics() {
  //todo: remove mock functionality
  const stats = [
    { title: "Total Inquiries", value: "12,847", change: "+12.5%", trend: "up" as const, icon: <Activity className="h-4 w-4" /> },
    { title: "Automation Rate", value: "94.2%", change: "+5.3%", trend: "up" as const, icon: <TrendingUp className="h-4 w-4" /> },
    { title: "Avg Response Time", value: "1.2s", change: "-8.4%", trend: "up" as const, icon: <Clock className="h-4 w-4" /> },
    { title: "Error Rate", value: "0.8%", change: "-2.1%", trend: "up" as const, icon: <TrendingDown className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Monitor your automation performance and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <AnalyticsCharts />
    </div>
  );
}
