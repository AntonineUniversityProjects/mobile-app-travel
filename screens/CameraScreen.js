

import { Camera, CameraType } from "expo-camera";
import { useState , useEffect , useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View  , Image} from "react-native";
import { MediaLibrary } from "expo-media-library";

export default function CameraScreen({ navigation }) {
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
        // Permission granted
      }
    })();
  }, [permission]);

  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


const takePicture = async () => {
  if (cameraRef.current) {
    try {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(photo);

 
    } catch (error) {
      console.error("Error taking or uploading picture:", error);
    }
  }
};

  const onPictureSaved = async (photo) => {
    console.log(photo);

    try {
    
      const asset = await MediaLibrary.createAssetAsync(photo.uri);

      console.log("Photo saved to gallery:", asset);
    } catch (error) {
      console.error("Error saving photo to gallery:", error);
    }
  };
  const onConfirm = () => {

    navigation.navigate("VerificationScreen", { capturedPhoto });
  };

  const onRetake = () => {
    // Clear the captured photo 
    setCapturedPhoto(null);
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
        {capturedPhoto ? (
          // Display confirm and retake buttons
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onRetake}>
              <Text style={styles.text}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.text}>Confirm</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Display capture button
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        )}
      </Camera>
      {capturedPhoto && (
        // Display the captured photo for confirmation
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

