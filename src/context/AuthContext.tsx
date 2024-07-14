import { AuthData } from "@services/models";
import { KEYS } from "@shared-constants";
import React, { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "utils";

type AuthContextData = {
  authData?: AuthData;
  signIn(value: AuthData): void;
  signOut(): void;
  guestSignIn(): void;
  isLoading: boolean;
  applyTheme(value: string): void;
  appTheme: string;
};

type AuthContextProviderData = {
  children: React.ReactNode;
};
export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderData) => {
  const [authData, setAuthData] = useState<AuthData | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [appTheme, setAppTheme] = useState<string>('light');

  useEffect(() => {
    checkIsLoggedIn();
    checkTheme();
  }, []);

  const guestSignIn = async () => {
    setAuthData({
      email: "guest@gmail.com",
      name: "Guest",
      isLoggedIn: false,
      password: "",
      isGuestLoggedIn: true,
    });
  };
  const signIn = async (user: AuthData) => {
    setLoading(true);
    await setItem(KEYS.USER, user);
    setAuthData(user);
    setIsLoggedIn(true);
    setLoading(false);
  };
  const checkTheme = async () => {
    const appTheme: string = await getItem(KEYS.APP_THEME);
    if (appTheme) {
      setAppTheme(appTheme);
    }
  };
  const applyTheme = async (theme: string) => {
    await setItem(KEYS.APP_THEME, theme);
    setAppTheme(theme);
  };
  const checkIsLoggedIn = async () => {
    setLoading(true);
    const userData: AuthData = await getItem(KEYS.USER);
    if (Object.keys(userData)?.length > 0) {
      setIsLoggedIn(userData.isLoggedIn);
      setAuthData(userData);
    } else {
      setIsLoggedIn(false);
      setAuthData(undefined);
    }
    setLoading(false);
  };
  const signOut = async () => {
    setLoading(true);
    const user: AuthData = await getItem(KEYS.USER);
    const updatedData = { ...user };
    updatedData.isLoggedIn = false;
    await setItem(KEYS.USER, updatedData);
    setAuthData(undefined);
    setIsLoggedIn(false);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, guestSignIn, isLoading, appTheme, applyTheme }}>
      {children}
    </AuthContext.Provider>
  );
};
