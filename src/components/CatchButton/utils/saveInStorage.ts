import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveArrayToStorage = async (
  key: string,
  array: {name: string; caughtNumber: number}[],
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(array));
  } catch (error) {
    console.error('Failed to save array to storage.', error);
  }
};
