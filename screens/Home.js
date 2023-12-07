import { StyleSheet, Text as TextItem, View , Button } from "react-native";
import Text from '../screens/Text';
import Flags from '../screens/Flags';
import Camera from '../screens/Camera'
import * as React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextItem>Flags Screen</TextItem>
        <Button
          title="Go to Flags"
          onPress={() => navigation.navigate(Flags)}
          style={styles.button}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextItem>Text Screen</TextItem>
        <Button
          title="Go to Text"
          onPress={() => navigation.navigate(Text)}
          style={styles.button}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextItem>Camera </TextItem>
        <Button
          title="Go to Camera"
          onPress={() => navigation.navigate(Camera)}
          style={styles.button}
        />
      </View>
    </>
  );
}

export default Home

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    // color: "#fff",
    // fontSize: 16,
    // fontWeight: "bold",
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 5,
    // alignItems: "center",
    // justifyContent: "center",
    // marginVertical: 10,
  },
});