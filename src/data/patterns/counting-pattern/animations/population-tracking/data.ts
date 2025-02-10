// src/data/patterns/counting-pattern/animations/population-tracking/data.ts
import { Animation } from '@/types';
import { Users, Calendar, TrendingUp } from 'lucide-react';

export const patterns = {
  timeline: {
    data: [
      { start: 1950, end: 2000 },
      { start: 1960, end: 2010 },
      { start: 1970, end: 2020 },
      { start: 1980, end: 2030 }
    ],
    icon: 'calendar',
    title: "Time Counter",
    desc: "Track population over time",
    color: "#2563EB"
  },
  range: {
    data: [
      { start: 1, end: 4 },
      { start: 2, end: 5 },
      { start: 3, end: 7 },
      { start: 6, end: 8 }
    ],
    icon: 'users',
    title: "Range Counter",
    desc: "Track overlapping ranges",
    color: "#7C3AED"
  },
  growth: {
    data: [100, 95, 90, 85, 87, 85, 80, 75, 70],
    icon: 'trending-up',
    title: "Growth Counter",
    desc: "Track growth patterns",
    color: "#059669"
  }
};

const calculateTimeline = (events: Array<{ start: number; end: number }>, current: number) => {
  const timeline: Record<number, number> = {};
  events.slice(0, current).forEach(({ start, end }) => {
    for (let year = start; year <= end; year++) {
      timeline[year] = (timeline[year] || 0) + 1;
    }
  });
  return timeline;
};

const calculateRangePopulation = (ranges: Array<{ start: number; end: number }>, current: number) => {
  const prefix: number[] = new Array(10).fill(0);
  ranges.slice(0, current).forEach(({ start, end }) => {
    prefix[start] += 1;
    prefix[end + 1] -= 1;
  });
  const population: number[] = [];
  let count = 0;
  for (let i = 0; i < prefix.length; i++) {
    count += prefix[i];
    population[i] = count;
  }
  return population;
};

export const populationTrackingAnimation: Animation = {
  id: "population-tracking",
  title: "Population Tracking Patterns",
  description: "Visualizing different approaches to tracking population changes",
  steps: [
    {
      title: "Timeline Based Counting",
      description: "Track population changes over time periods",
      array: patterns.timeline.data,
      phases: patterns.timeline.data.map((_, index) => ({
        description: index === 0 
          ? "Initialize timeline counter" 
          : `Add period ${index + 1} to timeline`,
        activeIndex: index,
        highlightIndices: [index],
        counter: calculateTimeline(patterns.timeline.data, index + 1),
        code: index === 0 
          ? "timeline = {}" 
          : `timeline[year] += 1`
      }))
    },
    {
      title: "Range Population Counting",
      description: "Track overlapping population ranges",
      array: patterns.range.data,
      phases: patterns.range.data.map((_, index) => ({
        description: index === 0 
          ? "Initialize range counter" 
          : `Process range ${index + 1}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: calculateRangePopulation(patterns.range.data, index + 1),
        code: index === 0 
          ? "prefix = [0] * n" 
          : `prefix[start] += 1\nprefix[end + 1] -= 1`
      }))
    }
  ],
  counters: ["timeline", "population"]
};
