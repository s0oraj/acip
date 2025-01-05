import React from 'react'
import { Lock, Unlock, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

interface ControlButtonsProps {
  isLocked: boolean
  setIsLocked: (locked: boolean) => void
  handleZoom: (zoomIn: boolean) => void
  handleReset: () => void
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  isLocked,
  setIsLocked,
  handleZoom,
  handleReset
}) => {
  return (
    <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2 bg-gray-800/80 p-2 rounded-lg border border-gray-700">
      <button onClick={() => setIsLocked(!isLocked)} className="p-2 hover:bg-gray-700 rounded text-white">
        {isLocked ? <Lock size={24} /> : <Unlock size={24} />}
      </button>
      <button onClick={() => handleZoom(true)} className="p-2 hover:bg-gray-700 rounded text-white">
        <ZoomIn size={24} />
      </button>
      <button onClick={() => handleZoom(false)} className="p-2 hover:bg-gray-700 rounded text-white">
        <ZoomOut size={24} />
      </button>
      <button onClick={handleReset} className="p-2 hover:bg-gray-700 rounded text-white">
        <RotateCcw size={24} />
      </button>
    </div>
  )
}

export default ControlButtons
