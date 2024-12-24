// src/data/patterns/pattern-mapping.ts
interface PatternMap {
  [key: string]: {
    id: string;
    subpatterns: {
      [key: string]: string;
    };
  };
}

export const PATTERN_MAPPING: PatternMap = {
  'counting-pattern': {
    id: '1',
    subpatterns: {
      'basic-counter-operations': '1.1',
      'frequency-distribution': '1.2',
      'window-based-counting': '1.3',
      'state-based-counting': '1.4',
      'population-tracking': '1.5'
    }
  },
  'sliding-window': {
    id: '2',
    subpatterns: {
      'fixed-window': '2.1',
      'variable-window': '2.2'
      // ... other subpatterns
    }
  }
  // ... other patterns
};

// Utility functions to convert between IDs and paths
export const getPatternId = (patternPath: string): string => {
  return PATTERN_MAPPING[patternPath]?.id || patternPath;
};

export const getSubpatternId = (patternPath: string, subpatternPath: string): string => {
  return PATTERN_MAPPING[patternPath]?.subpatterns[subpatternPath] || subpatternPath;
};

export const getPatternPath = (id: string): string | undefined => {
  return Object.entries(PATTERN_MAPPING).find(([_, value]) => value.id === id)?.[0];
};

export const getSubpatternPath = (patternId: string, subpatternId: string): string | undefined => {
  const patternPath = getPatternPath(patternId);
  if (!patternPath) return undefined;
  
  return Object.entries(PATTERN_MAPPING[patternPath].subpatterns)
    .find(([_, value]) => value === subpatternId)?.[0];
};
