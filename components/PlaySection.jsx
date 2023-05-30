import React, { useRef, useState, useCallback } from "react";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import VideoCard from "./VideoCard";

const { width } = Dimensions.get("window");

const PlaySection = ({ route, navigation }) => {
  const { item, playing } = route.params;
  console.log(item.videoId);
  return (
    <SafeAreaView style={styles.main}>
      <VideoCard {...item} isPlaying={playing} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: RFValue(10),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlaySection;
