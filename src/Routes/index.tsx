import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { Background } from "../Components/Background";

function Routes() {
  return (
    <Background>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Background>
  );
}

export { Routes };
