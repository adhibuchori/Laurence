import {StyleSheet} from 'react-native';
import Typography from '../../../assets/styles/typography/Typography';
import FontFamily from '../../../assets/styles/typography/FontFamily';
import LetterSpacing from '../../../assets/styles/typography/LetterSpacing';
import Colors from '../../../assets/styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.neutral100.color,
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    ...Typography.displayMedium,
    fontFamily: FontFamily.museoModernoBold.fontFamily,
    marginTop: 20,
    color: Colors.neutral800.color,
  },
  subTitle: {
    ...Typography.bodyMedium,
    textAlign: 'center',
    marginTop: 15,
    width: 270,
    lineHeight: 1.7 * Typography.bodyMedium.fontSize,
    color: Colors.neutral600.color,
  },
  footer: {
    ...Typography.caption,
    ...LetterSpacing.normal,
    position: 'absolute',
    bottom: 0,
    marginBottom: 16,
    color: Colors.neutral500.color,
  },
});

export default styles;
