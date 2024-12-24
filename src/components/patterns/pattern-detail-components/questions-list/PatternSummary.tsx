import { Pattern } from "@/types";

interface PatternSummaryProps {
  summary: Pattern['summary'];
}

export const PatternSummary = ({ summary }: PatternSummaryProps) => {
  if (!summary) return null;

  return (
    <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Pattern Analysis Summary</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Progression Elements</h3>
          <ul className="list-decimal pl-5 space-y-2">
            {summary.progressionElements.map((element, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{element}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Core Techniques</h3>
          <ul className="list-decimal pl-5 space-y-2">
            {summary.coreTechniques.map((technique, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{technique}</li>
            ))}
          </ul>
        </div>

        {summary.implementationGuidelines && (
          <div>
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Implementation Guidelines</h3>
            <div className="space-y-6">
              {summary.implementationGuidelines.map((guide, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{guide.title}</h4>
                  <pre className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{guide.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-4">Testing Strategy</h3>
          <ul className="list-decimal pl-5 space-y-2">
            {summary.testingStrategy.map((strategy, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{strategy}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


