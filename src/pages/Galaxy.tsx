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
    
    // Slightly reduced loading time
    const loadTimer = setTimeout(() => {
      setIsSceneReady(true)
    }, 800)

    return () => clearTimeout(loadTimer)
  }, [setCurrentScene])

  useEffect(() => {
    if (isSceneReady) {
      // Reduced transition buffer
      const transitionTimer = setTimeout(() => {
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(transitionTimer)
    }
  }, [isSceneReady])

  return (
    <div className="h-screen w-full bg-loading-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-10"
          >
            <GalaxyLoadingVisuals isLoading={isLoading} />
          </motion.div>
        )}
        
        <motion.div
          key="scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSceneReady ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Scene />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Galaxy