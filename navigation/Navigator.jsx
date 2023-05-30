import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListVideos from "../components/ListVideos";
import PlaySection from "../components/PlaySection";
import Display from "../components/Display";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="DisplayDisplayDisplay">
      <Stack.Screen
        name="Display"
        component={Display}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListVideos"
        component={ListVideos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaySection"
        component={PlaySection}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
