import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import TravelLoading from "../components/travelLoading";
import { CommonActions } from "@react-navigation/native"; 

const VerificationScreen = ({ route, navigation }) => {
  const { capturedPhoto } = route.params;
  const [uploadedImageUri, setUploadedImageUri] = useState(null);
  const [photoSent, setPhotoSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Display the captured photo before uploading
    setUploadedImageUri(capturedPhoto.uri);


  }, []);

  const uploadToAzureStorage = async () => {
    try {
 
      if (photoSent) {
        return;
      }

      // Set loading to true to display the loading component
      setIsLoading(true);

      //  Azure Storage account details
      const accountName = "mobilephoto";
      const containerName = "uploadedverificationphotos";
      const blobName = `photo-${Date.now()}.jpg`; 
      const sasToken =
        "?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-12-13T18:43:58Z&st=2023-12-13T10:43:58Z&spr=https,http&sig=ZPZzLM%2FxaLwhKwxU%2BSZtQr3jF3ZPXuee1FBE7%2FOttv8%3D";

      const azureStorageUri = `https://${accountName}.blob.core.windows.net/${containerName}/${blobName}${sasToken}`;

      const response = await fetch(azureStorageUri, {
        method: "PUT",
        headers: {
          "x-ms-blob-type": "BlockBlob",
          "Content-Type": "image/jpeg", 
        },
        body: capturedPhoto.uri, 
      });

      if (response.ok) {
        console.log("Image uploaded successfully");
        setUploadedImageUri(azureStorageUri);
      
        setPhotoSent(true);
      } else {
        console.error(
          "Error uploading image:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error uploading to Azure Storage:", error);
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const onRetake = () => {
    navigation.goBack();
  };

  const onSend = () => {

    uploadToAzureStorage();
    try {
      // Simulate a loading delay (you can replace this with a real loading scenario)
      setTimeout(() => {
        setIsLoading(false); // Stop loading

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "Home",
              },
            ],
          })
        );
      }, 2000);
    } catch (error) {
      setIsLoading(false); // Stop loading in case of an error
      console.error("Error signing up:", error.message);
      Alert.alert("Error", error.message);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Image
          source={{ uri: uploadedImageUri || capturedPhoto.uri }}
          style={styles.preview}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onRetake}>
          <Text style={styles.text}>Retake</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onSend}
          disabled={photoSent}
        >
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </View>
      {/* {isLoading && <TravelLoading />} */}
    </View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom : 100
  },
  button: {
    flex: 1,
    marginHorizontal: 20,
    paddingBottom : 20,

 
    borderRadius: 8,
    backgroundColor: "#00BCC9",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    paddingTop : 20,
    fontWeight: "bold",
  },
});

export default VerificationScreen;
