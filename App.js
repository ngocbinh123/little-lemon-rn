import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SplashScreen from "./screens/splash/SplashScreen";
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import AsyncStorageManager from "./local_storage/AsyncStorageManager";
import StorageKeys from "./local_storage/StorageKeys";
import React, { useReducer, useEffect, useState } from "react";
import Router from "./utils/router/Router";
const Stack = createNativeStackNavigator();

const initialState = {
  isLoading: true,
  isOnboardingCompleted: false,
};

function reducer(preState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...preState, isLoading: action.payload };
    case "SET_ONBOARDING_COMPLETED":
      return {
        ...preState,
        isOnboardingCompleted: action.payload,
        isLoading: false,
      };
    default:
      return preState;
  }
}

export default function App() {
  const [uiState, dispatch] = useReducer(reducer, initialState);
  const [initialRoute, setInitialRoute] = useState(Router.onboarding);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const email = await AsyncStorageManager.getData(StorageKeys.firstName);
      const hasEmail = email != null;
      if (hasEmail) {
        dispatch({ type: "SET_ONBOARDING_COMPLETED", payload: true });
        setInitialRoute(Router.dashboard);
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
        setInitialRoute(Router.onboarding);
      }
    };

    setTimeout(checkOnboardingStatus, 500);
  }, []);

  if (uiState.isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Router.dashboard} component={DashboardScreen} />
        <Stack.Screen name={Router.profile} component={ProfileScreen} />

        <Stack.Screen name={Router.onboarding}>
          {(props) => <OnboardingScreen {...props} dispatch={dispatch} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
