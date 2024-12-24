// data/patterns/counting/animations/state-based.ts
export const stateBasedAnimation = {
  id: "state-based",
  title: "State-Based Counting",
  description: "Track and count state transitions in sequences",
  steps: [
    {
      description: "Initialize state counters",
      code: `states = {
    'initial': 0,
    'processing': 0,
    'complete': 0
}`,
      visualization: {
        states: {
          initial: 0,
          processing: 0,
          complete: 0
        },
        transitions: []
      }
    },
    {
      description: "Track state transitions",
      code: `def transition(current_state, event):
    if current_state == 'initial' and event == 'start':
        return 'processing'
    elif current_state == 'processing' and event == 'finish':
        return 'complete'
    return current_state`,
      visualization: {
        states: {
          initial: 2,
          processing: 3,
          complete: 1
        },
        transitions: [
          { from: "initial", to: "processing", event: "start" },
          { from: "processing", to: "complete", event: "finish" }
        ]
      }
    },
    {
      description: "Analyze state patterns",
      code: `# Check state distribution
total_states = sum(states.values())
state_distribution = {
    state: count/total_states 
    for state, count in states.items()
}`,
      visualization: {
        distribution: [
          { state: "initial", percentage: 33.3 },
          { state: "processing", percentage: 50 },
          { state: "complete", percentage: 16.7 }
        ]
      }
    }
  ]
};