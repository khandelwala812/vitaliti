import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './src/navigation/AppNavigator';
import { ScanProvider } from './src/context/ScanProvider';

export default function App() {
  return (
    <ScanProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ScanProvider>
  )
}
