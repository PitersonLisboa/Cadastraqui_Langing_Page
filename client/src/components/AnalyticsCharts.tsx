import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

export function AnalyticsCharts() {
  //todo: remove mock functionality
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold">Inquiries Over Time</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" data-testid="button-timeframe-selector">
              <Calendar className="h-4 w-4 mr-2" />
              Last 7 days
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-export-chart">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-sm text-muted-foreground">Line chart visualization</p>
              <p className="text-xs text-muted-foreground mt-1">Showing inquiry trends</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
            <CardTitle className="text-xl font-semibold">Inquiry Categories</CardTitle>
            <Button variant="ghost" size="icon" data-testid="button-export-pie">
              <Download className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
              <div className="text-center">
                <div className="text-4xl mb-2">🥧</div>
                <p className="text-sm text-muted-foreground">Pie chart visualization</p>
                <p className="text-xs text-muted-foreground mt-1">Category distribution</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
            <CardTitle className="text-xl font-semibold">Response Time Distribution</CardTitle>
            <Button variant="ghost" size="icon" data-testid="button-export-bar">
              <Download className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="text-sm text-muted-foreground">Bar chart visualization</p>
                <p className="text-xs text-muted-foreground mt-1">Time range breakdown</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
