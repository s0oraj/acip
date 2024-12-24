import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@reach/dialog';
import { Suspense } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  Visualizer?: React.ReactNode;
}

const MyComponent: React.FC<Props> = ({ isOpen, onClose, title, Visualizer }) => {
  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={onClose}
      className="max-w-[95vw] w-full max-h-[90vh]"
    >
      <DialogContent className="max-w-[95vw] w-full max-h-[90vh] overflow-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-0">
          <Suspense fallback={<div>Loading...</div>}>
            {Visualizer && <Visualizer />}
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MyComponent;


// Add these styles to your Dialog component's base styles (e.g., in a global stylesheet or styled-components)
.dialog-content {
  width: 95vw;
  max-width: 95vw;
  max-height: 90vh;
  overflow: auto;
}
