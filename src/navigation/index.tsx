import React, { useContext } from "react";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@screens/home/HomeScreen";
//const HomeScreen = React.lazy(()=> import('@screens/home/HomeScreen'));
const NotificationScreen = React.lazy(()=> import('@screens/notification/NotificationScreen'));
const ProfileScreen = React.lazy(()=> import('@screens/profile/ProfileScreen'));
const BookmarkScreen = React.lazy(()=> import('@screens/bookmark/BookmarkScreen'));
//const SignInScreen = React.lazy(()=> import('@screens/auth/signin/SignInScreen'));
const SignUpScreen = React.lazy(()=> import('@screens/auth/signup/SignUpScreen'));

// import NotificationScreen from "@screens/notification/NotificationScreen";
// import ProfileScreen from "@screens/profile/ProfileScreen";
// import BookmarkScreen from "@screens/bookmark/BookmarkScreen";
 import SignInScreen from "@screens/auth/signin/SignInScreen";
// import SignUpScreen from "@screens/auth/signup/SignUpScreen";

/**
 * Shared Imports
 */
import { APP_THEME, SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme, palette } from "@theme/themes";
import { AuthContext } from "context/AuthContext";
import HOME_ACTIVE from "assets/images/home_active.svg";
import HOME_INACTIVE from "assets/images/home_inactive.svg";
import BOOKMARK_ACTIVE from "assets/images/bookmark_active.svg";
import BOOKMARK_INACTIVE from "assets/images/bookmark_inactive.svg";
import NOTIFICATION_ACTIVE from "assets/images/notification_active.svg";
import NOTIFICATION_INACTIVE from "assets/images/notification_inactive.svg";
import PROFILE_ACTIVE from "assets/images/profile_active.svg";
import PROFILE_INACTIVE from "assets/images/profile_inactive.svg";

const Tab = createBottomTabNavigator();
const AuthStackNavigator = createStackNavigator();

const Navigation = () => {
  
  const { authData, appTheme } = useContext(AuthContext);
  const isDarkMode = appTheme === APP_THEME.DARK;
  
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
      case SCREENS.BOOKMARK:
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
  console.log("Navigator...Called....", authData, authData?.isLoggedIn, 'isDarkMode:',isDarkMode, 'appTheme : ',appTheme);
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
    </NavigationContainer>
  );
};

export default Navigation;
