// In AnimationDialog.tsx, update the code to:
const AnimationDialog = ({ isOpen, onClose, pattern, subpattern }: AnimationDialogProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
  }, [isOpen]);

  const DynamicVisualizer = lazy(() => {
    const importPath = `@/data/patterns/${pattern}/animations/${subpattern}/visualizer`;
    console.log('Full import path:', importPath);
    console.log('Pattern:', pattern);
    console.log('Subpattern:', subpattern);
    
    return import(importPath)
      .then(module => {
        console.log('Successfully loaded module:', module);
        return module;
      })
      .catch(err => {
        console.error('Import error details:', {
          error: err.message,
          stack: err.stack,
          pattern,
          subpattern,
          importPath
        });
        setError(`Failed to load visualizer: ${err.message}`);
        throw err;
      });
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-4">
        <Card className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-4">
            {error ? (
              <div className="text-red-500">
                <p>Error loading visualizer</p>
                <p className="font-mono text-sm">{error}</p>
                <p className="mt-2 text-sm">Debug info:</p>
                <pre className="text-xs bg-gray-100 p-2 mt-1 rounded">
                  Pattern: {pattern}
                  Subpattern: {subpattern}
                  Path: @/data/patterns/{pattern}/animations/{subpattern}/visualizer
                </pre>
              </div>
            ) : (
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                </div>
              }>
                <DynamicVisualizer />
              </Suspense>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
