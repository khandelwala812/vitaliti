import { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../theme/colors'
import routes from '../navigation/routes'
import { useScans } from '../hooks/useScans';
import { ScreenLayout } from '../layouts/ScreenLayout'

export const HomeScreen = () => {
    const { scans, setScans } = useScans()
    const [cameraVisible, setCameraVisible] = useState(false)
    const [cameraType, setCameraTyped] = useState(CameraType.back)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const cameraRef = useRef<Camera>(null)
    const navigation = useNavigation()

    const openCamera = () => setCameraVisible(true)

    const flipCamera = () => {
        setCameraTyped(current => (current === CameraType.back ? CameraType.front : CameraType.back))
    }

    const takePhoto = async () => {
        if (!cameraRef.current) return 

        const photo = await cameraRef.current.takePictureAsync()
        setCameraVisible(false)
        navigation.navigate(routes.PICTURE, {
            uri: photo.uri
        })
    }

    const pickPhoto = async () => {
        const photo = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        const [pickedPhoto] = photo.assets!
        navigation.navigate(routes.PICTURE, {
            uri: pickedPhoto.uri
        })
    }

    if (!permission?.granted) {
        requestPermission()
        return null
    }

    return (
        <ScreenLayout>
        {cameraVisible ? (
            <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.shutterButton} onPress={takePhoto}>
                <Ionicons name='radio-button-off-sharp' color={colors.light} size={90} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.flipButton} onPress={flipCamera}>
                <MaterialIcons name='flip-camera-ios' color={colors.light} size={40} />
            </TouchableOpacity>
            </Camera>
        ): (
            <View style={styles.screen}>
                {scans?.length > 0 && (
                    <FlatList
                        data={scans}
                        keyExtractor={(scan) => scan.uri}
                        renderItem={({ item }) => (
                            <View>
                                <Image 
                                    source={{ uri: item.uri }}
                                    style={styles.image} 
                                />
                            </View>
                        )}
                    />
                )}
                <Text style={styles.text}>Welcome to Vitality</Text>
                <TouchableOpacity style={styles.button} onPress={openCamera}>
                    <Text style={[styles.text, styles.buttonText]}>Take a picture</Text>
                </TouchableOpacity>
                <Text style={styles.text}>or</Text>
                <TouchableOpacity style={styles.button} onPress={pickPhoto}>
                    <Text style={[styles.text, styles.buttonText]}>Pick from gallery</Text>
                </TouchableOpacity>
            </View>
        )}
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue,
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 32
    },
    buttonContainer: {
        alignItems: 'center',
        width: "100%",
        position: 'absolute',
        bottom: 32,
        padding: 8
    },
    buttonText: {
        color: colors.light,
    },
    camera: {
        flex: 1,
        width: "100%"
    },
    flipButton: {
        position: 'absolute',
        top: 32,
        right: 8
    },  
    image: {
        width: 200,
        height: 200 
    },
    text: {
        fontSize: 18
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    shutterButton: {
        alignSelf: 'center'
    }
})