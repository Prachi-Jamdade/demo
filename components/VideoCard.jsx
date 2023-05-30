import React, { useCallback, useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as RootNavigation from "../navigation/RootNavigation";
import YoutubeIframe from "react-native-youtube-iframe";
import YoutubePlayer from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";

const { width } = Dimensions.get("window");
const boxWidth = width * 0.8;

const VideoCard = ({ videoId, title, isPlaying }) => {
  let [duration, setDuration] = useState(0);
  const item = {
    videoId: videoId,
    title: title,
  };
  const playerRef = useRef();
  const [playing, setPlaying] = useState(false);

  const onStateChanged = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }

    if (state === "playing") {
      setPlaying(true);
    }

    if (state === "paused") {
      setPlaying(false);
    }
  });

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  function setOrientationToLandscape() {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
  }

  function setOrientationToPortrait() {
    if (Dimensions.get("window").height < Dimensions.get("window").width) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  function redirect() {
    RootNavigation.navigate("PlaySection", {
      item: item,
      playing: playing,
    });
    console.log("clicked");
  }

  function Time() {
    playerRef.current?.getDuration().then((getDuration) => {
      setDuration(getDuration);
      console.log(duration);
    });

    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    const hours = Math.floor(duration / 3600);
    duration = duration - hours * 3600;

    function str_pad_left(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    const finalTime =
      str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);

    return (
      <Text
        style={[
          styles.text,
          {
            fontFamily: "Montserrat-Medium",
            fontSize: RFValue(13),
            marginVertical: RFValue(10),
          },
        ]}
      >
        Time Duration: {finalTime} mins
      </Text>
    );
  }

  return (
    <TouchableHighlight
      style={[
        styles.card,
        { backgroundColor: playing ? "black" : "transparent" },
      ]}
      onPress={redirect}
    >
      <View>
        <YoutubePlayer
          ref={playerRef}
          height={RFValue(150)}
          width={boxWidth}
          play={isPlaying ? isPlaying : playing}
          videoId={videoId}
          onChangeState={onStateChanged}
          style={styles.images}
          webViewStyle={{ opacity: 0.99 }}
          onFullScreenChange={(isFullScreen) => {
            if (isFullScreen) {
              setOrientationToPortrait();
            } else {
              setOrientationToLandscape();
            }
          }}
        />

        <View style={{ alignItems: "center" }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: RFValue(15),
                color: "#FFBE18",
                marginTop: RFValue(10),
              },
            ]}
          >
            {title}
          </Text>
        </View>
        <Time />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#242B2E",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#CAD5E2",
    borderWidth: RFValue(0.5),
  },
  text: {
    marginVertical: RFValue(6),
    color: "white",
    fontFamily: "Montserrat-Bold",
    flexWrap: "wrap",
  },
});

export default VideoCard;
