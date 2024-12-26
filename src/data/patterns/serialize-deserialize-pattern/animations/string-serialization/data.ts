import { Animation } from '@/types';
import { Type } from 'lucide-react';

export const patterns = {
  basicStringEncoding: {
    icon: 'type',
    title: "Basic String Encoding",
    desc: "Length prefix encoding",
    color: "#4F46E5"
  },
  characterRunEncoding: {
    icon: 'type',
    title: "Character Run Encoding",
    desc: "Consecutive element counting",
    color: "#7C3AED"
  },
  delimitedStringEncoding: {
    icon: 'type',
    title: "Delimited String Encoding",
    desc: "Custom delimiter handling",
    color: "#2563EB"
  },
  variableWidthEncoding: {
    icon: 'type',
    title: "Variable Width Encoding",
    desc: "Dynamic field width",
    color: "#DB2777"
  }
};

export const stringSerialization: Animation = {
  id: "string-serialization",
  title: "String Serialization",
  description: "Various techniques for serializing strings",
  steps: [
    {
      title: "Basic String Encoding",
      description: "Encode strings using length prefix",
      input: ["Hello", "World"],
      phases: [
        { description: "Initialize", encoded: "" },
        { description: 'Encode "Hello"', encoded: "5#Hello" },
        { description: 'Encode "World"', encoded: "5#Hello5#World" },
        { description: "Decoding", decoded: ["Hello", "World"] }
      ]
    },
    {
      title: "Character Run Encoding",
      description: "Encode strings using run-length encoding",
      input: "AABBBCCCC",
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode 'AA'", encoded: "A2" },
        { description: "Encode 'BBB'", encoded: "A2B3" },
        { description: "Encode 'CCCC'", encoded: "A2B3C4" },
        { description: "Decoding", decoded: "AABBBCCCC" }
      ]
    },
    {
      title: "Delimited String Encoding",
      description: "Encode strings using custom delimiters",
      input: "a,b,c",
      delimiter: "|",
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode 'a'", encoded: "a|" },
        { description: "Encode 'b'", encoded: "a|b|" },
        { description: "Encode 'c'", encoded: "a|b|c" },
        { description: "Decoding", decoded: ["a", "b", "c"] }
      ]
    },
    {
      title: "Variable Width Encoding",
      description: "Encode strings using variable width fields",
      input: [1, 128, 255],
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode 1", encoded: "01" },
        { description: "Encode 128", encoded: "018080" },
        { description: "Encode 255", encoded: "0180808001" },
        { description: "Decoding", decoded: [1, 128, 255] }
      ]
    }
  ]
};
