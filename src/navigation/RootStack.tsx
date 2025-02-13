import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/Splash';
import SearchScreen from '../screens/Search';
import DetailScreen from '../screens/Detail';
import SeeAllScreen from '../screens/SeeAll';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SeeAll" component={SeeAllScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default RootStack;
