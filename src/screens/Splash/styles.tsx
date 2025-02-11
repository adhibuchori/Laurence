import {StyleSheet} from 'react-native';
import Typgrahpy from '../../../assets/styles/typography/Typography';
import LetterSpacing from '../../../assets/styles/typography/LetterSpacing';
import FontWeight from '../../../assets/styles/typography/FontWeight';
import Typography from '../../../assets/styles/typography/Typography';
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
    ...Typgrahpy.displayMedium,
    marginTop: 20,
    color: Colors.neutral800.color,
  },
  subTitle: {
    ...Typgrahpy.bodyMedium,
    textAlign: 'center',
    marginTop: 15,
    width: 270,
    lineHeight: 1.7 * Typography.bodyMedium.fontSize,
    color: Colors.neutral600.color,
  },
  footer: {
    ...Typgrahpy.caption,
    ...LetterSpacing.normal,
    ...FontWeight.regular,
    position: 'absolute',
    bottom: 0,
    marginBottom: 16,
    color: Colors.neutral500.color,
  },
});

export default styles;
