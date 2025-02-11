import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Button } from 'tamagui';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button theme={'blue'}>Hello Home</Button>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
