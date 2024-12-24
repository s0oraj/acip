import React, { Suspense } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface AnimationDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  Visualizer?: React.ComponentType
}

const AnimationDialog: React.FC<AnimationDialogProps> = ({
  isOpen,
  onClose,
  title,
  Visualizer
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-[95vw] max-h-[90vh] p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto p-6 h-[calc(90vh-4rem)]">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }>
            {Visualizer && <Visualizer />}
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AnimationDialog

