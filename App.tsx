import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LandingPage from "./src/pages/LandingPage";
import TestPage from "./src/pages/TestPage";

import { de, en } from "./src/services/localization/localizations";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import 'react-native-gesture-handler';
import 'react-native-reanimated';

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  compatibilityJSON: "v3",
  lng: "de",
  fallbackLng: "de",
});

/*
 */

const Stack = createNativeStackNavigator();

export default function App() {
  const { t } = useTranslation();
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("./src/assets/fonts/JosefinSans-Regular.otf"),
    "Simply Conception": require("./src/assets/fonts/Simply-Conception-Regular.otf"),
  });

  return (
    <NavigationContainer>
      {fontsLoaded ? (
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={TestPage} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
