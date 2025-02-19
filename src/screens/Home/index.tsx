import React, {FC, memo, useCallback, useState} from 'react';
import Colors from '../../../assets/styles/Colors';
import {Text, View, XStack, YStack, Image} from 'tamagui';
import styles from './styles';
import AddedIcon from '../../../assets/icons/ic_added.svg';
import RemovedIcon from '../../../assets/icons/ic_removed.svg';
import SearchIcon from '../../../assets/icons/ic_search.svg';
import CardSuggested from '../../components/card/CardSuggested';
import CardList from '../../components/card/CardList';
import {
  FlatList,
  ImageSourcePropType,
  Pressable,
  StatusBar,
} from 'react-native';
import {Snackbar} from 'react-native-paper';
import petData from '../../model/PetData';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: any;
}

interface PetItem {
  id: string;
  petOwnerImage: any;
  ownerName: string;
  petImage: any;
  petName: string;
  petType: string;
  isFavorite: boolean;
}

type RootStackParamList = {
  Search: undefined;
};

type HeaderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Search'>;
  profilePicture: ImageSourcePropType;
};

type SectionHeaderProps = {
  title: string;
  onSeeAllPress?: () => void;
};

const images = {
  profilePicture: require('../../../assets/images/lyla_profile_picture.png'),
};

const ItemSeparatorHorizontal = () => {
  return <View style={styles.itemSeparatorHorizontalGap} />;
};

const ItemSeparatorVertical = () => {
  return <View style={styles.itemSeparatorVerticalGap} />;
};

const Header: FC<HeaderProps> = memo(({navigation, profilePicture}) => (
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
          source={profilePicture}
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
));

const SectionHeader: FC<SectionHeaderProps> = memo(({title, onSeeAllPress}) => (
  <XStack
    marginVertical={24}
    marginHorizontal={16}
    justifyContent="space-between"
    alignItems="center">
    <Text style={styles.sectionTitleText}>{title}</Text>
    <Pressable
      onPress={onSeeAllPress}
      style={({pressed}) => [pressed && {transform: [{scale: 0.95}]}]}>
      <Text style={styles.seeAllText}>See All</Text>
    </Pressable>
  </XStack>
));

const HomeScreen = ({navigation}: Props) => {
  const [snackbarState, setSnackbarState] = useState<{
    visible: boolean;
    message: React.ReactNode;
    background: string;
  }>({
    visible: false,
    message: null,
    background: Colors.success.color,
  });

  const showSnackbar = useCallback(
    (petName: string, isFavorite: boolean) => {
      if (snackbarState.visible) {
        setSnackbarState(prev => ({...prev, visible: false}));
        setTimeout(() => {
          setSnackbarState({
            visible: true,
            message: (
              <View flexDirection="row" alignItems="center">
                {isFavorite ? (
                  <AddedIcon width={20} height={20} />
                ) : (
                  <RemovedIcon width={20} height={20} />
                )}
                <Text style={styles.snackbarText}>
                  <Text style={styles.snackbarPetNameText}>{petName}</Text>
                  {isFavorite
                    ? ' added to favorites'
                    : ' removed from favorites'}
                </Text>
              </View>
            ),
            background: isFavorite ? Colors.success.color : Colors.error.color,
          });
        }, 50);
      } else {
        setSnackbarState({
          visible: true,
          message: (
            <View flexDirection="row" alignItems="center">
              {isFavorite ? (
                <AddedIcon width={20} height={20} />
              ) : (
                <RemovedIcon width={20} height={20} />
              )}
              <Text style={styles.snackbarText}>
                <Text style={styles.snackbarPetNameText}>{petName}</Text>
                {isFavorite ? ' added to favorites' : ' removed from favorites'}
              </Text>
            </View>
          ),
          background: isFavorite ? Colors.success.color : Colors.error.color,
        });
      }
    },
    [snackbarState.visible],
  );

  const handleSeeAllPress = useCallback(() => {
    navigation.navigate('SeeAll');
  }, [navigation]);

  const renderSuggestedItem = useCallback(
    (props: {item: PetItem}) => (
      <CardSuggested
        petOwnerImage={props.item.petOwnerImage}
        ownerName={props.item.ownerName}
        petImage={props.item.petImage}
        petName={props.item.petName}
        petType={props.item.petType}
        isFavorite={props.item.isFavorite}
        onFavoritePress={snackbarFavorite =>
          showSnackbar(props.item.petName, snackbarFavorite)
        }
      />
    ),
    [showSnackbar],
  );

  const renderNewestItem = useCallback(
    (props: {item: PetItem}) => (
      <CardList
        petOwnerImage={props.item.petOwnerImage}
        ownerName={props.item.ownerName}
        petImage={props.item.petImage}
        petName={props.item.petName}
        petType={props.item.petType}
        isFavorite={props.item.isFavorite}
        onFavoritePress={snackbarFavorite =>
          showSnackbar(props.item.petName, snackbarFavorite)
        }
      />
    ),
    [showSnackbar],
  );

  const renderContent = useCallback(
    () => (
      <View>
        <Header
          navigation={navigation}
          profilePicture={images.profilePicture}
        />

        <XStack>
          <YStack flex={1}>
            <SectionHeader
              title="Suggested for You"
              onSeeAllPress={handleSeeAllPress}
            />
            <FlatList
              data={petData}
              horizontal={true}
              contentContainerStyle={styles.paddingContentContainerHorizontal}
              renderItem={renderSuggestedItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={ItemSeparatorHorizontal}
              removeClippedSubviews={true}
              initialNumToRender={4}
              maxToRenderPerBatch={4}
              windowSize={3}
            />
          </YStack>
        </XStack>

        <XStack>
          <YStack flex={1}>
            <SectionHeader title="Newest" onSeeAllPress={handleSeeAllPress} />
            <FlatList
              data={petData}
              style={styles.paddingContentContainerBottom}
              renderItem={renderNewestItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={ItemSeparatorVertical}
              removeClippedSubviews={true}
              initialNumToRender={4}
              maxToRenderPerBatch={4}
              windowSize={3}
            />
          </YStack>
        </XStack>
      </View>
    ),
    [navigation, handleSeeAllPress, renderSuggestedItem, renderNewestItem],
  );

  return (
    <YStack flex={1} backgroundColor={Colors.neutral200.color}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList data={[{}]} renderItem={renderContent} />
      <Snackbar
        visible={snackbarState.visible}
        onDismiss={() => setSnackbarState(prev => ({...prev, visible: false}))}
        duration={200}
        style={{
          ...styles.snackbarContainer,
          backgroundColor: snackbarState.background,
        }}>
        {snackbarState.message}
      </Snackbar>
    </YStack>
  );
};

export default memo(HomeScreen);
