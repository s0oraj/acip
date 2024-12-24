export type DifficultyLevel = 'Easy' | 'Easy-Medium' | 'Medium' | 'Medium-Hard' | 'Hard';
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export const getDifficultyLevel = (value: number): DifficultyLevel => {
  if (value <= 4) return 'Easy';
  if (value <= 8) return 'Easy-Medium';
  if (value <= 12) return 'Medium';
  if (value <= 16) return 'Medium-Hard';
  return 'Hard';
};

export const getDifficultyColor = (difficulty: DifficultyLevel): string => {
  const colors = {
    'Easy': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'Easy-Medium': 'bg-teal-100 text-teal-700 border-teal-200',
    'Medium': 'bg-amber-100 text-amber-700 border-amber-200',
    'Medium-Hard': 'bg-orange-100 text-orange-700 border-orange-200',
    'Hard': 'bg-red-100 text-red-700 border-red-200'
  };
  return colors[difficulty];
};

export const calculatePatternDifficulty = (questions: { difficulty: QuestionDifficulty }[]): number => {
  const difficultyValues = {
    easy: 4,
    medium: 12,
    hard: 20
  };

  const total = questions.reduce((sum, question) => {
    return sum + difficultyValues[question.difficulty];
  }, 0);

  return Math.round(total / questions.length);
};
