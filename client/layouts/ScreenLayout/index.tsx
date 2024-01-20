import { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface ScreenLayoutProps {
    children: ReactNode
}

export const ScreenLayout: FC<ScreenLayoutProps> = ({ children }) => {
    return ( 
        <View style={styles.screen}>{children}</View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})