export const level = (num: number) => {
  if (num < 30) return 'хм...)';
  if (num < 50) return 'Использовал в паре проектов';
  if (num < 75) return 'Не плохо владею';
  if (num === 100)
    return 'Меня трудно здесь чем то удивить)';

  return 'Уверенно владею';
};
