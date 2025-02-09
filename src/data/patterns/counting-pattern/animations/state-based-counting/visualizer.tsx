"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GitBranch, GitMerge, Network } from "lucide-react"
import { patterns } from "./data"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState("stateTransition")
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "git-branch":
        return <GitBranch className="w-5 h-5" />
      case "git-merge":
        return <GitMerge className="w-5 h-5" />
      case "network":
        return <Network className="w-5 h-5" />
      default:
        return <GitBranch className="w-5 h-5" />
    }
  }

  const renderStateVisualization = () => {
    const pattern = patterns[activePattern as keyof typeof patterns]

    if (activePattern === "stateTransition") {
      return (
        <motion.div
          layout
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {Array.from(pattern.data)
            .slice(0, step + 1)
            .map((char, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="text-2xl font-bold text-center mb-2">{char}</div>
                <div className="text-sm text-gray-600 text-center">
                  Count: {(pattern.data.slice(0, step + 1).match(new RegExp(char, "g")) || []).length}
                </div>
              </motion.div>
            ))}
        </motion.div>
      )
    }

    if (activePattern === "multiState") {
      return (
        <motion.div
          layout
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {pattern.states.map((state, idx) => (
            <motion.div
              key={state}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                {state}
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${
                        (pattern.data
                          .slice(0, step + 1)
                          .split("")
                          .filter((c) => c === state).length /
                          pattern.data.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )
    }

    return null
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Tabs defaultValue={activePattern} onValueChange={setActivePattern}>
        <TabsList className="grid grid-cols-3 mb-8">
          {Object.entries(patterns).map(([key, { title, icon, color }]) => (
            <TabsTrigger key={key} value={key} className="flex items-center gap-2 p-4">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                {getIcon(icon)}
              </div>
              <span>{title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Card className="p-6 mb-8">
        <AnimatePresence mode="wait">{renderStateVisualization()}</AnimatePresence>
      </Card>

      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep(Math.max(0, step - 1))}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Previous
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsPlaying(!isPlaying)
            if (!isPlaying && step < patterns[activePattern].data.length - 1) {
              setStep(step + 1)
            }
          }}
          className="px-4 py-2 rounded-lg bg-primary text-white"
        >
          {isPlaying ? "Pause" : "Play"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep(Math.min(patterns[activePattern].data.length - 1, step + 1))}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Next
        </motion.button>
      </div>

      <div className="mt-8 bg-gray-900 rounded-lg p-4">
        <pre className="text-sm text-white overflow-x-auto">
          <code>
            {activePattern === "stateTransition"
              ? `// LeetCode 2207: Maximize Number of Subsequences
const states = {};
states['${patterns.stateTransition.data[step] || "char"}'] += 1;`
              : `// LeetCode 1419: Minimum Number of Frogs Croaking
const states = {};
states['${patterns.multiState.data[step] || "char"}'] += 1;`}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Visualizer

