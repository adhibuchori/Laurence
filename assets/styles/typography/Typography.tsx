import { StyleSheet } from 'react-native';
import FontFamily from './FontFamily';
import LetterSpacing from './LetterSpacing';
import LineHeight from './LineHeight';

const Typography = StyleSheet.create({
  displayLarge: {
    ...FontFamily.plusJakartaSansExtraBold,
    ...LetterSpacing.tight,
    fontSize: 56,
    ...LineHeight(56).short,
  },
  displayMedium: {
    ...FontFamily.plusJakartaSansBold,
    ...LetterSpacing.tight,
    fontSize: 48,
    ...LineHeight(48).short,
  },
  displaySmall: {
    ...FontFamily.plusJakartaSansBold,
    ...LetterSpacing.tight,
    fontSize: 40,
    ...LineHeight(40).short,
  },
  h1: {
    ...FontFamily.plusJakartaSansBold,
    ...LetterSpacing.tight,
    fontSize: 32,
    ...LineHeight(32).short,
  },
  h2: {
    ...FontFamily.plusJakartaSansBold,
    ...LetterSpacing.tight,
    fontSize: 28,
    ...LineHeight(28).short,
  },
  h3: {
    ...FontFamily.plusJakartaSansSemiBold,
    ...LetterSpacing.tight,
    fontSize: 24,
    ...LineHeight(24).short,
  },
  h4: {
    ...FontFamily.plusJakartaSansSemiBold,
    ...LetterSpacing.tight,
    fontSize: 20,
    ...LineHeight(20).short,
  },
  h5: {
    ...FontFamily.plusJakartaSansMedium,
    ...LetterSpacing.tight,
    fontSize: 18,
    ...LineHeight(18).short,
  },
  h6: {
    ...FontFamily.plusJakartaSansMedium,
    ...LetterSpacing.tight,
    fontSize: 16,
    ...LineHeight(16).short,
  },
  bodyLarge: {
    ...FontFamily.plusJakartaSansRegular,
    ...LetterSpacing.normal,
    fontSize: 18,
    ...LineHeight(18).normal,
  },
  bodyMedium: {
    ...FontFamily.plusJakartaSansRegular,
    ...LetterSpacing.normal,
    fontSize: 16,
    ...LineHeight(16).normal,
  },
  bodySmall: {
    ...FontFamily.plusJakartaSansRegular,
    ...LetterSpacing.normal,
    fontSize: 14,
    ...LineHeight(14).normal,
  },
  caption: {
    ...FontFamily.plusJakartaSansRegular,
    ...LetterSpacing.wide,
    fontSize: 12,
    ...LineHeight(12).normal,
  },
  label: {
    ...FontFamily.plusJakartaSansMedium,
    ...LetterSpacing.wide,
    fontSize: 10,
    ...LineHeight(10).normal,
  },
});

export default Typography;
