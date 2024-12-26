import { Animation } from '@/types';

export const cacheStructureCloningAnimation: Animation = {
  id: "cache-structure-cloning",
  title: "Cache Structure Cloning",
  description: "Visualizing cloning operations on cache structures",
  steps: [
    {
      title: "LRU Cache Clone",
      description: "Cloning a Least Recently Used (LRU) cache",
      visualizationData: {
        cache: [
          { key: 1, value: 'A' },
          { key: 2, value: 'B' },
          { key: 3, value: 'C' },
          { key: 4, value: 'D' },
        ],
        capacity: 4,
      },
    },
    {
      title: "LFU Cache Clone",
      description: "Cloning a Least Frequently Used (LFU) cache",
      visualizationData: {
        cache: [
          { key: 1, value: 'A', frequency: 3 },
          { key: 2, value: 'B', frequency: 2 },
          { key: 3, value: 'C', frequency: 4 },
          { key: 4, value: 'D', frequency: 1 },
        ],
        capacity: 4,
      },
    },
    {
      title: "Two-Level Cache Clone",
      description: "Cloning a two-level cache structure",
      visualizationData: {
        l1Cache: [
          { key: 1, value: 'A' },
          { key: 2, value: 'B' },
        ],
        l2Cache: [
          { key: 3, value: 'C' },
          { key: 4, value: 'D' },
          { key: 5, value: 'E' },
        ],
      },
    },
    {
      title: "Distributed Cache Clone",
      description: "Cloning a distributed cache structure",
      visualizationData: {
        shards: [
          { id: 'Shard1', data: [{ key: 1, value: 'A' }, { key: 2, value: 'B' }] },
          { id: 'Shard2', data: [{ key: 3, value: 'C' }, { key: 4, value: 'D' }] },
          { id: 'Shard3', data: [{ key: 5, value: 'E' }, { key: 6, value: 'F' }] },
        ],
      },
    },
  ],
};

