import { AuthData } from "@services/models";
import { KEYS } from "@shared-constants";
import React, { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "utils";

type AuthContextData = {
    authData?: AuthData;
    signIn(): void;
    signOut(): void;
    guestSignIn(): Promise<void>;
  };

type AuthContextProviderData = {
    children: React.ReactNode;
};
export const AuthContext = createContext({} as AuthContextData)

export const AuthContextProvider = ({children}:AuthContextProviderData) =>{
    const [authData, setAuthData] = useState<AuthData>();
    const [isLoading, setLoading] = useState<boolean>(false);

    const guestSignIn = async () => {
        setAuthData({
        email: 'guest@gmail.com',
        name: 'Guest',
        });
    };
    const signIn = async (user: AuthData) => {
        setLoading(true)
        await setItem(KEYS.USER, user)
        setAuthData(user)
        setLoading(false)
        console.log('SignIn...',user)
    };
    const isLoggedIn = async () => {
        setLoading(true)
        const userData = await getItem(KEYS.USER)
        setAuthData(userData)
        setLoading(false)
    };
    const signOut = async () => {
        setLoading(true)
        setItem(KEYS.USER, {})
        setAuthData(undefined)
        setLoading(false)
    };
    useEffect(()=>{
        isLoggedIn()
    },[])
    return <AuthContext.Provider value={{authData, signIn, signOut, guestSignIn, isLoggedIn, isLoading}}>{children}</AuthContext.Provider>
}