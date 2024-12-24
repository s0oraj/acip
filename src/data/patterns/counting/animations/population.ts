// data/patterns/counting/animations/population.ts
export const populationAnimation = {
  id: "population",
  title: "Population Tracking",
  description: "Track population changes over time intervals",
  steps: [
    {
      description: "Initialize timeline array",
      code: `# For year range 2000-2020
timeline = [0] * 21  # 21 years`,
      visualization: {
        years: Array.from({ length: 21 }, (_, i) => 2000 + i),
        population: Array(21).fill(0)
      }
    },
    {
      description: "Mark population changes",
      code: `# Add person from 2010 to 2015
timeline[2010-2000] += 1  # Birth/arrival
timeline[2015-2000] -= 1  # Death/departure`,
      visualization: {
        years: Array.from({ length: 21 }, (_, i) => 2000 + i),
        population: [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
        changes: [
          { year: 2010, change: 1 },
          { year: 2015, change: -1 }
        ]
      }
    },
    {
      description: "Calculate cumulative population",
      code: `# Calculate running sum
population = 0
for i in range(len(timeline)):
    population += timeline[i]
    timeline[i] = population`,
      visualization: {
        years: Array.from({ length: 21 }, (_, i) => 2000 + i),
        population: [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
        cumulative: true
      }
    }
  ]
};