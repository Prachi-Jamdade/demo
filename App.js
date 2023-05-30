import React from "react";
import { navigationRef } from "./navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/Navigator";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
}
