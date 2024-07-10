import AsyncStorage from "@react-native-async-storage/async-storage";

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const setItem = async (key: string, value: object) => {
  try {
    console.log("setItem : value ", value);
    const jsonValue = JSON.stringify(value);
    console.log("setItem : ", jsonValue);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e: any) {
    // saving error
    console.log("DB Error", e);
  }
};
export const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log("getItem : ", jsonValue);
    return jsonValue != null ? await JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("DB Error", e);
  }
};
