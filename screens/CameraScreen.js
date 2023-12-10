// import { Permissions } from "expo";
// import { Camera as CameraItem } from "expo-camera";
// import { useState, useRef } from "react";
// import { View, Button, Image } from "react-native";

// const Camera = () => {
//   const [imageUri, setImageUri] = useState(null);
//   const cameraRef = useRef(null);

//   const handleCaptureImage = async () => {
//     try {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA);
//       if (status !== "granted") {
//         alert("Camera access denied");
//         return;
//       }

//       const data = await cameraRef.current.takePictureAsync({
//         quality: 0.5,
//         base64: true,
//       });
//       setImageUri(data.uri);
//     } catch (error) {
//       console.error("Error capturing image:", error);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <CameraItem ref={cameraRef} style={{ flex: 1 }} />

//       <Button title="Capture Image" onPress={handleCaptureImage} />

//       {imageUri && (
//         <Image
//           source={{ uri: imageUri }}
//           style={{ width: 200, height: 200, resizeMode: "contain" }}
//         />
//       )}
  
//     </View>
//   );
// };

// export default Camera;

import { Camera, CameraType } from "expo-camera";
import { useState , useEffect , useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View  , Image} from "react-native";
import { MediaLibrary } from "expo-media-library";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    if (!permission || !permission.granted) {
      return;
    }

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        // Permission granted, do additional setup if needed
      }
    })();
  }, [permission]);

  const cameraRef = useRef(null);

  // if (!permission) {
  //   // Camera permissions are still loading
  //   return <View />;
  // }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: "center" }}>
  //         We need your permission to show the camera
  //       </Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }

  //  const takePicture = () => {
  //    if (Camera) {
  //      Camera.takePictureAsync({ onPictureSaved: onPictureSaved });
  //    }
  //  };
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedPhoto(photo);
        // Handle the captured photo URI (e.g., save or display it)
        console.log("Photo taken:", photo.uri);
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  const onPictureSaved = async (photo) => {
    console.log(photo);

     try {
      // Save the photo to the device gallery
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      // You can do additional actions with the asset if needed
      console.log("Photo saved to gallery:", asset);
    } catch (error) {
      console.error("Error saving photo to gallery:", error);
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => (cameraRef.current = ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedPhoto && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedPhoto.uri }} style={styles.preview} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  Shot : {
    flex : 1
  }
});

