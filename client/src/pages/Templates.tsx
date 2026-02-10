import { Plus, Search, Edit, Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

type Template = {
  id: string;
  name: string;
  category: string;
  description: string;
  usageCount: number;
  lastModified: string;
  status: "active" | "draft" | "paused";
};

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  
  //todo: remove mock functionality
  const templates: Template[] = [
    { 
      id: "1", 
      name: "Order Status Inquiry", 
      category: "Orders", 
      description: "Responds to customer questions about order tracking and delivery status",
      usageCount: 342, 
      lastModified: "2 hours ago",
      status: "active"
    },
    { 
      id: "2", 
      name: "Product Information", 
      category: "Sales", 
      description: "Provides detailed product specifications and availability",
      usageCount: 256, 
      lastModified: "5 hours ago",
      status: "active"
    },
    { 
      id: "3", 
      name: "Refund Request", 
      category: "Support", 
      description: "Handles customer refund inquiries and return policies",
      usageCount: 189, 
      lastModified: "1 day ago",
      status: "active"
    },
    { 
      id: "4", 
      name: "Shipping Details", 
      category: "Logistics", 
      description: "Provides shipping options and estimated delivery times",
      usageCount: 167, 
      lastModified: "1 day ago",
      status: "draft"
    },
    { 
      id: "5", 
      name: "Account Help", 
      category: "Support", 
      description: "Assists with account-related questions and password resets",
      usageCount: 134, 
      lastModified: "2 days ago",
      status: "active"
    },
    { 
      id: "6", 
      name: "Payment Methods", 
      category: "Sales", 
      description: "Explains available payment options and processing",
      usageCount: 98, 
      lastModified: "3 days ago",
      status: "paused"
    },
  ];

  const filteredTemplates = templates.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: Template["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-accent text-accent-foreground">Active</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "paused":
        return <Badge variant="outline">Paused</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold mb-2">Response Templates</h1>
          <p className="text-muted-foreground">Manage your automated response templates</p>
        </div>
        <Button data-testid="button-create-template">
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates by name, category, or description..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-templates"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="hover-elevate" data-testid={`template-card-${template.id}`}>
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-semibold line-clamp-1" data-testid={`text-template-name-${template.id}`}>
                      {template.name}
                    </CardTitle>
                    {getStatusBadge(template.status)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" data-testid={`badge-category-${template.id}`}>
                      {template.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-description-${template.id}`}>
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <span data-testid={`text-usage-${template.id}`}>{template.usageCount} uses</span>
                    <span data-testid={`text-modified-${template.id}`}>{template.lastModified}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" data-testid={`button-edit-${template.id}`}>
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-copy-${template.id}`}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-delete-${template.id}`}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
