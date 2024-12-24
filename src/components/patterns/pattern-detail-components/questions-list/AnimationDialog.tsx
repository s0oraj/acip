import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@reach/dialog';
import { Suspense } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  Visualizer?: React.ReactNode;
}

const AnimationDialog: React.FC<Props> = ({ isOpen, onClose, title, Visualizer }) => {
  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={onClose}
    >
      <DialogContent className="fixed inset-5 flex flex-col bg-background rounded-lg shadow-lg max-w-[95vw] w-[95vw] max-h-[90vh] mx-auto my-auto overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto p-6">
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
  );
};

export default AnimationDialog;

