const AnimationDialog = ({ isOpen, onClose, pattern, subpattern }: AnimationDialogProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset error when dialog opens/closes
    setError(null);
  }, [isOpen]);

  const attemptedPath = `/data/patterns/${pattern}/animations/${subpattern}/visualizer`;

  const DynamicVisualizer = lazy(() => 
    import(`@/data/patterns/${pattern}/animations/${subpattern}/visualizer`)
      .catch(err => {
        setError(`Failed to load: ${attemptedPath}`);
        throw err;
      })
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-4">
        <Card className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-4">
            {error ? (
              <div className="text-red-500">
                <p>Error loading visualizer</p>
                <p className="font-mono text-sm">{error}</p>
              </div>
            ) : (
              <Suspense fallback={<div>Loading visualization...</div>}>
                <DynamicVisualizer />
              </Suspense>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
