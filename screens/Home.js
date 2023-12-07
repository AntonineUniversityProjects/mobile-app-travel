// import { StyleSheet, Text as TextItem, View, Button } from "react-native";
// import * as React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Hero from "../screens/Hero";
// import TextScreen from "../screens/Text";
// import Flags from "../screens/Flags";
// import Camera from "../screens/Camera";

// const Home = () => {
//   const navigation = useNavigation();

//   return (
//     <>
//       <View style={styles.container}>
//         <TextItem>Flags Screen</TextItem>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Go to Flags"
//             onPress={() => navigation.navigate("HomeStack", { screen: "Hero" })}


//             color="#007bff" // Specify the color directly for Android
//           />
//         </View>
//       </View>

//       <View style={styles.container}>
//         <TextItem>Text Screen</TextItem>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Go to Text"
//             onPress={() => navigation.navigate("TextScreen")}
//             color="#007bff" // Specify the color directly for Android
//           />
//         </View>
//       </View>

//       <View style={styles.container}>
//         <TextItem>Camera </TextItem>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Go to Camera"
//             onPress={() => navigation.navigate("Camera")}
//             color="#007bff" // Specify the color directly for Android
//           />
//         </View>
//       </View>

//       <View style={styles.container}>
//         <TextItem>Hero Screen</TextItem>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Go to Hero"
//             onPress={() => navigation.navigate("Hero")}
//             color="#007bff" // Specify the color directly for Android
//           />
//         </View>
//       </View>
//     </>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     marginTop: 10, // Adjust spacing as needed
//   },
// });
