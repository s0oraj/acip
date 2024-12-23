// src/components/layout/BackgroundGradient.tsx
export const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-full blur-3xl opacity-80" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-full blur-3xl opacity-80" />
    </div>
  );
};
