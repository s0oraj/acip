// src/components/patterns/pattern-detail-components/questions-list/AnimationDialog.tsx
import React, { Suspense, lazy } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from '@/components/ui/card';

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  pattern: string;
  subpattern: string;
}

const AnimationDialog = ({ isOpen, onClose, pattern, subpattern }: AnimationDialogProps) => {
  const DynamicVisualizer = lazy(() => 
    import(`@/src/data/patterns/${pattern}/animations/${subpattern}/visualizer`)
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-4">
        <Card className="w-full h-full">
          <CardContent className="p-4">
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicVisualizer />
            </Suspense>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
