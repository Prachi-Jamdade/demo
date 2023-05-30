import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import * as RootNavigation from "../navigation/RootNavigation";
import VideoCard from "../components/VideoCard";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const boxWidth = width * 0.92;

const ListVideos = () => {
  // const navigation = useNavigation();
  const data = [
    {
      id: 1,
      videoId: "lOwa7sfs838",
      title: "A True Competitor of ChatGPT?",
    },
    {
      id: 2,
      videoId: "AhUL5tHF3uc",
      title: "Android Roadmap 2023",
    },
    {
      id: 3,
      videoId: "FMxGHOvUwZg",
      title: "JetPack Compose VS XML",
    },
    {
      id: 4,
      videoId: "cnU2zMnmmpg",
      title: "Best Architecture for Android Apps",
    },
    {
      id: 5,
      videoId: "-xTqfilaYow",
      title: "MVVM in 100 Seconds",
    },
    {
      id: 6,
      videoId: "-2ckvIzs0nU",
      title: "Protect Your API Keys",
    },
    {
      id: 7,
      videoId: "CHnKt1MAzBw",
      title: "KMM or Flutter",
    },
    {
      id: 8,
      videoId: "Z5VjmLhnoJU",
      title: "In-App Update API",
    },
    {
      id: 9,
      videoId: "NgQ5_QnoJb8",
      title: "Google Play Review API",
    },
    {
      id: 10,
      videoId: "SFUngC51-z4",
      title: "Note Android App with ChatGPT",
    },
  ];
  return (
    <View>
      <View style={styles.box}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, idex }) => {
            return (
              <ScrollView style={{ marginVertical: RFValue(10) }}>
                <VideoCard {...item} />
              </ScrollView>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ListVideos;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: RFValue(16),
    color: "black",
  },
  homeTopCard: {
    width: boxWidth,
    borderRadius: RFValue(20),
    marginVertical: RFValue(10),
    marginBottom: RFValue(2),
    marginEnd: RFValue(10),
    paddingTop: RFValue(20),
    paddingLeft: RFValue(12),
    paddingRight: RFValue(12),
    backgroundColor: "black",
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
  },
});
