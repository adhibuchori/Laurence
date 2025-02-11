import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './styles';
import Colors from '../../../assets/styles/Colors';

type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

function OnboardingScreen({navigation}: Props) {
  const onDone = () => {
    navigation.replace('Home');
  };

  const onSkip = () => {
    navigation.replace('Home');
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: Colors.neutral100.color,
          image: (
            <Image
              source={require('../../../assets/images/onboarding_02.png')}
              style={styles.image}
            />
          ),
          title: 'Find Your Best Friend',
          subtitle:
            'Adopt a pet and give them a loving home. Every adoption is a new beginning!',
          titleStyles: styles.title,
          subTitleStyles: styles.subTitle,
        },
        {
          backgroundColor: Colors.neutral100.color,
          image: (
            <Image
              source={require('../../../assets/images/onboarding_02.png')}
              style={styles.image}
            />
          ),
          title: 'Give Them Freedom & Love',
          subtitle:
            'Rescue, adopt, and care. Every pet deserves a second chance and a forever home.',
          titleStyles: styles.title,
          subTitleStyles: styles.subTitle,
        },
      ]}
      bottomBarHighlight={false}
      onDone={onDone}
      onSkip={onSkip}
    />
  );
}

export default OnboardingScreen;
