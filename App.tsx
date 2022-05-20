import React from "react";
import { useFonts } from "expo-font";
import {
  Manjari_400Regular,
  Manjari_700Bold,
} from "@expo-google-fonts/manjari";
import {
  Raleway_500Medium,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";

import { SignIn } from "./src/Screens/SignIn";
import { Background } from "./src/Components/Background";

function App() {
  const [fontsLoaded] = useFonts({
    Manjari_400Regular,
    Manjari_700Bold,
    Raleway_500Medium,
    Raleway_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </Background>
  );
}

export default App;
