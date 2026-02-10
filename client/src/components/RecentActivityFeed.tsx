import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Activity = {
  id: string;
  timestamp: string;
  inquiry: string;
  status: "completed" | "processing" | "failed";
  responseTime: string;
};

export function RecentActivityFeed() {
  //todo: remove mock functionality
  const activities: Activity[] = [
    { id: "1", timestamp: "2 min ago", inquiry: "When will my order #12345 arrive?", status: "completed", responseTime: "0.8s" },
    { id: "2", timestamp: "5 min ago", inquiry: "Can I change my shipping address?", status: "completed", responseTime: "1.2s" },
    { id: "3", timestamp: "12 min ago", inquiry: "What's your return policy?", status: "processing", responseTime: "—" },
    { id: "4", timestamp: "18 min ago", inquiry: "Do you ship internationally?", status: "completed", responseTime: "0.9s" },
    { id: "5", timestamp: "25 min ago", inquiry: "How do I track my package?", status: "completed", responseTime: "1.1s" },
    { id: "6", timestamp: "32 min ago", inquiry: "Product specifications for item XYZ", status: "failed", responseTime: "—" },
    { id: "7", timestamp: "45 min ago", inquiry: "Payment methods available?", status: "completed", responseTime: "0.7s" },
    { id: "8", timestamp: "1 hour ago", inquiry: "Customer service hours?", status: "completed", responseTime: "1.0s" },
  ];

  const getStatusIcon = (status: Activity["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-accent" />;
      case "processing":
        return <Loader2 className="h-4 w-4 text-primary animate-spin" />;
      case "failed":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusBadge = (status: Activity["status"]) => {
    switch (status) {
      case "completed":
        return <Badge variant="outline" className="border-accent/50 text-accent">Completed</Badge>;
      case "processing":
        return <Badge variant="outline" className="border-primary/50 text-primary">Processing</Badge>;
      case "failed":
        return <Badge variant="outline" className="border-destructive/50 text-destructive">Failed</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-96 overflow-y-auto space-y-2">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`p-4 rounded-lg border ${
                index % 2 === 0 ? "bg-card" : "bg-muted/30"
              }`}
              data-testid={`activity-item-${activity.id}`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span data-testid={`text-timestamp-${activity.id}`}>{activity.timestamp}</span>
                </div>
                {getStatusBadge(activity.status)}
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">{getStatusIcon(activity.status)}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm mb-1" data-testid={`text-inquiry-${activity.id}`}>
                    {activity.inquiry}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    Response time: <span data-testid={`text-response-time-${activity.id}`}>{activity.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
