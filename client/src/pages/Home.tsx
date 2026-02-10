import { HeroB2B } from "@/components/HeroB2B";
import { StatsBar } from "@/components/StatsBar";
import { AISelectionProcess } from "@/components/AISelectionProcess";
import { CEBASOnboarding } from "@/components/CEBASOnboarding";
import { BenefitsCEBAS } from "@/components/BenefitsCEBAS";
import { DataComplianceAlert } from "@/components/DataComplianceAlert";
import { CoreFeatures } from "@/components/CoreFeatures";
import { ComplianceSection } from "@/components/ComplianceSection";
import { CaseStudies } from "@/components/CaseStudies";
import { PricingSection } from "@/components/PricingSection";
import { FAQB2B } from "@/components/FAQB2B";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroB2B />
      <StatsBar />
      <AISelectionProcess />
      <CEBASOnboarding />
      <BenefitsCEBAS />
      <DataComplianceAlert />
      <CoreFeatures />
      <ComplianceSection />
      <CaseStudies />
      <PricingSection />
      <FAQB2B />
      <FinalCTA />
    </div>
  );
}
