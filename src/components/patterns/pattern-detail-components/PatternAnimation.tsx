// src/components/patterns/pattern-detail-components/PatternAnimation.tsx
import React from 'react';
import { countingAnimations } from '@/data/patterns/counting/animations';
import { AnimationDialog } from './AnimationDialog';

interface PatternAnimationProps {
  patternId: string;
}

export const PatternAnimation: React.FC<PatternAnimationProps> = ({ patternId }) => {
  const animation = countingAnimations[patternId.toLowerCase().replace(/\s+/g, '')];
  
  if (!animation) return null;
  
  return <AnimationDialog animation={animation} />;
};
