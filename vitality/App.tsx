import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera'

import colors from './theme/colors'
import { ScreenLayout } from './layouts/ScreenLayout'

export default function App() {
  const [cameraType, setCameraTyped] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()

  const toggleCameraType = () => {
    setCameraTyped(current => (current === CameraType.back ? CameraType.front : CameraType.back))
  }

  if (!permission?.granted) {
    requestPermission()
    return null;
  }

  return (
    <ScreenLayout>
      <Camera style={styles.camera} type={cameraType}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dodgerBlue,
    width: "100%",
    height: 40,
    borderRadius: 4
  },
  buttonContainer: {},
  camera: {
    flex: 1,
    width: "100%"
  },
  text: {
    color: colors.light,
    fontSize: 14
  }
})
