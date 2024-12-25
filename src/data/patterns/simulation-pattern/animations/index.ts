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
  "state-machine": stateMachineAnimation,
  "grid-movement": gridMovementAnimation,
  "queue-simulation": queueSimulationAnimation,
  "event-processing": eventProcessingAnimation
};

// Export all visualizers
export const simulationVisualizers = {
  "state-machine": StateMachineVisualizer,
  "grid-movement": GridMovementVisualizer,
  "queue-simulation": QueueSimulationVisualizer,
  "event-processing": EventProcessingVisualizer
};

}
