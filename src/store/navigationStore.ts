import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Types
export type LevelNumber = 1 | 2 | 3 | 4
export type SceneType = 'main' | 'galaxy' | 'roadmap'

interface NavigationState {
  // Scene Management
  currentScene: SceneType
  isTransitioning: boolean
  cursorStyle: 'default' | 'grab' | 'grabbing'
  
  // Level & Pattern Management
  selectedLevel: LevelNumber | null
  selectedPatternId: number | null
  
  // Level to Pattern Mapping
  levelPatterns: Record<LevelNumber, number[]>
  
  // Actions
  setCurrentScene: (scene: SceneType) => void
  setIsTransitioning: (isTransitioning: boolean) => void
  setCursorStyle: (style: 'default' | 'grab' | 'grabbing') => void
  setSelectedLevel: (level: LevelNumber | null) => void
  setSelectedPatternId: (patternId: number | null) => void
}

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      // Initial State
      currentScene: 'main',
      isTransitioning: false,
      cursorStyle: 'default',
      selectedLevel: null,
      selectedPatternId: null,
      
      // Map levels to pattern IDs
      levelPatterns: {
        1: [1, 2, 3],       // Level 1 patterns
        2: [4, 5, 6],       // Level 2 patterns
        3: [7, 8],          // Level 3 patterns
        4: [9, 10, 11]      // Level 4 patterns
      },
      
      // Actions
      setCurrentScene: (scene) => set({ currentScene: scene }),
      setIsTransitioning: (isTransitioning) => set({ isTransitioning }),
      setCursorStyle: (style) => set({ cursorStyle: style }),
      setSelectedLevel: (level) => set({ selectedLevel: level }),
      setSelectedPatternId: (patternId) => set({ selectedPatternId: patternId }),
    }),
    {
      name: 'navigation-storage'
    }
  )
)