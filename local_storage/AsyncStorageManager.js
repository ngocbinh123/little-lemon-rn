import AsyncStorage from "@react-native-async-storage/async-storage";
const AsyncStorageManager = {
  saveData: async (key, value) => {
    try {
      const valueStr = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueStr);
    } catch (error) {
      console.log("Error saving data:", error);
    }
  },
  getData: async (key) => {
    try {
      const valueStr = await AsyncStorage.getItem(key);
      if (valueStr !== null) {
        return JSON.parse(valueStr);
      }
    } catch (error) {
      console.log("Error getting data:", error);
      return null;
    }
  },
  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log("Error clearing data:", error);
    }
  },
};
export default AsyncStorageManager;
