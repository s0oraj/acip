import { useEffect, useState } from 'react'
import { useNavigationStore } from '../store/navigationStore'
import Scene from '../components/galaxy/Scene'
import GalaxyLoadingVisuals from '../components/galaxy/GalaxyLoadingVisuals'
import { AnimatePresence, motion } from 'framer-motion'

const Galaxy = () => {
  const { setCurrentScene, setIsSceneReady, isSceneReady } = useNavigationStore()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setCurrentScene('galaxy')
    setIsSceneReady(false) // Reset on mount
    
    const loadTimer = setTimeout(() => {
      setIsSceneReady(true)
    }, 800)

    return () => {
      clearTimeout(loadTimer)
      setIsSceneReady(false) // Clean up on unmount
    }
  }, [setCurrentScene, setIsSceneReady])

  useEffect(() => {
    if (isSceneReady) {
      const transitionTimer = setTimeout(() => {
        setIsLoading(false)
      }, 500)

      return () => clearTimeout(transitionTimer)
    }
  }, [isSceneReady])

  return (
    <div className="h-screen w-full bg-loading-black">
      <div className="absolute inset-0">
        <Scene isReady={isSceneReady} />
      </div>
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10 bg-loading-black"
          >
            <GalaxyLoadingVisuals isLoading={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Galaxy