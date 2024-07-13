import React, { useContext } from "react";
import { useColorScheme } from "react-native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@screens/home/HomeScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import BookmarkScreen from "@screens/bookmark/BookmarkScreen";

/**
 * ? Local & Shared Imports
 */
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme, palette } from "@theme/themes";
import SignInScreen from "@screens/auth/signin/SignInScreen";
import SignUpScreen from "@screens/auth/signup/SignUpScreen";
import { AuthContext } from "context/AuthContext";
import HOME_ACTIVE from "assets/images/home_active.svg";
import HOME_INACTIVE from "assets/images/home_inactive.svg";
import BOOKMARK_ACTIVE from "assets/images/bookmark_active.svg";
import BOOKMARK_INACTIVE from "assets/images/bookmark_inactive.svg";
import NOTIFICATION_ACTIVE from "assets/images/notification_active.svg";
import NOTIFICATION_INACTIVE from "assets/images/notification_inactive.svg";
import PROFILE_ACTIVE from "assets/images/profile_active.svg";
import PROFILE_INACTIVE from "assets/images/profile_inactive.svg";

// ? If you want to use stack or tab or both
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStackNavigator = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const { authData } = useContext(AuthContext);
  console.log("authData:", authData, "isLoggedIn:", authData?.isLoggedIn);

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (
    route: any,
    focused: boolean
  ) => {
    switch (route.name) {
      case SCREENS.HOME:
        return focused ? <HOME_ACTIVE /> : <HOME_INACTIVE />
      case SCREENS.SEARCH:
        return focused ? <BOOKMARK_ACTIVE /> : <BOOKMARK_INACTIVE />
      case SCREENS.NOTIFICATION:
        return focused ? <NOTIFICATION_ACTIVE /> : <NOTIFICATION_INACTIVE />
      case SCREENS.PROFILE:
        return focused ? <PROFILE_ACTIVE /> : <PROFILE_INACTIVE />
      default:
        return focused ? <HOME_ACTIVE /> : <HOME_INACTIVE />
    }
  };
  function AuthStack() {
    return (
      <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <AuthStackNavigator.Screen name="LogIn" component={SignInScreen} />
        <AuthStackNavigator.Screen name="SignUp" component={SignUpScreen} />
      </AuthStackNavigator.Navigator>
    );
  }
  const HomeStack = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            renderTabIcon(route, focused),
          tabBarActiveTintColor: palette.primary,
          tabBarShowLabel:false,
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.BOOKMARK} component={BookmarkScreen} />
        <Tab.Screen
          name={SCREENS.NOTIFICATION}
          component={NotificationScreen}
        />
        <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      </Tab.Navigator>
    );
  };
  console.log("Navigator...Called....", authData, authData?.isLoggedIn);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      {authData?.isLoggedIn || authData?.isGuestLoggedIn
        ? HomeStack()
        : AuthStack()}
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeStack} />
        <Stack.Screen name={SCREENS.DETAIL}>
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigation;
