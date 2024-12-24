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
        relativePath: `../../../../data/patterns/${pattern}/animations/${subpattern}/visualizer`
      });
    }
  }, [isOpen, pattern, subpattern]);

  const DynamicVisualizer = lazy(() => {
    // Using relative path instead of @ alias
    const relativePath = `../../../../data/patterns/${pattern}/animations/${subpattern}/visualizer`;
    console.log('Attempting to import visualizer:', {
      relativePath,
      pattern,
      subpattern
    });

    return import(relativePath)
      .then(module => {
        if (!module.default) {
          throw new Error('Visualizer module does not have a default export');
        }
        console.log('Successfully loaded visualizer module');
        return module;
      })
      .catch(err => {
        let errorMessage = 'Failed to load visualizer';
        if (err.message.includes('Failed to resolve module specifier')) {
          errorMessage = 'Could not find visualizer file';
        } else if (err.message.includes('default export')) {
          errorMessage = 'Invalid visualizer module format';
        }
        
        console.error('Visualizer import error:', {
          message: err.message,
          path: relativePath,
          errorType: err.constructor.name
        });
        
        setError(`${errorMessage} for ${pattern}/${subpattern}`);
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
                    attemptedPath: `../../../../data/patterns/${pattern}/animations/${subpattern}/visualizer`,
                    timestamp: new Date().toISOString()
                  }, null, 2)}
                </pre>
                <p className="mt-2 text-xs text-gray-600">
                  Expected file location: src/data/patterns/{pattern}/animations/{subpattern}/visualizer.tsx
                </p>
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
