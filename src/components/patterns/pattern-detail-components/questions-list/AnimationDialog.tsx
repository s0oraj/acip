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

  const DynamicVisualizer = lazy(() => {
    console.log(`Loading visualizer for pattern: ${pattern}, subpattern: ${subpattern}`);
    return import(`@/data/patterns/${pattern}/animations/${subpattern}/visualizer`)
      .catch(err => {
        console.error('Import error:', err);
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
                <p className="mt-2 text-sm">Attempted path: /data/patterns/{pattern}/animations/{subpattern}/visualizer</p>
              </div>
            ) : (
              <Suspense fallback={<div>Loading visualization...</div>}>
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
