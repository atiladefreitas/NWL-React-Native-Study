import React from "react";
import { useFonts } from "expo-font";
import {
  Manjari_400Regular,
  Manjari_700Bold,
} from "@expo-google-fonts/manjari";
import { Raleway_500Medium, Raleway_700Bold } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";

import { SignIn } from "./src/Screens/SignIn";

function App() {
  const [fontsLoaded] = useFonts({
    Manjari_400Regular,
    Manjari_700Bold,
    Raleway_500Medium,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <SignIn />;
}

export default App;
