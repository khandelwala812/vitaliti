import { FC, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import colors from '../theme/colors'
import routes from '../navigation/routes'
import { useScans } from '../hooks/useScans'
import { ScreenLayout } from '../layouts/ScreenLayout'
import { IScan } from '../context/ScanProvider'

interface PictureScreenProps {
    route: {
        params: {
            uri: string
        }
    }
}

export const PictureScreen: FC<PictureScreenProps> = ({ route }) => {
    const navigation = useNavigation()
    const { scans, setScans } = useScans()
    const [scanning, setScanning] = useState(false)
    const { uri } = route.params

    const scanPhoto = () => {
        setScanning(true)

        // make api call

        setScanning(false)

        setScans([...scans, { uri, rating: "Fresh" }])
        navigation.navigate(routes.HOME)
    }

    return (
        <ScreenLayout style={styles.screen}>
            <Image source={{ uri }} style={styles.image} resizeMode='contain' />
            {!scanning && (
                <TouchableOpacity style={styles.button} onPress={scanPhoto}>
                    <Text style={styles.text}>Scan photo</Text>
                </TouchableOpacity>
            )}
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue,
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