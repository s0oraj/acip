import { stateMachineAnimation } from './state-machine-simulation/data';
import StateMachineVisualizer from './state-machine-simulation/visualizer';
import { gridMovementAnimation } from './grid-movement-simulation/data';
import GridMovementVisualizer from './grid-movement-simulation/visualizer';
import { queueSimulationAnimation } from './queue-simulation-games/data';
import QueueSimulationVisualizer from './queue-simulation-games/visualizer';
import { eventProcessingAnimation } from './event-processing-simulation/data';
import EventProcessingVisualizer from './event-processing-simulation/visualizer';

// Export all animation data
export const simulationAnimations = {
  "state-machine-simulation": stateMachineAnimation,
  "grid-movement-simulation": gridMovementAnimation,
  "queue-simulation-games": queueSimulationAnimation,
  "event-processing-simulation": eventProcessingAnimation
};

// Export all visualizers
export const visualizers = {
  "state-machine-simulation": StateMachineVisualizer,
  "grid-movement-simulation": GridMovementVisualizer,
  "queue-simulation-games": QueueSimulationVisualizer,
  "event-processing-simulation": EventProcessingVisualizer
};
