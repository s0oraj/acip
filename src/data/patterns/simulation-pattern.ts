import { Pattern } from '../types'

export const simulationPattern: Pattern = {
  id: 3,
  title: "Simulation Pattern",
  description: "Master simulation techniques for state machines, grid movements, queue games, and event processing across multiple complexity levels",
  subpatterns: [
    {
      title: "State Machine Simulation",
      questions: [
        {
          id: 1,
          title: "Command Processor",
          difficulty: "medium",
          link: "https://leetcode.com/problems/design-browser-history/",
          description: "Base Pattern: Simple state tracking",
          details: {
            keyDifference: "currentState = states[stateIndex] - Basic state transitions",
            commonError: "Not initializing state",
            optimization: "State array pre-allocation"
          }
        },
        {
          id: 2,
          title: "Vending Machine States",
          difficulty: "easy",
          link: "https://leetcode.com/problems/design-parking-system/",
          description: "Builds on #1: Basic state machine",
          details: {
            keyDifference: "if (isValidTransition(current, next)) setState(next) - Added validation logic",
            commonError: "Missing edge state transitions",
            optimization: "State transition matrix"
          }
        },
        {
          id: 3,
          title: "Text Editor States",
          difficulty: "hard",
          link: "https://leetcode.com/problems/design-text-editor/",
          description: "Builds on #2: State validation",
          details: {
            keyDifference: "history.push(state); states = [...history] - Added history tracking",
            commonError: "Incorrect undo/redo order",
            optimization: "Circular buffer for history"
          }
        },
        {
          id: 4,
          title: "Dual Machine Controller",
          difficulty: "medium",
          link: "https://leetcode.com/problems/design-a-food-rating-system/",
          description: "Builds on #3: History tracking",
          details: {
            keyDifference: "machine2.update(machine1.state) - Added machine interaction",
            commonError: "State synchronization",
            optimization: "Event-driven updates"
          }
        },
        {
          id: 5,
          title: "LRU State System",
          difficulty: "medium",
          link: "https://leetcode.com/problems/lru-cache/",
          description: "Builds on #4: Multiple states",
          details: {
            keyDifference: "priorityQueue.update(state) - Added priority handling",
            commonError: "Priority queue updates",
            optimization: "Doubly linked list + hashmap"
          }
        }
      ]
    },
    {
      title: "Grid Movement Simulation",
      questions: [
        {
          id: 6,
          title: "Basic Robot Movement",
          difficulty: "easy",
          link: "https://leetcode.com/problems/walking-robot-simulation/",
          description: "Base Pattern: Grid navigation",
          details: {
            keyDifference: "pos += dir[currentDir] - Simple directional movement",
            commonError: "Direction array indexing",
            optimization: "Vector mapping"
          }
        },
        {
          id: 7,
          title: "Robot Circle Pattern",
          difficulty: "medium",
          link: "https://leetcode.com/problems/robot-bounded-in-circle/",
          description: "Builds on #6: Basic movement",
          details: {
            keyDifference: "pos == startPos && dir == startDir - Added cycle detection",
            commonError: "Incomplete cycle checking",
            optimization: "Single iteration check"
          }
        },
        {
          id: 8,
          title: "Multi-Robot Coordination",
          difficulty: "medium",
          link: "https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/",
          description: "Builds on #7: Movement patterns",
          details: {
            keyDifference: "for (robot in robots) robot.move() - Added multiple entity handling",
            commonError: "Collision detection",
            optimization: "Grid state caching"
          }
        },
        {
          id: 9,
          title: "Grid Path Simulation",
          difficulty: "hard",
          link: "https://leetcode.com/problems/robot-room-cleaner/",
          description: "Builds on #8: Multiple movements",
          details: {
            keyDifference: "visited.add(pos); backtrack() - Added path memory",
            commonError: "Visited state tracking",
            optimization: "Path compression"
          }
        },
        {
          id: 10,
          title: "Robot Bounded Grid",
          difficulty: "medium",
          link: "https://leetcode.com/problems/alphabet-board-path/",
          description: "Builds on #9: Path tracking",
          details: {
            keyDifference: "if (isValid(nextPos)) move() - Added boundary checks",
            commonError: "Edge case movements",
            optimization: "Boundary preprocessing"
          }
        }
      ]
    },
    {
      title: "Queue Simulation Games",
      questions: [
        {
          id: 11,
          title: "Simple Queue Game",
          difficulty: "easy",
          link: "https://leetcode.com/problems/time-needed-to-buy-tickets/",
          description: "Base Pattern: Queue simulation",
          details: {
            keyDifference: "while (!queue.empty()) process() - Basic queue processing",
            commonError: "Queue ordering",
            optimization: "Early termination"
          }
        },
        {
          id: 12,
          title: "Queue Matching Game",
          difficulty: "easy",
          link: "https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/",
          description: "Builds on #11: Basic queue",
          details: {
            keyDifference: "if (front matches stack.top()) match() - Added matching condition",
            commonError: "Infinite loops",
            optimization: "Preference counting"
          }
        },
        {
          id: 13,
          title: "Multi-Queue Game",
          difficulty: "medium",
          link: "https://leetcode.com/problems/dota2-senate/",
          description: "Builds on #12: Queue matching",
          details: {
            keyDifference: "queue2.process(queue1.front()) - Added queue interaction",
            commonError: "Queue synchronization",
            optimization: "Dual queue tracking"
          }
        },
        {
          id: 14,
          title: "Circular Queue Game",
          difficulty: "medium",
          link: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
          description: "Builds on #13: Queue interaction",
          details: {
            keyDifference: "next = (current + k) % n - Added circular processing",
            commonError: "Modulo calculation",
            optimization: "Josephus formula"
          }
        },
        {
          id: 15,
          title: "Priority Queue Game",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-orders-in-the-backlog/",
          description: "Builds on #14: Circular processing",
          details: {
            keyDifference: "priorityQueue.process(element) - Added priority handling",
            commonError: "Priority updates",
            optimization: "Heap implementation"
          }
        }
      ]
    },
    {
      title: "Event Processing Simulation",
      questions: [
        {
          id: 16,
          title: "Basic Event Processor",
          difficulty: "medium",
          link: "https://leetcode.com/problems/my-calendar-ii/",
          description: "Base Pattern: Event handling",
          details: {
            keyDifference: "processEvent(event) - Simple event processing",
            commonError: "Event ordering",
            optimization: "Interval tree"
          }
        },
        {
          id: 17,
          title: "Event Scheduler",
          difficulty: "medium",
          link: "https://leetcode.com/problems/task-scheduler/",
          description: "Builds on #16: Basic events",
          details: {
            keyDifference: "if (time - lastEvent >= cooldown) schedule() - Added timing constraints",
            commonError: "Cooldown tracking",
            optimization: "Greedy scheduling"
          }
        },
        {
          id: 18,
          title: "Event Conflict Resolution",
          difficulty: "hard",
          link: "https://leetcode.com/problems/process-restricted-friend-requests/",
          description: "Builds on #17: Timed events",
          details: {
            keyDifference: "if (!hasConflict(events)) process() - Added conflict checking",
            commonError: "Circular conflicts",
            optimization: "Union-find structure"
          }
        },
        {
          id: 19,
          title: "Event Broadcasting",
          difficulty: "medium",
          link: "https://leetcode.com/problems/design-file-system/",
          description: "Builds on #18: Conflict handling",
          details: {
            keyDifference: "for (listener in listeners) notify() - Added event propagation",
            commonError: "Notification order",
            optimization: "Event batching"
          }
        },
        {
          id: 20,
          title: "Event Analytics",
          difficulty: "medium",
          link: "https://leetcode.com/problems/design-underground-system/",
          description: "Builds on #19: Event broadcasting",
          details: {
            keyDifference: "stats.update(event); return analyze() - Added statistical tracking",
            commonError: "Concurrent updates",
            optimization: "Running averages"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Simple state tracking → Complex state machines",
      "Basic grid movement → Multi-entity coordination",
      "Queue processing → Advanced queue games",
      "Event handling → Complex event systems"
    ],
    coreTechniques: [
      "State machine design",
      "Grid navigation algorithms",
      "Queue and priority queue operations",
      "Event-driven programming"
    ],
    implementationGuidelines: [
      {
        title: "State Management",
        code: `
class StateMachine:
    def __init__(self):
        self.state = 'INITIAL'
        self.transitions = {
            'INITIAL': {'start': 'RUNNING'},
            'RUNNING': {'pause': 'PAUSED', 'stop': 'STOPPED'},
            'PAUSED': {'resume': 'RUNNING', 'stop': 'STOPPED'},
            'STOPPED': {'reset': 'INITIAL'}
        }
    
    def transition(self, action):
        if action in self.transitions[self.state]:
            self.state = self.transitions[self.state][action]
            return True
        return False
        `
      },
      {
        title: "Resource Tracking",
        code: `
def track_resources(resources):
    counts = {}
    for resource in resources:
        counts[resource] = counts.get(resource, 0) + 1
    return counts
        `
      },
      {
        title: "Grid Operations",
        code: `
def is_valid_move(grid, x, y):
    return 0 <= x < len(grid) and 0 <= y < len(grid[0])

def get_neighbors(grid, x, y):
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    return [(x + dx, y + dy) for dx, dy in directions if is_valid_move(grid, x + dx, y + dy)]
        `
      },
      {
        title: "Event Processing",
        code: `
class EventProcessor:
    def __init__(self):
        self.events = []
    
    def add_event(self, event):
        self.events.append(event)
    
    def process_events(self):
        while self.events:
            event = self.events.pop(0)
            self.handle_event(event)
    
    def handle_event(self, event):
        # Implement event-specific logic here
        pass
        `
      }
    ],
    testingStrategy: [
      "Test all possible state transitions",
      "Verify boundary conditions in grid movements",
      "Test queue operations with various sizes and priorities",
      "Simulate complex event sequences",
      "Stress test with large inputs and edge cases"
    ],
    commonPitfalls: [
      "Incorrect state transition logic",
      "Off-by-one errors in grid navigation",
      "Infinite loops in queue processing",
      "Race conditions in event handling",
      "Inefficient data structures leading to performance issues"
    ]
  }
}

