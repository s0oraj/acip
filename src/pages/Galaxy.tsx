// src/pages/index.tsx
import { useEffect } from 'react'
import { useNavigationStore } from '../store/navigationStore'
import Scene from '../components/galaxy/Scene'

const Galaxy = () => {
  const { setCurrentScene } = useNavigationStore()
  
  useEffect(() => {
    setCurrentScene('galaxy')
  }, [setCurrentScene])

  return (
    <div className="h-screen w-full bg-black">
      <Scene />
    </div>
  ) 
}

export default Galaxy
