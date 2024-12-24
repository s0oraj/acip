// src/components/patterns/pattern-detail-components/questions-list/AnimationDialog.tsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  pattern: string;
  subpattern: string;
}

const AnimationDialog = ({ isOpen, onClose, pattern, subpattern }: AnimationDialogProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (isOpen) {
      console.log('AnimationDialog opened with:', {
        pattern,
        subpattern,
        importPath: `@/data/patterns/${pattern}/animations/${subpattern}/visualizer`
      });
    }
  }, [isOpen, pattern, subpattern]);

  const DynamicVisualizer = lazy(() => {
    const importPath = `@/data/patterns/${pattern}/animations/${subpattern}/visualizer`;
    console.log('Attempting to import visualizer:', {
      importPath,
      pattern,
      subpattern,
      fullPath: `/data/patterns/${pattern}/animations/${subpattern}/visualizer`
    });

    return import(importPath)
      .then(module => {
        console.log('Successfully loaded visualizer module:', {
          module,
          hasDefaultExport: !!module.default
        });
        return module;
      })
      .catch(err => {
        console.error('Visualizer import error:', {
          error: err.message,
          stack: err.stack,
          pattern,
          subpattern,
          importPath,
          errorType: err.constructor.name
        });
        setError(`Failed to load visualizer for ${pattern}/${subpattern}`);
        throw err;
      });
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-4">
        <Card className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-4">
            {error ? (
              <div className="text-red-500">
                <p>Error loading visualizer</p>
                <p className="font-mono text-sm">{error}</p>
                <p className="mt-2 text-sm">Debug Information:</p>
                <pre className="text-xs bg-gray-100 p-2 mt-1 rounded">
                  {JSON.stringify({
                    pattern,
                    subpattern,
                    importPath: `@/data/patterns/${pattern}/animations/${subpattern}/visualizer`,
                    timestamp: new Date().toISOString()
                  }, null, 2)}
                </pre>
              </div>
            ) : (
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                  <span className="ml-2">Loading visualization...</span>
                </div>
              }>
                <DynamicVisualizer />
              </Suspense>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
