import React from "react";
import { LogBox, StatusBar, Text, useColorScheme, View } from "react-native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";

import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
import { AuthContextProvider } from "context/AuthContext";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect(() => {
    SplashScreen.show();
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback={<View style={{backgroundColor: 'pink', flex:1, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: 'black', fontSize: 28}}>Loading...</Text></View>}>
          <Navigation />
        </React.Suspense>
      </QueryClientProvider>
    </AuthContextProvider>
  );
};

export default App;
