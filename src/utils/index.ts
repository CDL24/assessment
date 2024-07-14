import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthData, UserObj } from "@services/models";
import { translations } from "shared/localization";

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const setItem = async (key: string, value: object | string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e: any) {
    // saving error
    console.log("DB Error", e);
  }
};
export const getItem = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? await JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("DB Error", e);
  }
};
export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("DB Error", e);
  }
};
export const authenticateUser = async (
  userEmail: string,
  userPassword: string,
  authData: AuthData | undefined,
  signIn: (value: AuthData) => void,
) => {
  
  if (authData && userEmail && userPassword) {
    const { email, password } = authData;
    if (email === userEmail && password === userPassword) {
      const updatedData = { ...authData };
      updatedData.isLoggedIn = true;
      updatedData.isGuestLoggedIn = false;
      signIn(updatedData);
      return { authenticate: true };
    }
  }
  return { authenticate: false };
};
/**
 * 
 * @param values object of userInput data
 * @param signIn function which store user in DB
 */
export const doSignUp = (values: UserObj, signIn: (value: AuthData) => void) => {
  const {firstName, lastName, email, password} = values;
  const user: AuthData = {
    name: firstName+' '+lastName,
    email: email,
    password: password,
    isLoggedIn: true,
    isGuestLoggedIn: false,
  };
 signIn(user);
};

export const getProfileName = (authData: AuthData | undefined) : string =>{
  let welcomeString = ''
  if(authData && authData.isGuestLoggedIn) welcomeString = translations.formatString(translations.welcomeMsg, 'Guest').toString()
  if(authData && !authData.isGuestLoggedIn && authData.isLoggedIn && authData.name) welcomeString = translations.formatString(translations.welcomeMsg, authData.name).toString()
  return welcomeString
}