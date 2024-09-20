import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async <T>(key: string): Promise<T | null> => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const setItem = async <T>(key: string, value: T): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = async (key: string): Promise<void> => {
  return AsyncStorage.removeItem(key);
};
