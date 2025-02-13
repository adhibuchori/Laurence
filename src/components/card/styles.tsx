import {StyleSheet} from 'react-native';
import FontFamily from '../../../assets/styles/typography/FontFamily';
import Typography from '../../../assets/styles/typography/Typography';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  petOwnerDataText: {
    ...FontFamily.plusJakartaSansBold,
    fontSize: 12,
  },
  petOwnerInfoText: {
    ...FontFamily.plusJakartaSansRegular,
    fontSize: 10,
  },
  petNameDataText: {
    ...FontFamily.plusJakartaSansBold,
    fontSize: 16,
  },
  pressButtonScale: {
    transform: [{scale: 0.95}],
  },
  cardListPetNameDataText: {
    ...Typography.h6,
    ...FontFamily.plusJakartaSansBold,
    ...Colors.neutral900,
    marginLeft: 10,
    marginTop: 16,
  },
  cardListPetOwnerDataText: {
    ...FontFamily.plusJakartaSansBold,
    ...Colors.neutral600,
    fontSize: 12,
  },
  cardListPetOwnerInfoText: {
    ...FontFamily.plusJakartaSansRegular,
    ...Colors.neutral500,
    fontSize: 10,
    marginTop: 4,
  },
});

export default styles;
