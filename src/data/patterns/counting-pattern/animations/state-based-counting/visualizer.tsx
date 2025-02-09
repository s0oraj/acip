"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, OrbitControls } from "@react-three/drei"
import { GitBranch, GitMerge, Hash, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import { patterns, stateCountingAnimation } from "./data"

const StateTransition3D = ({ char, count, maxCount }) => {
  const meshRef = useRef()
  const scale = useMotionValue(0)
  const opacity = useTransform(scale, [0, 1], [0.3, 1])

  useEffect(() => {
    scale.set(count / maxCount)
  }, [count, maxCount, scale]) // Added scale to dependencies

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#2563EB" transparent opacity={opacity.get()} />
      <Text position={[0, 0, 0.51]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        {char}
      </Text>
      <Text position={[0, -0.7, 0.51]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {count}
      </Text>
    </mesh>
  )
}

const Visualizer = () => {
  const [activePattern, setActivePattern] = useState("stateTransition")
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const pattern = patterns[activePattern]
  const animation = stateCountingAnimation.steps.find((s) => s.title.toLowerCase().includes(activePattern))
  const maxSteps = animation ? animation.array.length : 0

  useEffect(() => {
    let timer
    if (isPlaying && step < maxSteps - 1) {
      timer = setTimeout(() => setStep((s) => s + 1), 1000)
    } else if (step === maxSteps - 1) {
      setIsPlaying(false)
    }
    return () => clearTimeout(timer)
  }, [isPlaying, step, maxSteps])

  const getIcon = (iconName) => {
    switch (iconName) {
      case "git-branch":
        return <GitBranch className="w-5 h-5" />
      case "git-merge":
        return <GitMerge className="w-5 h-5" />
      case "hash":
        return <Hash className="w-5 h-5" />
      default:
        return <Hash className="w-5 h-5" />
    }
  }

  const handleNext = () => {
    const patternKeys = Object.keys(patterns)
    const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length
    setActivePattern(patternKeys[nextIndex])
    setStep(0)
    setIsPlaying(false)
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
          <motion.button
            key={key}
            onClick={() => {
              setActivePattern(key)
              setStep(0)
              setIsPlaying(false)
            }}
            className={`p-4 rounded-xl transition-all ${
              activePattern === key ? "bg-white shadow-lg scale-105" : "bg-gray-50 hover:bg-white hover:shadow"
            }`}
            whileHover={{ scale: activePattern === key ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                {getIcon(icon)}
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
        <motion.div
          className="bg-white p-5 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-3">Input Sequence</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {animation &&
              animation.array.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: idx === step ? 1.1 : 1,
                    opacity: 1,
                    backgroundColor: idx <= step ? "rgb(219 234 254)" : "rgb(243 244 246)",
                  }}
                  className={`min-w-12 h-12 px-3 flex items-center justify-center rounded-lg font-mono text-lg
                  ${idx === step ? "ring-2 ring-blue-500 ring-offset-2" : ""}`}
                >
                  {val}
                </motion.div>
              ))}
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Step {step + 1}</span>
              <span>of {maxSteps}</span>
            </div>
            <motion.div
              className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
            >
              <motion.div
                className="bg-blue-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / maxSteps) * 100}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-5 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-3">State Visualization</h3>
          <div className="h-64">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls />
              {activePattern === "stateTransition" &&
                Array.from(patterns.stateTransition.target).map((char, idx) => (
                  <StateTransition3D
                    key={char}
                    char={char}
                    count={animation.phases[step]?.counter.states[char] || 0}
                    maxCount={maxSteps}
                    position={[(idx - 1) * 2, 0, 0]}
                  />
                ))}
            </Canvas>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-gray-900 p-3 rounded-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <pre className="text-sm text-white overflow-x-auto">
          <code>{animation && animation.phases[step]?.code}</code>
        </pre>
      </motion.div>

      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setStep(Math.max(0, step - 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isPlaying ? "bg-gray-200 hover:bg-gray-300 text-gray-700" : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setStep(0)
            setIsPlaying(false)
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  )
}

export default Visualizer

