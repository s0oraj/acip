import { Animation } from '@/types';
import { History, Package, Edit, Cpu, Database } from 'lucide-react';

export const patterns = {
  commandProcessor: {
    states: ['home', 'products', 'cart', 'checkout', 'home'],
    transitions: ['visit', 'back', 'forward', 'visit'],
    icon: 'history',
    title: "Command Processor",
    desc: "Browser history simulation",
    color: "#2563EB"
  },
  vendingMachine: {
    states: ['idle', 'selection', 'payment', 'dispensing', 'idle'],
    transitions: ['insert_coin', 'select_item', 'process_payment', 'complete'],
    icon: 'package',
    title: "Vending Machine",
    desc: "State transitions with validation",
    color: "#7C3AED"
  },
  textEditor: {
    states: ['editing', 'selecting', 'copying', 'pasting', 'editing'],
    transitions: ['select', 'copy', 'paste', 'continue'],
    icon: 'edit',
    title: "Text Editor",
    desc: "History tracking states",
    color: "#059669"
  },
  dualMachine: {
    states: ['sync', 'async', 'updating', 'syncing', 'sync'],
    transitions: ['split', 'process', 'update', 'merge'],
    icon: 'cpu',
    title: "Dual Controller",
    desc: "Machine interaction states",
    color: "#DC2626"
  }
};

export const stateMachineAnimation: Animation = {
  id: "state-machine",
  title: "State Machine Simulation",
  description: "Visualizing different state machine implementations",
  steps: Object.entries(patterns).map(([key, pattern]) => ({
    title: pattern.title,
    description: pattern.desc,
    states: pattern.states,
    phases: pattern.states.map((state, index) => ({
      state,
      transition: pattern.transitions[index],
      description: `Transitioning to ${state} state`,
      activeState: state,
      previousState: index > 0 ? pattern.states[index - 1] : null,
      code: `currentState = '${state}';`
    }))
  }))
};
export default stateMachineAnimation;
