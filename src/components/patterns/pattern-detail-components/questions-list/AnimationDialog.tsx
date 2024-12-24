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

  // Construct the path using the pattern and subpattern
  const attemptedPath = `/data/patterns/${pattern}/animations/${subpattern}/visualizer`;

  const DynamicVisualizer = lazy(() => {
    // Log the import attempt for debugging
    console.log(`Attempting to import: ${attemptedPath}`);
    
    return import(`@/data/patterns/${pattern}/animations/${subpattern}/visualizer`)
      .catch(err => {
        console.error('Import error:', err);
        setError(`Failed to load: ${attemptedPath}`);
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
                <p className="mt-2 text-sm">Attempted path: {attemptedPath}</p>
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
