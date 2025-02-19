import React, {useState} from 'react';
import {Text, Button, XStack, YStack, Card, Image, View} from 'tamagui';
import {StatusBar} from 'react-native';
import ArrowBackIcon from '../../../assets/icons/ic_arrow_back.svg';
import FavoriteIcon from '../../../assets/icons/ic_favorite.svg';
import UnfavoriteIcon from '../../../assets/icons/ic_unfavorite.svg';
import PriceIcon from '../../../assets/icons/ic_price.svg';
import MaleIcon from '../../../assets/icons/ic_male.svg';
import DogIcon from '../../../assets/icons/ic_dog.svg';
import WeightIcon from '../../../assets/icons/ic_weight.svg';
import LocationIcon from '../../../assets/icons/ic_location.svg';
import Colors from '../../../assets/styles/Colors';
import styles from './styles';

const images = {
  pet_01: require('../../../assets/images/pet_01.png'),
  pet_01_detail: require('../../../assets/images/pet_01_detail.jpg'),
};

function DetailScreen() {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <YStack backgroundColor={Colors.neutral200.color}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.neutral200.color}
      />
      <XStack height={64} alignItems="center" justifyContent="center">
        <Button position={'absolute'} left={24} unstyled>
          <ArrowBackIcon />
        </Button>
        <Text style={styles.toolbarTitleText}>Pet Details</Text>
      </XStack>
      <XStack>
        <Card
          marginHorizontal={16}
          paddingHorizontal={24}
          flex={1}
          backgroundColor={Colors.neutral100.color}>
          <Image source={images.pet_01} style={styles.petImageOverview} />
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginBottom={24}
            marginTop={20}>
            <XStack alignItems="center">
              <Button pressStyle={styles.pressButtonScale} unstyled>
                <View
                  width={42}
                  height={42}
                  backgroundColor="#EBFFEF"
                  padding={9}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={8}>
                  <PriceIcon />
                </View>
              </Button>
              <Text style={styles.petPriceText}>Rp1.000.0000</Text>
            </XStack>
            <View>
              <Button
                onPress={toggleFavorite}
                pressStyle={styles.pressButtonScale}
                unstyled>
                <View
                  width={42}
                  height={42}
                  backgroundColor="#FFEEF0"
                  padding={9}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={8}>
                  {isFavorite ? (
                    <FavoriteIcon width={24} height={24} />
                  ) : (
                    <UnfavoriteIcon width={24} height={24} />
                  )}
                </View>
              </Button>
            </View>
          </XStack>
        </Card>
      </XStack>
      <XStack>
        <Card
          marginTop={16}
          marginHorizontal={16}
          padding={24}
          flex={1}
          backgroundColor={Colors.neutral100.color}>
          <XStack>
            <Image
              source={images.pet_01_detail}
              width={100}
              height={100}
              borderRadius={8}
            />
            <YStack marginLeft={16}>
              <Text style={styles.petNameText}>Nala Daisy</Text>
              <XStack marginTop={16}>
                <YStack>
                  <XStack alignItems="center">
                    <View
                      width={24}
                      height={24}
                      backgroundColor="#ECF7FF"
                      padding={4}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius={4}>
                      <MaleIcon />
                    </View>
                    <Text style={styles.petDetailInfoText}>Male</Text>
                  </XStack>
                  <XStack alignItems="center" marginTop={10}>
                    <View
                      width={24}
                      height={24}
                      backgroundColor={Colors.secondary200.color}
                      padding={4}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius={4}>
                      <DogIcon />
                    </View>
                    <Text style={styles.petDetailInfoText}>1.5 Years</Text>
                  </XStack>
                </YStack>
                <YStack marginLeft={16}>
                  <XStack alignItems="center">
                    <View
                      width={24}
                      height={24}
                      backgroundColor="#FFEEF0"
                      padding={4}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius={4}>
                      <WeightIcon />
                    </View>
                    <Text style={styles.petDetailInfoText}>2.5 Kg</Text>
                  </XStack>
                  <XStack alignItems="center" marginTop={10}>
                    <View
                      width={24}
                      height={24}
                      backgroundColor="#EBFFEF"
                      padding={4}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius={4}>
                      <LocationIcon />
                    </View>
                    <Text style={styles.petDetailInfoText}>Kalideres</Text>
                  </XStack>
                </YStack>
              </XStack>
            </YStack>
          </XStack>
        </Card>
      </XStack>
      <XStack>
        <Card
          marginTop={16}
          marginHorizontal={16}
          padding={24}
          flex={1}
          backgroundColor={Colors.neutral100.color}>
          <Text>Hai</Text>
        </Card>
      </XStack>
      <XStack>
        <Text>Pet Details</Text>
      </XStack>
      <XStack>
        <Text>Button Adopt Me</Text>
      </XStack>
    </YStack>
  );
}

export default DetailScreen;
