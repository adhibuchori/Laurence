import {StyleSheet} from 'react-native';
import FontFamily from '../../../assets/styles/typography/FontFamily';
import Colors from '../../../assets/styles/Colors';
import Typography from '../../../assets/styles/typography/Typography';
import LineHeight from '../../../assets/styles/typography/LineHeight';
import LetterSpacing from '../../../assets/styles/typography/LetterSpacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  toolbarTitleText: {
    ...FontFamily.plusJakartaSansRegular,
    ...Colors.neutral900,
    fontSize: 22,
    lineHeight: 28,
  },
  petImageOverview: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  pressButtonScale: {
    transform: [{scale: 0.95}],
  },
  petPriceText: {
    ...Typography.h5,
    ...FontFamily.plusJakartaSansBold,
    marginLeft: 10,
  },
  petNameText: {
    ...Typography.h4,
  },
  petDetailInfoText: {
    ...FontFamily.plusJakartaSansRegular,
    ...LineHeight(10).short,
    ...LetterSpacing.tight,
    fontSize: 10,
    marginLeft: 8,
  },
});

export default styles;
