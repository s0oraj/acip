// src/components/patterns/pattern-detail-components/questions-list/AnimationDialog.tsx
import React, { useState, useEffect } from 'react';
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
  const [Visualizer, setVisualizer] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    setError(null);
    
    const loadVisualizer = async () => {
      try {
        // Dynamically import the visualizers based on the pattern
        const patternModule = await import(`@/data/patterns/${pattern}/animations`);
        const visualizer = patternModule.visualizers[subpattern];
        
        if (!visualizer) {
          throw new Error(`No visualizer found for ${subpattern}`);
        }
        
        setVisualizer(() => visualizer);
      } catch (err) {
        console.error('Error loading visualizer:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    if (isOpen) {
      loadVisualizer();
    }
  }, [isOpen, pattern, subpattern]);

  if (error || !Visualizer) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-[95vw] w-full p-0 h-[95vh] overflow-hidden">
          <Card className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-4">
              <div className="text-red-500">
                <p>Error loading visualizer</p>
                <p className="font-mono text-sm">No visualizer found for {subpattern}</p>
                <p className="mt-2 text-sm">Debug Information:</p>
                <pre className="text-xs bg-gray-100 p-2 mt-1 rounded">
                  {JSON.stringify({
                    pattern,
                    subpattern,
                    timestamp: new Date().toISOString(),
                    error: error || 'Visualizer not found'
                  }, null, 2)}
                </pre>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full p-0 h-[95vh] overflow-hidden">
        <div className="h-full overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
          <Visualizer />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
