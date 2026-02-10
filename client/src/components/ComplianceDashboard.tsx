import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Users, FileCheck, AlertTriangle } from "lucide-react";

export function ComplianceDashboard() {
  // Dados de documentos por status
  const documentStatusData = [
    { name: "Conformes", value: 487, color: "hsl(145, 34%, 43%)" },
    { name: "Pendentes", value: 13, color: "hsl(45, 93%, 47%)" },
    { name: "Vencidos", value: 0, color: "hsl(3, 85%, 57%)" },
  ];

  // Evolução mensal de bolsistas
  const monthlyData = [
    { mes: "Jan", bolsistas: 450, candidatos: 120 },
    { mes: "Fev", bolsistas: 462, candidatos: 98 },
    { mes: "Mar", bolsistas: 478, candidatos: 145 },
    { mes: "Abr", bolsistas: 485, candidatos: 132 },
    { mes: "Mai", bolsistas: 492, candidatos: 110 },
    { mes: "Jun", bolsistas: 500, candidatos: 125 },
  ];

  // Distribuição por modalidade
  const modalityData = [
    { modalidade: "Integral", quantidade: 320 },
    { modalidade: "50%", quantidade: 180 },
  ];

  // Métricas de conformidade
  const complianceMetrics = [
    {
      label: "Taxa de Conformidade",
      value: 98,
      icon: FileCheck,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      label: "Documentos Processados",
      value: 500,
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      suffix: "",
    },
    {
      label: "Processos em Dia",
      value: 487,
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10",
      suffix: "",
    },
    {
      label: "Alertas Ativos",
      value: 2,
      icon: AlertTriangle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
      suffix: "",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Métricas principais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {complianceMetrics.map((metric, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {metric.value}{metric.suffix || "%"}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {metric.label}
            </div>
          </Card>
        ))}
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status de Documentos */}
        <Card className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-lg flex items-center justify-between">
              Status de Documentos
              <Badge variant="outline" className="font-normal">
                Total: 500
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={documentStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {documentStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {documentStatusData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Evolução Mensal */}
        <Card className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-lg flex items-center justify-between">
              Evolução nos Últimos 6 Meses
              <Badge className="font-normal bg-accent">
                <TrendingUp className="h-3 w-3 mr-1" />
                +11.1%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="mes"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="bolsistas"
                  stroke="hsl(207, 58%, 29%)"
                  strokeWidth={2}
                  name="Bolsistas"
                />
                <Line
                  type="monotone"
                  dataKey="candidatos"
                  stroke="hsl(145, 34%, 43%)"
                  strokeWidth={2}
                  name="Candidatos"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Distribuição por Modalidade e Conformidade */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribuição por Modalidade */}
        <Card className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-lg">
              Distribuição por Modalidade
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={modalityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="modalidade"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="quantidade"
                  fill="hsl(207, 58%, 29%)"
                  radius={[8, 8, 0, 0]}
                  name="Bolsistas"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Indicadores de Conformidade */}
        <Card className="p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-lg">
              Indicadores de Conformidade
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Documentação Completa
                </span>
                <span className="text-sm font-bold text-accent">98%</span>
              </div>
              <Progress value={98} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Processos em Conformidade
                </span>
                <span className="text-sm font-bold text-accent">97.4%</span>
              </div>
              <Progress value={97.4} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Atualizações em Dia
                </span>
                <span className="text-sm font-bold text-accent">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">
                  Relatórios Aprovados
                </span>
                <span className="text-sm font-bold text-accent">96%</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Média Geral</span>
                <span className="text-xl font-bold text-accent" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  97.8%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resumo Final */}
      <Card className="p-6 bg-accent/5 border-accent/20">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 flex-shrink-0">
            <FileCheck className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">
              Status de Compliance: Excelente
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sua instituição está com <strong>97.4% dos processos em conformidade</strong> com 
              as exigências do CEBAS. Apenas 13 documentos pendentes de atualização e 
              nenhum documento vencido. Continue mantendo este padrão de excelência!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
