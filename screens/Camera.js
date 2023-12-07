import { Permissions } from "expo";
import { Camera as CameraItem } from "expo-camera";
import { useState, useRef } from "react";
import { View, Button, Image } from "react-native";

const Camera = () => {
  const [imageUri, setImageUri] = useState(null);
  const cameraRef = useRef(null);

  const handleCaptureImage = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        alert("Camera access denied");
        return;
      }

      const data = await cameraRef.current.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      setImageUri(data.uri);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CameraItem ref={cameraRef} style={{ flex: 1 }} />

      <Button title="Capture Image" onPress={handleCaptureImage} />

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      )}
  
    </View>
  );
};

export default Camera;
