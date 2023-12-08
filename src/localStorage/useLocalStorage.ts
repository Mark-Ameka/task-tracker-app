export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      const existingItemsString = window.localStorage.getItem(key);
      const existingItems: unknown[] = existingItemsString
        ? JSON.parse(existingItemsString)
        : [];

      existingItems.push(value);

      window.localStorage.setItem(key, JSON.stringify(existingItems));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = () => {
    try {
      const items = window.localStorage.getItem(key);
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return { setItem, getItem };
};
