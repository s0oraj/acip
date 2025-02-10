// src/data/patterns/simulation-pattern/animations/state-machine/data.ts
import { Animation } from '@/types';
import { History, Car, Edit, Database, Clock } from 'lucide-react';

export const patterns = {
  browser: {
    data: [
      { command: 'visit', url: 'google.com' },
      { command: 'visit', url: 'leetcode.com' },
      { command: 'back', steps: 1 },
      { command: 'forward', steps: 1 },
      { command: 'visit', url: 'github.com' }
    ],
    icon: 'history',
    title: "Command History",
    desc: "Track navigation states",
    color: "#2563EB"
  },
  parking: {
    data: [
      { type: 'big', action: 'park' },
      { type: 'medium', action: 'park' },
      { type: 'small', action: 'park' },
      { type: 'big', action: 'exit' },
      { type: 'medium', action: 'park' }
    ],
    icon: 'car',
    title: "Parking System",
    desc: "Manage parking slots",
    color: "#059669"
  },
  editor: {
    data: [
      { command: 'append', text: 'Hello' },
      { command: 'move', position: 2 },
      { command: 'delete', count: 1 },
      { command: 'undo' },
      { command: 'redo' }
    ],
    icon: 'edit',
    title: "Text Editor",
    desc: "Track edit history",
    color: "#DC2626"
  }
};

const simulateHistory = (commands: any[], currentStep: number) => {
  const history: string[] = [];
  const state = {
    current: '',
    position: 0,
    stack: ['']
  };

  commands.slice(0, currentStep).forEach(cmd => {
    switch (cmd.command) {
      case 'visit':
        state.stack = state.stack.slice(0, state.position + 1);
        state.stack.push(cmd.url);
        state.position++;
        break;
      case 'back':
        state.position = Math.max(0, state.position - cmd.steps);
        break;
      case 'forward':
        state.position = Math.min(state.stack.length - 1, state.position + cmd.steps);
        break;
    }
    history.push(state.stack[state.position]);
  });

  return { history, currentState: state };
};

const simulateParking = (operations: any[], currentStep: number) => {
  const slots = { big: 2, medium: 2, small: 2 };
  const history: any[] = [];

  operations.slice(0, currentStep).forEach(op => {
    if (op.action === 'park') {
      slots[op.type]--;
    } else {
      slots[op.type]++;
    }
    history.push({ ...slots });
  });

  return { history, currentState: slots };
};

export const stateMachineAnimation: Animation = {
  id: "state-machine",
  title: "State Machine Simulations",
  description: "Visualizing different types of state machines and their transitions",
  steps: [
    {
      title: "Browser History Navigation",
      description: "Simulating browser history state changes",
      array: patterns.browser.data,
      phases: patterns.browser.data.map((cmd, index) => ({
        description: `Execute command: ${cmd.command}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: simulateHistory(patterns.browser.data, index + 1),
        code: `executeCommand('${cmd.command}', ${JSON.stringify(cmd)})`
      }))
    },
    {
      title: "Parking System Management",
      description: "Managing parking slots state changes",
      array: patterns.parking.data,
      phases: patterns.parking.data.map((op, index) => ({
        description: `Process ${op.action} for ${op.type} vehicle`,
        activeIndex: index,
        highlightIndices: [index],
        counter: simulateParking(patterns.parking.data, index + 1),
        code: `processParking('${op.action}', '${op.type}')`
      }))
    }
  ],
  counters: ["history", "slots"]
};
