import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Animation } from '@/data/types';
import FrequencyVisualizer from './FrequencyVisualizer';

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  animation?: Animation;  // Make animation optional
}

const AnimationDialog: React.FC<AnimationDialogProps> = ({ isOpen, onClose, animation }) => {
  const [activeCounter, setActiveCounter] = useState<any>(null);  // Start with null

  // Update activeCounter when animation changes
  useEffect(() => {
    if (animation?.counters?.length > 0) {
      setActiveCounter(animation.counters[0]);
    }
  }, [animation]);

  // If no animation data, show loading or return null
  if (!animation) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
