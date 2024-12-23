// src/components/pattern/ArrowConnector.tsx
interface ArrowConnectorProps {
  isEndOfRow: boolean;
}

export const ArrowConnector = ({ isEndOfRow }: ArrowConnectorProps) => {
  if (isEndOfRow) {
    return (
      <div className="absolute right-0 top-1/2 w-32 h-48 overflow-visible">
        <svg 
          className="curved-arrow absolute -right-16 -top-8 w-32 h-48 text-blue-400/50 dark:text-blue-600/50"
          viewBox="0 0 128 192"
        >
          <path
            d="M 0,24 C 32,24 96,24 96,96 C 96,168 32,168 0,168"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="curved-arrow-path"
          />
          <path
            d="M 8,160 L 0,168 L 8,176"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute top-1/2 -right-8 w-8 h-8">
      <svg 
        className="straight-arrow w-8 h-8 text-blue-400/50 dark:text-blue-600/50"
        viewBox="0 0 32 32"
      >
        <path
          d="M 0,16 L 24,16 M 16,8 L 24,16 L 16,24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="straight-arrow-path"
        />
      </svg>
    </div>
  );
};
