import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import Typography from '../../../assets/styles/typography/Typography';
import FontFamily from '../../../assets/styles/typography/FontFamily';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.neutral100.color,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: width,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    ...Typography.h4,
    ...Colors.neutral800,
    ...FontFamily.plusJakartaSansBold,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 16,
  },
  subTitle: {
    ...Typography.bodySmall,
    ...Colors.neutral600,
    lineHeight: 14 * 1.8,
    textAlign: 'center',
    marginTop: 16,
    marginHorizontal: 24,
  },
  footerContainer: {
    height: 'auto',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 10,
    width: 20,
    borderRadius: 100,
    backgroundColor: Colors.neutral400.color,
    marginHorizontal: 5,
  },
  indicatorActice: {
    backgroundColor: Colors.secondary500.color,
    height: 15,
    width: 50,
    borderRadius: 100,
  },
  buttonContainer: {
    marginTop: 70,
    marginBottom: 30,
    width: width,
  },
  lastButtonContainer: {
    marginHorizontal: 24,
  },
  btn: {
    backgroundColor: Colors.primary500.color,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    ...Typography.bodyMedium,
    ...Colors.neutral100,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  skipButton: {
    borderColor: Colors.neutral100.color,
    backgroundColor: 'transparent',
  },
  skipText: {
    ...Typography.bodyMedium,
    ...Colors.neutral700,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  nextText: {
    ...Typography.bodyMedium,
    ...Colors.neutral100,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

export default styles;
