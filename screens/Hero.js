import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
// import Onboarding1 from "./Onboarding/Onboarding1";
import Signup from "./Signup";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

hikingimgurl =
  "https://mobilephoto.blob.core.windows.net/mobilrphotod/Screenshot_from_2023-12-07_23-11-25-removebg-preview.png";

const Hero = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* First Section */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 16,
          marginTop: 8,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "black",
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#00BCC9", fontSize: 24, fontWeight: "bold" }}>
            Go
          </Text>
        </View>
        <Text style={{ color: "#2A2B4B", fontSize: 24, fontWeight: "bold" }}>
          Travel
        </Text>
      </View>

      {/* Second Section */}
      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 8,
          marginBottom: 8,
          flexDirection: "column",
        }}
      >
        <Text style={{ color: "#3C6072", fontSize: 42 }}>
          Enjoy the trip with
        </Text>
        <Text style={{ color: "#00BCC9", fontSize: 38, fontWeight: "bold" }}>
          Good Moments
        </Text>
      </View>

      {/* Circle Section */}
      <View
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#00BCC9",
          borderRadius: 200,
          position: "absolute",
          bottom: -36,
          right: -36,
        }}
      ></View>
      <View
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#E99265",
          borderRadius: 200,
          position: "absolute",
          bottom: -28,
          left: -36,
        }}
      ></View>

      {/* Image container */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={{ uri: hikingimgurl }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            marginTop: 10,
            marginLeft: 370,
            marginRight: 400,
            marginBottom: 130,
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{
            position: "absolute",
            bottom: 20,
            width: "50%",
            height: 40,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#00BCC9", fontSize: 30, fontWeight: "bold" }}>
            Signup
          </Text>
        </TouchableOpacity>

        {/* <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            style={{
              width: 60,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              backgroundColor: "#00BCC9",
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 36, fontWeight: "bold" }}
            >
              Go
            </Text>
          </Animatable.View> */}
      </View>
    </SafeAreaView>
  );
};

export default Hero;
