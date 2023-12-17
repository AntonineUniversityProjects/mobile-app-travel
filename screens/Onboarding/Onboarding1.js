import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const Onboarding1 = ({ navigation }) => {
  const swiperRef = useRef(null);

  const handleGetStarted = () => {
    navigation.navigate("Hero");
  };

  const handleSkip = () => {
    navigation.navigate("Hero");
  };

  const handleMomentumScrollEnd = (e, state, context) => {
    //  user is on the last slide
    if (state.index === state.total - 1) {
      navigation.navigate("Hero");
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      showsButtons={false}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      // onIndexChanged={handleIndexChanged}
    >
      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/travel1.png")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Discover Hidden Gems</Text>
          <Text style={styles.description}>
            Explore iconic landmarks and breathtaking views. Our app helps you
            find the best spots around the globe.
          </Text>
        </View>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/travel3.jpeg")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Explore New Features</Text>
          <Text style={styles.description}>
            Dive into what our app offers. From personalized recommendations to
            seamless planning.
          </Text>
        </View>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.slide}>
        <Image
          source={require("../../assets/images/travel2.jpeg")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Start Your Journey</Text>
          <Text style={styles.description}>
            Ready to begin? Get started now and embark on unforgettable
            adventures.
          </Text>
          <TouchableOpacity
            onPress={handleGetStarted}
            style={styles.getStartedButton}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 40,
    marginBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333", // Adjust color to match your theme
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#666", // Adjust color to match your theme
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 40,
  },
  getStartedButton: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  getStartedText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
  },
  skipText: {
    fontSize: 16,
    color: "gray",
  },
});
export default Onboarding1;
