// src/components/patterns/pattern-detail-components/questions-list/AnimationDialog.tsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  pattern: string;
  subpattern: string;
}

const AnimationDialog = ({ isOpen, onClose, pattern, subpattern }: AnimationDialogProps) => {
  const [error, setError] = useState<string | null>(null);
  const [DynamicVisualizer, setDynamicVisualizer] = useState<any>(null);

  useEffect(() => {
    setError(null);
    if (isOpen) {
      const loadVisualizer = async () => {
        try {
          // Using src/ instead of @/
          const DynamicComponent = dynamic(
            () => import(`src/data/patterns/${pattern}/animations/${subpattern}/visualizer`), {
            loading: () => (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                <span className="ml-2">Loading visualization...</span>
              </div>
            ),
            ssr: false
          });
          
          setDynamicVisualizer(() => DynamicComponent);
          setError(null);
        } catch (err: any) {
          console.error('Failed to load visualizer:', {
            error: err.message,
            path: `src/data/patterns/${pattern}/animations/${subpattern}/visualizer`
          });
          setError(`Failed to load visualizer: ${err.message}`);
          setDynamicVisualizer(null);
        }
      };

      loadVisualizer();
    }
  }, [isOpen, pattern, subpattern]);

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
                    importPath: `src/data/patterns/${pattern}/animations/${subpattern}/visualizer`,
                    timestamp: new Date().toISOString()
                  }, null, 2)}
                </pre>
                <p className="mt-2 text-xs text-gray-600">
                  Attempted file path: src/data/patterns/{pattern}/animations/{subpattern}/visualizer.tsx
                </p>
              </div>
            ) : DynamicVisualizer ? (
              <DynamicVisualizer />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                <span className="ml-2">Loading visualization...</span>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
