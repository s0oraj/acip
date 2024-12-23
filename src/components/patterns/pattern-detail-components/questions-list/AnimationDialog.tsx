import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Animation } from '@/data/types';
import FrequencyVisualizer from './FrequencyVisualizer';

interface AnimationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  animation: Animation;
}

const AnimationDialog: React.FC<AnimationDialogProps> = ({ isOpen, onClose, animation }) => {
  const [activeCounter, setActiveCounter] = useState(animation.counters[0]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{animation.title}</DialogTitle>
          <DialogDescription>{animation.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="flex justify-center space-x-4 mb-4">
            {animation.counters.map((counter, index) => (
              <Button
                key={index}
                onClick={() => setActiveCounter(counter)}
                variant={activeCounter === counter ? "default" : "outline"}
              >
                {counter.title}
              </Button>
            ))}
          </div>
          <FrequencyVisualizer counter={activeCounter} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;

