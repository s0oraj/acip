import { Banner } from "@/components/Banner";
import { PatternGrid } from "@/components/patterns/index-page-components/PatternGrid";
import { patterns } from "@/data/patterns";
import { StatisticsSection } from "@/components/patterns/index-page-components/StatisticsSection";
import { Footer } from "@/components/footer";
import { Navigation  } from "@/components/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="relative">  {/* Added wrapper to handle positioning */}
        <Navigation />
        <Banner />
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <StatisticsSection />
          <div className="mt-16">
            <PatternGrid patterns={patterns} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
