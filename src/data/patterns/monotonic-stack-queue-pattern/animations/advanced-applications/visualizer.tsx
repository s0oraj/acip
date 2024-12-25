import React, { useState, useEffect } from 'react';
import { BarChart2, GitFork, Sigma, Award, Square, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { patterns } from './data';

const AdvancedVisualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('histogram');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('visualization');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'bar-chart-2': return <BarChart2 className="w-5 h-5" />;
      case 'git-fork': return <GitFork className="w-5 h-5" />;
      case 'sigma': return <Sigma className="w-5 h-5" />;
      case 'award': return <Award className="w-5 h-5" />;
      case 'square': return <Square className="w-5 h-5" />;
      default: return <BarChart2 className="w-5 h-5" />;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < getMaxSteps()) {
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const getMaxSteps = () => {
    const pattern = patterns[activePattern];
    if (Array.isArray(pattern.data[0])) {
      return (pattern.data as number[][]).length;
    }
    return (pattern.data as number[]).length;
  };

  const renderHistogram = (data: number[], currentStep: number) => (
    <div className="flex items-end h-48 gap-1">
      {data.map((height, idx) => (
        <div
          key={idx}
          className={`w-12 transition-all duration-300 ${
            idx < currentStep ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          style={{ height: `${(height / Math.max(...data)) * 100}%` }}
        >
          <div className="text-center -mt-6">{height}</div>
        </div>
      ))}
    </div>
  );

  const render2DMatrix = (data: number[][], currentStep: number) => (
    <div className="grid gap-1">
      {data.slice(0, currentStep + 1).map((row, i) => (
        <div key={i} className="flex gap-1">
          {row.map((cell, j) => (
            <div
              key={j}
              className={`w-12 h-12 flex items-center justify-center rounded ${
                cell ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  const renderVisualization = () => {
    const pattern = patterns[activePattern];
    if (activePattern === 'rectangle') {
      return render2DMatrix(pattern.data as number[][], step);
    }
    return renderHistogram(pattern.data as number[], step);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
          <button
            key={key}
            onClick={() => {
              setActivePattern(key);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`p-4 rounded-xl transition-all ${
              activePattern === key 
                ? 'bg-white shadow-lg scale-105' 
                : 'bg-gray-50 hover:bg-white hover:shadow'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                {getIcon(icon)}
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-[400px] mx-auto mb-6">
          <TabsTrigger value="visualization">Visualization</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
        </TabsList>

        <TabsContent value="visualization">
          <Card>
            <CardHeader>
              <CardTitle>Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              {renderVisualization()}
              
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Step {step + 1}</span>
                  <span>of {getMaxSteps()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((step + 1) / getMaxSteps()) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardContent className="pt-6">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {step === 0
                    ? "// Initialize visualization"
                    : patterns[activePattern].questions[0].key}
                </code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions">
          <div className="space-y-4">
            {patterns[activePattern].questions.map((question, idx) => (
              <Alert key={idx} className="bg-white">
                <AlertTitle className="flex items-center justify-between">
                  <span>{question.title}</span>
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
                  >
                    <span>Solve</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </AlertTitle>
                <AlertDescription>
                  <div className="mt-2 space-y-2">
                    <p><strong>Difficulty:</strong> <span className={`inline-block px-2 py-1 rounded text-sm ${
                      question.difficulty === 'hard' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>{question.difficulty}</span></p>
                    <p><strong>Key Operation:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{question.key}</code></p>
                    <p><strong>Common Error:</strong> {question.error}</p>
                    <p><strong>Optimization:</strong> {question.optimization}</p>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => {
            const patternKeys = Object.keys(patterns);
            const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
            setActivePattern(patternKeys[prevIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        <button
          onClick={() => {
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            const patternKeys = Object.keys(patterns);
            const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
            setActivePattern(patternKeys[nextIndex]);
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AdvancedVisualizer;
