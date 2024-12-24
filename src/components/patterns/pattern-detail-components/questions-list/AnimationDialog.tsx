import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Animation } from '@/data/types';
import FrequencyVisualizer from './FrequencyVisualizer';

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  animation?: Animation;
}

const AnimationDialog: React.FC<AnimationDialogProps> = ({ isOpen, onClose, animation }) => {
  const [activeCounter, setActiveCounter] = useState<any>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (animation?.counters?.length > 0) {
      setActiveCounter(animation.counters[0]);
    }
  }, [animation]);

  if (!animation) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{animation.title}</DialogTitle>
          <DialogDescription>{animation.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {animation.counters?.map((counter, index) => (
              <Button
                key={index}
                onClick={() => setActiveCounter(counter)}
                variant={activeCounter === counter ? "default" : "outline"}
              >
                {counter.title}
              </Button>
            ))}
          </div>

          {activeCounter && <FrequencyVisualizer counter={activeCounter} />}
          
          <div className="flex justify-between mt-4">
            <Button
              onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button
              onClick={() => setCurrentStepIndex(prev => 
                Math.min(animation.steps?.length - 1 || 0, prev + 1)
              )}
              disabled={currentStepIndex === (animation.steps?.length - 1 || 0)}
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
