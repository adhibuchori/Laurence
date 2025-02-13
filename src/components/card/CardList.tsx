import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Card, Image, Text, View, XStack, YStack} from 'tamagui';
import Colors from '../../../assets/styles/Colors';
import CatIcon from '../../../assets/icons/ic_cat.svg';
import DogIcon from '../../../assets/icons/ic_dog.svg';
import styles from './styles';

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
};

function CardList({
  petOwnerImage,
  ownerName,
  petImage,
  petName,
  petType,
}: CardListProps) {
  const navigation = useNavigation<CardListNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Detail');
  };

  return (
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
        <YStack>
          <XStack>
            <View
              marginStart={16}
              marginTop={16}
              backgroundColor={Colors.secondary100.color}
              padding={4}
              borderRadius={6}>
              {petType === 'Dog' ? (
                <DogIcon width={16} height={16} />
              ) : petType === 'Cat' ? (
                <CatIcon width={16} height={16} />
              ) : null}
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
              <Text style={styles.cardListPetOwnerDataText}>{ownerName}</Text>
              <Text style={styles.cardListPetOwnerInfoText}>Pet Owner</Text>
            </YStack>
          </XStack>
        </YStack>
      </XStack>
    </Card>
  );
}

export default CardList;
