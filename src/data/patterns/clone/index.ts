import { Pattern } from '@/types';
import { basicObjectCloning } from './basic-object-cloning';
import { treeCloning } from './tree-cloning';
import { graphCloning } from './graph-cloning';
import { deepCopyTechniques } from './deep-copy-techniques';
import { advancedCloning } from './advanced-cloning';

export const clonePattern: Pattern = {
  id: 8,
  title: "Clone Pattern",
  description: "Master techniques for creating deep copies of complex data structures and objects.",
  subpatterns: [
    basicObjectCloning,
    treeCloning,
    graphCloning,
    deepCopyTechniques,
    advancedCloning
  ],
  questions: [], // All questions are now in subpatterns
  summary: {
    progressionElements: [
      "Shallow copy → Deep copy",
      "Simple objects → Complex nested structures",
      "Acyclic structures → Cyclic graphs",
      "Homogeneous data → Heterogeneous object graphs"
    ],
    coreTechniques: [
      "Recursive cloning",
      "Iterative cloning with stack/queue",
      "Hash map for cycle detection",
      "Visitor pattern for complex object graphs"
    ],
    implementationGuidelines: [
      {
        title: "Basic Deep Clone Template",
        code: `
def deep_clone(obj, memo=None):
    if memo is None:
        memo = {}
    
    # Base cases: immutable types
    if isinstance(obj, (int, float, str, bool, type(None))):
        return obj
    
    # Handle cyclic references
    if id(obj) in memo:
        return memo[id(obj)]
    
    # Clone lists
    if isinstance(obj, list):
        clone = []
        memo[id(obj)] = clone
        for item in obj:
            clone.append(deep_clone(item, memo))
        return clone
    
    # Clone dictionaries
    if isinstance(obj, dict):
        clone = {}
        memo[id(obj)] = clone
        for key, value in obj.items():
            clone[deep_clone(key, memo)] = deep_clone(value, memo)
        return clone
    
    # For custom objects, you might need to implement __deepcopy__
    raise TypeError(f"Object of type {type(obj)} is not JSON serializable")
        `
      }
    ],
    testingStrategy: [
      "Test with various object types (primitives, lists, dicts, custom objects)",
      "Verify correctness with cyclic references",
      "Check deep equality of original and cloned objects",
      "Test performance with large, deeply nested structures",
      "Validate memory usage during cloning process"
    ]
  }
};

