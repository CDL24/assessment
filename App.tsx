import React from "react";
import { LogBox, StatusBar, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";

import Navigation from "./src/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
import { AuthContextProvider } from "context/AuthContext";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "redux/store";
import LoadingPlaceholder from "@shared-components/LoadingPlaceholder/LoadingPlaceholder";

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
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback={<LoadingPlaceholder />}>
          <Navigation />
        </React.Suspense>
      </QueryClientProvider>
      </Provider>
    </AuthContextProvider>
  );
};

export default App;
