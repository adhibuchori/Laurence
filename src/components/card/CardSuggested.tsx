import React from 'react';
import {Text, YStack, XStack, Image, Card, View} from 'tamagui';
import Colors from '../../../assets/styles/Colors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import CatIcon from '../../../assets/icons/ic_cat.svg';
import DogIcon from '../../../assets/icons/ic_dog.svg';

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
};

function CardSuggested({
  petOwnerImage,
  ownerName,
  petImage,
  petName,
  petType,
}: CardSuggestedProps) {
  const navigation = useNavigation<CardSuggestedNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Detail');
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
      <Image
        source={petImage}
        width={168}
        height={150}
        borderRadius={8}
        marginHorizontal={16}
      />
      <XStack justifyContent="space-between" alignItems="center">
        <Text
          style={styles.petNameDataText}
          marginLeft={16}
          marginVertical={16}>
          {petName}
        </Text>
        <View marginRight={16} backgroundColor={Colors.secondary100.color} padding={4} borderRadius={6}>
          {petType === 'Dog' ? (
            <DogIcon width={16} height={16} />
          ) : petType === 'Cat' ? (
            <CatIcon width={16} height={16} />
          ) : null}
        </View>
      </XStack>
    </Card>
  );
}

export default CardSuggested;
