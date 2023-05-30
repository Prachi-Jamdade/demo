import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import ListVideos from "./ListVideos";
import hand from "../images/hand.png";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

const Display = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={hand} />
        <Text style={styles.headerLight}>Hello, </Text>
        <Text style={styles.headerDark}>Prachi</Text>
      </View>

      <View style={styles.box}>
        <ListVideos />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  box: {
    width,
    backgroundColor: "#161616",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: RFValue(20),
    flex: 1,
    marginTop: RFValue(5),
    paddingTop: RFValue(5),
    paddingBottom: RFValue(30),
    justifyContent: "center",
  },
  header: {
    marginTop: RFValue(30),
    color: "white",
    marginHorizontal: RFValue(16),
    fontFamily: "Montserrat-Bold",
    fontSize: RFValue(18),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(5),
  },
  headerLight: {
    color: "white",
    fontSize: RFValue(20),
    opacity: 0.7,
    paddingLeft: RFValue(15),
    fontFamily: "Montserrat-Medium",
  },
  headerDark: {
    color: "#FFBE18",
    fontSize: RFValue(20),
    fontFamily: "Montserrat-SemiBold",
    paddingLeft: RFValue(5),
    textTransform: "capitalize",
  },
});
export default Display;
