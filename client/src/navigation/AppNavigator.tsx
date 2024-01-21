import { createNativeStackNavigator } from '@react-navigation/native-stack'

import routes from './routes'
import { HomeScreen } from '../screens/HomeScreen'
import { PictureScreen } from '../screens/PictureScreen'

const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.HOME} component={HomeScreen} />
            <Stack.Screen name={routes.PICTURE} component={PictureScreen} />
        </Stack.Navigator>
    )
}