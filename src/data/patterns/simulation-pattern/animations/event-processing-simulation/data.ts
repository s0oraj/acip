import { Animation } from '@/types';
import { Calendar, Clock, AlertCircle, Radio, BarChart } from 'lucide-react';

export const patterns = {
  basicEvents: {
    events: [
      { id: 1, start: 0, end: 10, type: 'Meeting' },
      { id: 2, start: 5, end: 15, type: 'Call' },
      { id: 3, start: 12, end: 20, type: 'Workshop' }
    ],
    icon: 'calendar',
    title: "Basic Events",
    desc: "Event Processing",
    color: "#4F46E5"
  },
  scheduledEvents: {
    tasks: ['A', 'A', 'B', 'B', 'C'],
    cooldown: 2,
    icon: 'clock',
    title: "Task Scheduler",
    desc: "Cooldown Management",
    color: "#7C3AED"
  },
  conflictEvents: {
    events: [
      { id: 1, conflicts: [2, 3] },
      { id: 2, conflicts: [1] },
      { id: 3, conflicts: [1, 4] },
      { id: 4, conflicts: [3] }
    ],
    icon: 'alertCircle',
    title: "Conflict Resolution",
    desc: "Event Dependencies",
    color: "#2563EB"
  }
};

const processEvents = (events: any[], currentTime: number) => {
  const state = {
    timeline: Array(24).fill(0),
    activeEvents: [],
    processedEvents: [],
    conflicts: [],
    currentTime
  };

  events.forEach(event => {
    if (event.start <= currentTime) {
      state.timeline.fill(1, event.start, Math.min(event.end, currentTime));
      if (event.end > currentTime) {
        state.activeEvents.push(event);
      } else {
        state.processedEvents.push(event);
      }
    }
  });

  // Detect conflicts
  events.forEach((event1, i) => {
    events.slice(i + 1).forEach(event2 => {
      if (!(event1.end <= event2.start || event2.end <= event1.start)) {
        state.conflicts.push([event1.id, event2.id]);
      }
    });
  });

  return state;
};

export const eventProcessingAnimation: Animation = {
  id: "event-processing",
  title: "Event Processing Simulation",
  description: "Visualizing event processing and scheduling scenarios",
  steps: [
    {
      title: "Basic Event Processing",
      description: "Process events on a timeline with conflict detection",
      array: patterns.basicEvents.events,
      phases: Array(24).fill(null).map((_, index) => ({
        description: index === 0 
          ? "Initialize timeline" 
          : `Time: ${index}:00`,
        activeIndex: index,
        highlightIndices: [index],
        counter: processEvents(patterns.basicEvents.events, index),
        code: index === 0 
          ? "const timeline = initializeTimeline();" 
          : `processEventsAtTime(${index});`
      }))
    }
  ],
  counters: []
};
