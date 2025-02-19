import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Card, Image, Text, View, XStack, YStack} from 'tamagui';
import Colors from '../../../assets/styles/Colors';
import CatIcon from '../../../assets/icons/ic_cat.svg';
import DogIcon from '../../../assets/icons/ic_dog.svg';
import styles from './styles';
import FavoriteIcon from '../../../assets/icons/ic_favorite.svg';
import UnfavoriteIcon from '../../../assets/icons/ic_unfavorite.svg';

type RootStackParamList = {
  Detail: undefined;
};

type CardListNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type CardListProps = {
  petOwnerImage: any;
  ownerName: string;
  petImage: any;
  petName: string;
  petType: string;
  isFavorite: boolean;
  onFavoritePress: (snackbarFavorite: boolean) => void;
};

function CardList({
  petOwnerImage,
  ownerName,
  petImage,
  petName,
  petType,
  isFavorite: initialFavorite,
  onFavoritePress,
}: CardListProps) {
  const navigation = useNavigation<CardListNavigationProp>();
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handlePress = () => {
    navigation.navigate('Detail');
  };

  const toggleFavorite = () => {
    setIsFavorite(prev => {
      const snackbarFavorite = !prev;
      onFavoritePress(snackbarFavorite);
      return snackbarFavorite;
    });
  };

  const getPetIcon = () => {
    if (petType === 'Dog') {
      return <DogIcon width={16} height={16} />;
    }
    if (petType === 'Cat') {
      return <CatIcon width={16} height={16} />;
    }
    return null;
  };

  return (
    <View>
      <Card
        backgroundColor={Colors.neutral100.color}
        borderRadius={16}
        marginHorizontal={16}
        pressStyle={styles.pressButtonScale}
        onPress={handlePress}>
        <XStack>
          <YStack>
            <Image
              width={100}
              height={70}
              source={petImage}
              marginVertical={16}
              marginStart={16}
              borderRadius={8}
            />
          </YStack>
          <XStack flex={1} justifyContent="space-between">
            <YStack>
              <XStack>
                <View
                  marginStart={16}
                  marginTop={16}
                  backgroundColor={Colors.secondary100.color}
                  padding={4}
                  borderRadius={6}>
                  {getPetIcon()}
                </View>
                <Text style={styles.cardListPetNameDataText}>{petName}</Text>
              </XStack>
              <XStack marginTop={8} alignItems="center">
                <Image
                  width={24}
                  height={24}
                  borderRadius={24}
                  marginLeft={16}
                  source={petOwnerImage}
                />
                <YStack marginLeft={10}>
                  <Text style={styles.cardListPetOwnerDataText}>
                    {ownerName}
                  </Text>
                  <Text style={styles.cardListPetOwnerInfoText}>Pet Owner</Text>
                </YStack>
              </XStack>
            </YStack>
            <YStack>
              <View marginTop={16} marginRight={16}>
                <Button
                  onPress={toggleFavorite}
                  pressStyle={styles.pressButtonScale}
                  unstyled>
                  <View
                    width={30}
                    height={30}
                    backgroundColor="#FFEEF0"
                    padding={7}
                    borderRadius={100}>
                    {isFavorite ? (
                      <FavoriteIcon width={16} height={16} />
                    ) : (
                      <UnfavoriteIcon width={16} height={16} />
                    )}
                  </View>
                </Button>
              </View>
            </YStack>
          </XStack>
        </XStack>
      </Card>
    </View>
  );
}

export default CardList;
