import { HeroSection } from "@/components/HeroSection";
import { TemplatesCard } from "@/components/TemplatesCard";
import { RecentActivityFeed } from "@/components/RecentActivityFeed";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TemplatesCard />
        <RecentActivityFeed />
      </div>
    </div>
  );
}
