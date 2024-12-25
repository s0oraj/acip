import { Animation } from '@/types';
import { Terminal, Box, RotateCcw, ArrowLeftRight, Database } from 'lucide-react';

export const patterns = {
  commandProcessor: {
    data: ['PUSH /home', 'PUSH /about', 'BACK', 'FORWARD', 'PUSH /contact'],
    icon: 'terminal',
    title: "Command Processor",
    desc: "Browser History",
    color: "#4F46E5"
  },
  vendingMachine: {
    data: ['INSERT_COIN', 'SELECT_ITEM', 'DISPENSE', 'RETURN_CHANGE'],
    icon: 'box',
    title: "Vending Machine",
    desc: "State Transitions",
    color: "#7C3AED"
  },
  textEditor: {
    data: ['TYPE abc', 'UNDO', 'TYPE def', 'REDO'],
    icon: 'rotateCcw',
    title: "Text Editor",
    desc: "History Tracking",
    color: "#2563EB"
  }
};

export const stateMachineAnimation: Animation = {
  id: "state-machine",
  title: "State Machine Operations",
  description: "Understanding different types of state transitions and operations",
  steps: [
    {
      title: "Command Processor",
      description: "Track state changes in a browser history system",
      array: patterns.commandProcessor.data,
      phases: patterns.commandProcessor.data.map((command, index) => ({
        description: index === 0 
          ? "Initialize state machine" 
          : `Process command: ${command}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: patterns.commandProcessor.data
          .slice(0, index + 1)
          .reduce((acc: any, curr) => {
            switch (curr.split(' ')[0]) {
              case 'PUSH':
                acc.history.push(curr.split(' ')[1]);
                acc.current = acc.history.length - 1;
                break;
              case 'BACK':
                acc.current = Math.max(0, acc.current - 1);
                break;
              case 'FORWARD':
                acc.current = Math.min(acc.history.length - 1, acc.current + 1);
                break;
            }
            return acc;
          }, { history: [], current: -1 }),
        code: index === 0 
          ? "const state = { history: [], current: -1 };" 
          : `processCommand("${command}");`
      }))
    }
  ],
  counters: []
};
