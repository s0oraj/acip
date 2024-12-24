// src/components/patterns/pattern-detail-components/questions-list/AnimationDialog.tsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';
import { visualizers } from '@/data/patterns/counting-pattern/animations';

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

  // Get the visualizer component directly from the visualizers object
  const Visualizer = visualizers[subpattern];

  if (!Visualizer) {
    console.error('No visualizer found for:', { pattern, subpattern });
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-4">
        <Card className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-4">
            <Visualizer />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
