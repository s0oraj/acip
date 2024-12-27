import { Banner } from "@/components/Banner";
import { PatternGrid } from "@/components/patterns/index-page-components/PatternGrid";
import { patterns } from "@/data/patterns";
import { StatisticsSection } from "@/components/patterns/index-page-components/StatisticsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <StatisticsSection />
        <PatternGrid patterns={patterns} />
      </div>
    </div>
  );
};

export default Index;

