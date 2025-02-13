import React from 'react';
import {Image, Text, XStack, YStack} from 'tamagui';
import SearchIcon from '../../../assets/icons/ic_search.svg';
import Colors from '../../../assets/styles/Colors';
import {FlatList, Pressable, StatusBar, View} from 'react-native';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import CardSuggested from '../../components/card/CardSuggested';
import CardList from '../../components/card/CardList';

const images = {
  profilePicture: require('../../../assets/images/lyla_profile_picture.png'),
  pet01: require('../../../assets/images/pet_01.png'),
  pet02: require('../../../assets/images/pet_02.png'),
  pet03: require('../../../assets/images/pet_03.png'),
  pet04: require('../../../assets/images/pet_04.png'),
  pet05: require('../../../assets/images/pet_05.png'),
  pet06: require('../../../assets/images/pet_06.png'),
  pet07: require('../../../assets/images/pet_07.png'),
  pet08: require('../../../assets/images/pet_08.png'),
  pet09: require('../../../assets/images/pet_09.png'),
  pet10: require('../../../assets/images/pet_10.png'),
  petOwner01: require('../../../assets/images/pet_owner_01.png'),
  petOwner02: require('../../../assets/images/pet_owner_02.png'),
  petOwner03: require('../../../assets/images/pet_owner_03.png'),
  petOwner04: require('../../../assets/images/pet_owner_04.png'),
  petOwner05: require('../../../assets/images/pet_owner_05.png'),
  petOwner06: require('../../../assets/images/pet_owner_06.png'),
  petOwner07: require('../../../assets/images/pet_owner_07.png'),
  petOwner08: require('../../../assets/images/pet_owner_08.png'),
  petOwner09: require('../../../assets/images/pet_owner_09.png'),
  petOwner10: require('../../../assets/images/pet_owner_10.png'),
};

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  SeeAll: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Search',
  'SeeAll'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const suggestedData = [
  {
    id: '1',
    petOwnerImage: images.petOwner01,
    ownerName: 'Shania Mu',
    petImage: images.pet01,
    petName: 'Nala Daisy',
    petType: 'Dog',
  },
  {
    id: '2',
    petOwnerImage: images.petOwner02,
    ownerName: 'Nobara Lie',
    petImage: images.pet02,
    petName: 'Eve Shine',
    petType: 'Cat',
  },
  {
    id: '3',
    petOwnerImage: images.petOwner03,
    ownerName: 'Akasa Yumi',
    petImage: images.pet03,
    petName: 'Max Lucky',
    petType: 'Dog',
  },
  {
    id: '4',
    petOwnerImage: images.petOwner04,
    ownerName: 'Yuki Takahashi',
    petImage: images.pet04,
    petName: 'Rexy Power',
    petType: 'Dog',
  },
  {
    id: '5',
    petOwnerImage: images.petOwner05,
    ownerName: 'Li Wei',
    petImage: images.pet05,
    petName: 'Bella Joy',
    petType: 'Dog',
  },
  {
    id: '6',
    petOwnerImage: images.petOwner06,
    ownerName: 'Oliver Brown',
    petImage: images.pet06,
    petName: 'Whiskers',
    petType: 'Dog',
  },
  {
    id: '7',
    petOwnerImage: images.petOwner07,
    ownerName: 'Hiroshi Sato',
    petImage: images.pet07,
    petName: 'Milo',
    petType: 'Cat',
  },
  {
    id: '8',
    petOwnerImage: images.petOwner08,
    ownerName: 'Jia Li',
    petImage: images.pet08,
    petName: 'Kiki',
    petType: 'Cat',
  },
  {
    id: '9',
    petOwnerImage: images.petOwner09,
    ownerName: 'Emily Smith',
    petImage: images.pet09,
    petName: 'Fluffy',
    petType: 'Cat',
  },
  {
    id: '10',
    petOwnerImage: images.petOwner10,
    ownerName: 'Sakura Fujiwara',
    petImage: images.pet10,
    petName: 'Coco',
    petType: 'Cat',
  },
];

const ItemSeparatorHorizontal = () => {
  return <View style={styles.itemSeparatorHorizontalGap} />;
};

const ItemSeparatorVertical = () => {
  return <View style={styles.itemSeparatorVerticalGap} />;
};

function HomeScreen({navigation}: Props) {
  return (
    <YStack flex={1} backgroundColor={Colors.neutral200.color}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <XStack
        backgroundColor={Colors.neutral100.color}
        justifyContent="space-between"
        paddingHorizontal={16}
        alignItems="center"
        paddingVertical={24}
        borderStartEndRadius={24}
        borderEndEndRadius={24}>
        <YStack>
          <XStack alignItems="center">
            <Image
              source={images.profilePicture}
              width={45}
              height={45}
              borderRadius={8}
            />
            <YStack marginStart={15}>
              <Text
                style={styles.welcomeTitleText}
                numberOfLines={1}
                ellipsizeMode="tail">
                Welcome, Lyla!
              </Text>
              <Text style={styles.greetingSubTitleText} marginTop={5}>
                Your New Best Friend is Waiting!
              </Text>
            </YStack>
          </XStack>
        </YStack>
        <YStack>
          <Pressable
            style={({pressed}) => [
              styles.searchButton,
              pressed && {transform: [{scale: 0.95}]},
            ]}
            onPress={() => navigation.navigate('Search')}>
            <SearchIcon />
          </Pressable>
        </YStack>
      </XStack>

      <XStack>
        <YStack flex={1}>
          <XStack
            marginVertical={24}
            marginHorizontal={16}
            justifyContent="space-between"
            alignItems="center">
            <Text style={styles.sectionTitleText}>Suggested for You</Text>
            <Pressable
              onPress={() => navigation.navigate('SeeAll')}
              style={({pressed}) => [pressed && {transform: [{scale: 0.95}]}]}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </XStack>
          <FlatList
            data={suggestedData}
            horizontal={true}
            contentContainerStyle={styles.paddingContentContainerHorizontal}
            renderItem={({item}) => (
              <CardSuggested
                petOwnerImage={item.petOwnerImage}
                ownerName={item.ownerName}
                petImage={item.petImage}
                petName={item.petName}
                petType={item.petType}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparatorHorizontal}
          />
        </YStack>
      </XStack>

      <XStack flex={1}>
        <YStack flex={1}>
          <XStack
            marginVertical={24}
            marginHorizontal={16}
            justifyContent="space-between"
            alignItems="center">
            <Text style={styles.sectionTitleText}>Newest</Text>
            <Pressable
              onPress={() => navigation.navigate('SeeAll')}
              style={({pressed}) => [pressed && {transform: [{scale: 0.95}]}]}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </XStack>
          <FlatList
            data={suggestedData}
            renderItem={({item}) => (
              <CardList
                petOwnerImage={item.petOwnerImage}
                ownerName={item.ownerName}
                petImage={item.petImage}
                petName={item.petName}
                petType={item.petType}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={ItemSeparatorVertical}
            contentContainerStyle={styles.paddingContentContainerBottom}
          />
        </YStack>
      </XStack>
    </YStack>
  );
}

export default HomeScreen;
