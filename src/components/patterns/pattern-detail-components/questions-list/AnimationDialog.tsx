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
  }, [isOpen]);

  const DynamicVisualizer = lazy(async () => {
    try {
      // Using Vite's dynamic import
      const module = await import(`/src/data/patterns/${pattern}/animations/${subpattern}/visualizer.tsx`);
      console.log('Module loaded successfully:', module);
      return module;
    } catch (err) {
      console.error('Import error:', {
        error: err,
        path: `/src/data/patterns/${pattern}/animations/${subpattern}/visualizer.tsx`
      });
      setError(`Failed to load visualizer for ${pattern}/${subpattern}`);
      throw err;
    }
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
                    importPath: `/src/data/patterns/${pattern}/animations/${subpattern}/visualizer.tsx`,
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
