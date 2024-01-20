import { FC, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../theme/colors'
import { ScreenLayout } from '../layouts/ScreenLayout'
import { useNavigation } from '@react-navigation/native'

interface PictureScreenProps {
    route: {
        params: {
            uri: string
        }
    }
}

export const PictureScreen: FC<PictureScreenProps> = ({ route }) => {
    const navigation = useNavigation()
    const [scanning, setScanning] = useState(false)
    const { uri } = route.params

    const scanPhoto = () => {
        setScanning(true)

        // make api call

        setScanning(false)
    }

    return (
        <ScreenLayout style={styles.screen}>
            <Image source={{ uri }} style={styles.image} resizeMode='contain' />
            <TouchableOpacity style={styles.button} onPress={scanPhoto}>
                <Text style={styles.text}>Scan photo</Text>
            </TouchableOpacity>
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.dodgerBlue,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 8
    },
    image: { 
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 8
    },
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.light,
        fontSize: 14
    }
})