import AsyncStorage from '@react-native-async-storage/async-storage';

export const getArrayFromStorage = async (
  key: string,
  defaultValue: {name: string; caughtNumber: number}[] = [],
): Promise<{name: string; caughtNumber: number}[]> => {
  try {
    const storedValue = await AsyncStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error('Failed to load array from storage.', error);
    return defaultValue;
  }
};
