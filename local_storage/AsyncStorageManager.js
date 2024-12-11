import AsyncStorage from "@react-native-async-storage/async-storage";
const AsyncStorageManager = {
  saveData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("Error saving data:", error);
    }
  },
  getData: async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log("Error getting data:", error);
    }
  },
};
export default AsyncStorageManager;
