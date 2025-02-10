import { Animation } from '@/types';

export const patterns = {
  commandProcessor: {
    data: ['Home', 'About', 'Services', 'Contact'],
    icon: 'command',
    title: "Command Processor",
    desc: "Simulate browser history navigation",
    color: "#4F46E5"
  },
  vendingMachine: {
    data: ['Idle', 'SelectItem', 'DispenseItem', 'ReturnChange'],
    icon: 'vending',
    title: "Vending Machine",
    desc: "Simulate vending machine states",
    color: "#7C3AED"
  },
  textEditor: {
    data: ['Insert', 'Delete', 'Undo', 'Redo'],
    icon: 'text',
    title: "Text Editor",
    desc: "Simulate text editor states",
    color: "#2563EB"
  }
};

export const stateMachineAnimation: Animation = {
  id: "state-machine",
  title: "State Machine Simulation",
  description: "Simulate state transitions and interactions",
  steps: [
    {
      title: "Command Processor",
      description: "Simulate browser history navigation",
      array: patterns.commandProcessor.data,
      phases: patterns.commandProcessor.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize browser history" 
          : `Navigate to ${val}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: {
          currentState: val,
          history: patterns.commandProcessor.data.slice(0, index + 1)
        },
        code: index === 0 
          ? "const history = ['Home'];" 
          : `history.push('${val}');`
      }))
    },
    {
      title: "Vending Machine",
      description: "Simulate vending machine states",
      array: patterns.vendingMachine.data,
      phases: patterns.vendingMachine.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize vending machine" 
          : `Transition to ${val}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: {
          currentState: val,
          transitions: patterns.vendingMachine.data.slice(0, index + 1)
        },
        code: index === 0 
          ? "const states = ['Idle'];" 
          : `states.push('${val}');`
      }))
    }
  ],
  counters: []
};
