import React, { useState, lazy, Suspense } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';

// Dynamic import for visualizers
const getVisualizer = (pattern: string, subpattern: string) => {
  return lazy(() => import(`@/data/patterns/${pattern}/animations/${subpattern}/visualizer`));
};

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  pattern: string;  // e.g., 'counting'
  subpattern: string;  // e.g., 'basic-counter'
}

const AnimationDialog = ({ isOpen, onClose, pattern, subpattern }: AnimationDialogProps) => {
  const DynamicVisualizer = getVisualizer(pattern, subpattern);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-4">
        <Card className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-4">
            <Suspense fallback={<div>Loading visualization...</div>}>
              <DynamicVisualizer />
            </Suspense>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
