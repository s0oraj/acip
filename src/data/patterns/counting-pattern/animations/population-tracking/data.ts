// src/data/patterns/counting-pattern/animations/population-tracking/data.ts
import { Animation } from '@/types';

const populationPatterns = {
  'timeline': {
    title: "Time-Based",
    data: [
      { start: 1950, end: 1961 },
      { start: 1960, end: 1971 },
      { start: 1970, end: 1981 }
    ],
    description: "Track population by year",
    type: 'timeline'
  },
  'range': {
    title: "Range Population",
    data: [
      { start: 1, end: 4 },
      { start: 3, end: 7 },
      { start: 5, end: 8 }
    ],
    queries: [2, 4, 6],
    description: "Count overlapping ranges",
    type: 'range'
  },
  'growth': {
    title: "Growth Pattern",
    data: [12, 11, 10, 9, 8, 7, 6, 8, 7, 6],
    description: "Track descent periods",
    type: 'growth'
  }
};

export const populationTrackingAnimation: Animation = {
  id: "population-tracking",
  title: "Population Tracking Patterns",
  description: "Understanding population counting techniques",
  steps: Object.entries(populationPatterns).map(([key, pattern]) => ({
    title: pattern.title,
    description: pattern.description,
    array: pattern.data,
    phases: Array.from({ length: 
      pattern.type === 'growth' ? pattern.data.length :
      pattern.type === 'range' ? pattern.data.length + pattern.queries.length :
      pattern.data.length
    }, (_, i) => ({
      description: `Step ${i + 1}`,
      activeIndex: i,
      data: pattern.data,
      currentStep: i
    }))
  })),
  counters: []
};
