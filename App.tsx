import { createTamagui, TamaguiProvider } from 'tamagui';
import {defaultConfig} from '@tamagui/config/v4';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

const config = createTamagui(defaultConfig);

type Conf = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

export default App;
