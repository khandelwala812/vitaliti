import React, { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import Constants from "expo-constants"

interface ScreenLayoutProps {
    children: ReactNode
    style?: object
}

export const ScreenLayout: FC<ScreenLayoutProps> = ({ children, style }) => {
    return ( 
        <View style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    view: {
        flex: 1
    }
})