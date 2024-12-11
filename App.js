import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SplashScreen from "./screens/splash/SplashScreen";
import AsyncStorageManager from "./local_storage/AsyncStorageManager";
import StorageKeys from "./local_storage/StorageKeys";
import React, { useReducer, useEffect } from "react";

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
      console.log("Onboarding completed", action.payload);
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
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      console.log("Checking onboarding status");
      const hasEmail =
        (await AsyncStorageManager.getData(StorageKeys.email)) != null;
      console.log("hasEmail", hasEmail);
      if (hasEmail) {
        dispatch({ type: "SET_ONBOARDING_COMPLETED", payload: true });
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
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
        screenOptions={{
          headerShown: false,
        }}
      >
        {uiState.isOnboardingCompleted ? (
          <Stack.Screen name="Profile" component={ProfileScreen} />
        ) : (
          // <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
          <Stack.Screen name="Onboarding">
            {(props) => <OnboardingScreen {...props} dispatch={dispatch} />}
          </Stack.Screen>
        )}
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
