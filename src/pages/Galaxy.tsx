import { useEffect, useState } from 'react'
import { useNavigationStore } from '../store/navigationStore'
import Scene from '../components/galaxy/Scene'
import GalaxyLoadingVisuals from '../components/galaxy/GalaxyLoadingVisuals'
import MatrixIntroHeader from '../components/galaxy/MatrixIntroHeader'
import IntroOverlay from '../components/galaxy/IntroOverlay'
import { AnimatePresence, motion } from 'framer-motion'

const Galaxy = () => {
  const { setCurrentScene, setIsSceneReady, isSceneReady } = useNavigationStore()
  const [isLoading, setIsLoading] = useState(true)
  const [showMatrixIntro, setShowMatrixIntro] = useState(true)
  const [showIntro, setShowIntro] = useState(true)

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

  const handleMatrixIntroComplete = () => {
    setShowMatrixIntro(false)
  }

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  const matrixMessages = [
    { text: "Wake up, Neo...", duration: 2000 },
    { text: "The Matrix has you...", duration: 2000 },
    { text: "Follow the white rabbit...", duration: 2000 },
    { text: "Knock, knock, Neo.", duration: Infinity }
  ]

  
  const introMessages = [
    { text: "Welcome to the Galaxy Map", duration: 3000 },
    { text: "Each bright point represents a level", duration: 3000 },
    { text: "Click on a level to begin your journey", duration: Infinity }
  ]

  return (
    <div className="h-screen w-full bg-loading-black">
      {!isLoading && (
        <div className="absolute inset-0">
          <Scene isReady={isSceneReady} />
        </div>
      )}
      {!isLoading && showMatrixIntro && (
        <div className="absolute inset-0 pointer-events-none">
          <MatrixIntroHeader
            messages={matrixMessages}
            onComplete={handleMatrixIntroComplete}
          />
        </div>
      )}
      {!isLoading && showIntro && (
        <div className="absolute inset-0 pointer-events-none">
          <IntroOverlay
            messages={introMessages}
            onComplete={handleIntroComplete}
          />
        </div>
      )}
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