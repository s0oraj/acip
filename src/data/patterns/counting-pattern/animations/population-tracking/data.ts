import { Animation } from '@/types';
import { TrendingUp, Clock, Group, Activity } from 'lucide-react';

export const populationPatterns = {
  timeline: {
    title: "Time-Based Population",
    icon: Clock,
    color: "#2563EB",
    data: [
      { start: 1950, end: 1961, label: "Baby Boom", population: 2.8 },
      { start: 1960, end: 1971, label: "Gen X", population: 2.3 },
      { start: 1970, end: 1981, label: "Millennials", population: 1.9 },
      { start: 1980, end: 1991, label: "Gen Y", population: 1.7 },
      { start: 1990, end: 2001, label: "Gen Z", population: 1.5 }
    ],
    description: "Track demographic shifts over time",
    type: 'timeline'
  },
  range: {
    title: "Population Distribution",
    icon: Group,
    color: "#7C3AED",
    data: [
      { start: 1, end: 4, density: 80, region: "Urban" },
      { start: 3, end: 7, density: 60, region: "Suburban" },
      { start: 5, end: 8, density: 40, region: "Rural" },
      { start: 2, end: 6, density: 70, region: "Mixed" }
    ],
    queries: [2, 4, 6],
    description: "Analyze population density patterns",
    type: 'range'
  },
  growth: {
    title: "Growth Dynamics",
    icon: TrendingUp,
    color: "#059669",
    data: [
      { year: 2020, value: 12, trend: "peak" },
      { year: 2021, value: 11, trend: "decline" },
      { year: 2022, value: 10, trend: "decline" },
      { year: 2023, value: 9, trend: "decline" },
      { year: 2024, value: 8, trend: "stabilize" },
      { year: 2025, value: 7, trend: "bottom" },
      { year: 2026, value: 8, trend: "recovery" },
      { year: 2027, value: 9, trend: "growth" }
    ],
    description: "Track population growth patterns",
    type: 'growth'
  },
  dynamics: {
    title: "Population Dynamics",
    icon: Activity,
    color: "#DC2626",
    data: [
      { period: "Q1", births: 150, deaths: 100, migration: 50 },
      { period: "Q2", births: 160, deaths: 90, migration: 70 },
      { period: "Q3", births: 140, deaths: 95, migration: 60 },
      { period: "Q4", births: 170, deaths: 85, migration: 80 }
    ],
    description: "Analyze population flow dynamics",
    type: 'dynamics'
  }
};

export const populationTrackingAnimation: Animation = {
  id: "population-tracking",
  title: "Population Tracking Patterns",
  description: "Understanding advanced population dynamics",
  steps: Object.entries(populationPatterns).map(([key, pattern]) => ({
    title: pattern.title,
    description: pattern.description,
    array: pattern.data,
    phases: Array.from({ length: pattern.data.length }, (_, i) => ({
      description: `Analyzing ${pattern.type === 'dynamics' 
        ? pattern.data[i].period 
        : pattern.type === 'timeline' 
          ? `${pattern.data[i].start}-${pattern.data[i].end}`
          : `Step ${i + 1}`}`,
      activeIndex: i,
      data: pattern.data.slice(0, i + 1),
      currentStep: i
    }))
  })),
  counters: []
};
