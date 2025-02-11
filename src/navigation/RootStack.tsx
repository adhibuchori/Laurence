import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
