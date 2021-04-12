
export const getLocalStorage: (key: string) => string | null = (key: string) => {
  return localStorage.getItem(key);
};