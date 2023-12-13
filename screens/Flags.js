import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import CameraScreen from "./CameraScreen";
import { useNavigation } from "@react-navigation/native";

export default function Flags() {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={{
              height: 200,
              margin: 10,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <View style={styles.redView} />
            <View style={styles.whiteView}>
              {Platform.OS === "android" ? (
                <Text style={styles.text}> i am android </Text>
              ) : (
                <Text style={styles.text}>i am ios </Text>
              )}
            </View>
            <View style={styles.redView} />
          </View>

          <View
            style={{
              height: 200,
              margin: 10,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <View style={styles.orangeView} />
            <View style={styles.whiteView}>
              <View style={styles.circle} />
            </View>
            <View style={styles.greenView} />
          </View>

          <View
            style={{
              height: 200,
              margin: 10,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <View style={styles.thailandRedView} />
            <View style={styles.whiteView} />
            <View style={styles.thailandBlueView} />

            <View style={styles.whiteView} />
            <View style={styles.thailandRedView} />
          </View>

          <View
            style={{
              height: 200,
              margin: 10,
              borderWidth: 1,
              borderColor: "black",
              flexDirection: "row",
            }}
          >
            <View style={styles.omanColumnRedView}>
              <Image
                style={{ width: 50, height: 50, alignSelf: "center" }}
                source={require("../assets/OIP.png")}
              />
            </View>

            <View style={{ flex: 3 }}>
              <View style={styles.whiteView} />
              <View style={styles.omanRedView} />

              <View style={styles.omanGreenView} />
            </View>
          </View>
          {/* <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate("Text")}
            />
          </View> */}

          <TouchableOpacity
            onPress={() => navigation.navigate("CameraScreen")}
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
          ></TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  OsContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "red",
      },
      android: {
        backgroundColor: "blue",
      },
    }),
  },
  redView: {
    backgroundColor: "red",
    flex: 1,
  },
  whiteView: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  orangeView: {
    flex: 1,
    backgroundColor: "rgb(255, 143, 28)",
  },
  greenView: {
    flex: 1,
    backgroundColor: "rgb(80,158,47)",
  },
  thailandRedView: {
    flex: 1,
    backgroundColor: "rgb(239,51,64)",
  },

  thailandBlueView: {
    flex: 2,
    backgroundColor: "rgb(0,32,91)",
  },

  omanRedView: {
    flex: 1,
    backgroundColor: "rgb(200,16,46)",
  },

  omanGreenView: {
    flex: 1,
    backgroundColor: "rgb(0,154,68)",
  },

  omanColumnRedView: {
    flex: 1,
    backgroundColor: "rgb(200,16,46)",
  },
  circle: {
    width: 50,
    height: 50,

    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    // alignSelf: "center",
    // justifySelf: "center",
  },
});
