import { useLayoutEffect, useState } from 'react';

const isDarkTheme = window?.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || defaultTheme,
  );

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('app-theme', theme);
      return;
    }
    document.documentElement.classList.remove('dark');
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
