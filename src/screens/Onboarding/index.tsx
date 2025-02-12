import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import {
  Image,
  FlatList,
  View,
  Text,
  StatusBar,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import styles from './styles';
import Footer from './Footer';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../../assets/images/onboarding_01.png'),
    title: 'Find Your Best Friend',
    subTitle:
      'Adopt a pet and give them a loving home. Every adoption is a new beginning!',
  },
  {
    id: '2',
    image: require('../../../assets/images/onboarding_02.png'),
    title: 'Give Them Freedom & Love',
    subTitle:
      'Rescue, adopt, and care. Every pet deserves a second chance and a forever home.',
  },
];

interface SlideItem {
  image: any;
  title: string;
  subTitle: string;
}

type SlideProps = {
  item: SlideItem;
};

const Slide = ({ item }: SlideProps) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={item?.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subTitle}>{item?.subTitle}</Text>
      </View>
    </View>
  );
};

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

const OnboardingScreen = ({ navigation }: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<FlatList<any>>(null);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      if (ref?.current) {
        ref.current.scrollToOffset({ offset });
        setCurrentSlideIndex(nextSlideIndex);
      }
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    if (ref?.current) {
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(lastSlideIndex);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer
        currentSlideIndex={currentSlideIndex}
        slides={slides}
        skip={skip}
        goToNextSlide={goToNextSlide}
        navigation={navigation}
      />
    </View>
  );
};

export default OnboardingScreen;
