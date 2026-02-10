import { Plus, Edit, Copy, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

type Template = {
  id: string;
  name: string;
  category: string;
  usageCount: number;
  lastModified: string;
};

export function TemplatesCard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  //todo: remove mock functionality
  const templates: Template[] = [
    { id: "1", name: "Order Status Inquiry", category: "Orders", usageCount: 342, lastModified: "2 hours ago" },
    { id: "2", name: "Product Information", category: "Sales", usageCount: 256, lastModified: "5 hours ago" },
    { id: "3", name: "Refund Request", category: "Support", usageCount: 189, lastModified: "1 day ago" },
    { id: "4", name: "Shipping Details", category: "Logistics", usageCount: 167, lastModified: "1 day ago" },
    { id: "5", name: "Account Help", category: "Support", usageCount: 134, lastModified: "2 days ago" },
  ];

  const filteredTemplates = templates.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
        <CardTitle className="text-2xl font-semibold">Response Templates</CardTitle>
        <Button data-testid="button-create-template">
          <Plus className="h-4 w-4 mr-2" />
          Create New
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-templates"
            />
          </div>
        </div>
        <div className="space-y-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="flex items-center justify-between p-4 rounded-lg border hover-elevate"
              data-testid={`template-item-${template.id}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-medium truncate" data-testid={`text-template-name-${template.id}`}>
                    {template.name}
                  </h3>
                  <Badge variant="secondary" data-testid={`badge-category-${template.id}`}>
                    {template.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span data-testid={`text-usage-${template.id}`}>{template.usageCount} uses</span>
                  <span>•</span>
                  <span data-testid={`text-modified-${template.id}`}>Modified {template.lastModified}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" data-testid={`button-edit-${template.id}`}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" data-testid={`button-copy-${template.id}`}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" data-testid={`button-delete-${template.id}`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
