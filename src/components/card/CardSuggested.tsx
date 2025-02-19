import React, {useState} from 'react';
import {Text, YStack, XStack, Image, Card, View, Button} from 'tamagui';
import Colors from '../../../assets/styles/Colors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CatIcon from '../../../assets/icons/ic_cat.svg';
import DogIcon from '../../../assets/icons/ic_dog.svg';
import FavoriteIcon from '../../../assets/icons/ic_favorite.svg';
import UnfavoriteIcon from '../../../assets/icons/ic_unfavorite.svg';

type RootStackParamList = {
  Detail: undefined;
};

type CardSuggestedNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;

type CardSuggestedProps = {
  petOwnerImage: any;
  ownerName: string;
  petImage: any;
  petName: string;
  petType: string;
  isFavorite: boolean;
  onFavoritePress: (snackbarFavorite: boolean) => void;
};

function CardSuggested({
  petOwnerImage,
  ownerName,
  petImage,
  petName,
  petType,
  isFavorite: initialFavorite,
  onFavoritePress,
}: CardSuggestedProps) {
  const navigation = useNavigation<CardSuggestedNavigationProp>();
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
    <Card
      backgroundColor={Colors.neutral100.color}
      borderRadius={16}
      maxWidth={200}
      pressStyle={styles.pressButtonScale}
      onPress={handlePress}>
      <XStack alignItems="center" marginVertical={16} marginLeft={16}>
        <Image source={petOwnerImage} width={30} height={30} borderRadius={8} />
        <YStack marginStart={8}>
          <Text style={styles.petOwnerDataText}>{ownerName}</Text>
          <Text style={styles.petOwnerInfoText}>Pet Owner</Text>
        </YStack>
      </XStack>
      <View position="relative">
        <Image
          source={petImage}
          width={168}
          height={150}
          borderRadius={8}
          marginHorizontal={16}
        />
        <Button
          onPress={toggleFavorite}
          style={styles.toggleFavorite}
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
      <XStack justifyContent="space-between" alignItems="center">
        <Text
          style={styles.petNameDataText}
          marginLeft={16}
          marginVertical={16}>
          {petName}
        </Text>
        <View
          marginRight={16}
          backgroundColor={Colors.secondary100.color}
          padding={4}
          borderRadius={6}>
          {getPetIcon()}
        </View>
      </XStack>
    </Card>
  );
}

export default CardSuggested;
