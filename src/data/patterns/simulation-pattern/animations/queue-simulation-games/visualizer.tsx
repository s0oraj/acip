import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, RotateCcw, ArrowRight, User, Pizza, ArrowDownRight } from 'lucide-react';

interface QueueState {
  students: number[];
  sandwiches: number[];
  matched: Array<{
    student: number;
    sandwich: number;
    success: boolean;
  }>;
  rotations: number;
  stuck: boolean;
}

const QueueSimulationVisualizer = ({
  data,
  activeStep,
  phase,
  onPrev,
  onNext,
  onPlay,
  onReplay
}: {
  data: number[];
  activeStep: number;
  phase: any;
  onPrev: () => void;
  onNext: () => void;
  onPlay: () => void;
  onReplay: () => void;
}) => {
  const state: QueueState = phase?.counter || {
    students: [],
    sandwiches: [],
    matched: [],
    rotations: 0,
    stuck: false
  };

  const renderQueueItem = (type: 'student' | 'sandwich', value: number) => (
    <div
      className={`
        flex flex-col items-center justify-center
        w-12 h-12 rounded-lg border
        transform transition-all duration-300 ease-in-out
        ${value === 1 ? 'bg-blue-100 border-blue-300' : 'bg-orange-100 border-orange-300'}
      `}
    >
      {type === 'student' ? (
        <User className={`h-4 w-4 ${value === 1 ? 'text-blue-500' : 'text-orange-500'}`} />
      ) : (
        <Pizza className={`h-4 w-4 ${value === 1 ? 'text-blue-500' : 'text-orange-500'}`} />
      )}
      <span className="text-xs mt-1">Type {value}</span>
    </div>
  );

  return (
