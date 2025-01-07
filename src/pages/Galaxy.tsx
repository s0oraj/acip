// src/pages/index.tsx
import { useEffect, useState } from 'react'
import { useNavigationStore } from '../store/navigationStore'
import Scene from '../components/galaxy/Scene'
import GalaxyLoadingVisuals from '../components/galaxy/GalaxyLoadingVisuals'
import { AnimatePresence, motion } from 'framer-motion'

const Galaxy = () => {
  const { setCurrentScene } = useNavigationStore()
  const [isLoading, setIsLoading] = useState(true)
  const [isSceneReady, setIsSceneReady] = useState(false)

  useEffect(() => {
    setCurrentScene('galaxy')
    
    // Simulate scene loading time - replace with actual loading logic if needed
    const loadTimer = setTimeout(() => {
      setIsSceneReady(true)
    }, 1000)

    return () => clearTimeout(loadTimer)
  }, [setCurrentScene])
  // Handle scene ready state
  const handleSceneReady = () => {
    const transitionTimer = setTimeout(() => {
      setIsLoading(false)
    }, 500) // Give a small buffer after scene is ready before removing loading visual

    return () => clearTimeout(transitionTimer)
  }


  useEffect(() => {
    if (isSceneReady) {
      handleSceneReady()
    }
  }, [isSceneReady])

  return (
    <div className="h-screen w-full bg-loading-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <GalaxyLoadingVisuals isLoading={isLoading} />
          </motion.div>
        ) : null}
        
        <motion.div
          key="scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSceneReady ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Scene />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Galaxy