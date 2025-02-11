import {StyleSheet} from 'react-native';
import FontWeight from './FontWeight';
import LetterSpacing from './LetterSpacing';
import LineHeight from './LIneHeight';

const Typgrahpy = StyleSheet.create({
  displayLarge: {
    ...LetterSpacing.tight,
    ...FontWeight.extraBold,
    fontSize: 56,
    ...LineHeight(56).short,
  },
  displayMedium: {
    ...LetterSpacing.tight,
    ...FontWeight.bold,
    fontSize: 48,
    ...LineHeight(48).short,
  },
  displaySmall: {
    ...LetterSpacing.tight,
    ...FontWeight.bold,
    fontSize: 40,
    ...LineHeight(40).short,
  },
  h1: {
    ...LetterSpacing.tight,
    ...FontWeight.bold,
    fontSize: 32,
    ...LineHeight(32).short,
  },
  h2: {
    ...LetterSpacing.tight,
    ...FontWeight.bold,
    fontSize: 28,
    ...LineHeight(28).short,
  },
  h3: {
    ...LetterSpacing.tight,
    ...FontWeight.semiBold,
    fontSize: 24,
    ...LineHeight(24).short,
  },
  h4: {
    ...LetterSpacing.tight,
    ...FontWeight.semiBold,
    fontSize: 20,
    ...LineHeight(20).short,
  },
  h5: {
    ...LetterSpacing.tight,
    ...FontWeight.medium,
    fontSize: 18,
    ...LineHeight(18).short,
  },
  h6: {
    ...LetterSpacing.tight,
    ...FontWeight.medium,
    fontSize: 16,
    ...LineHeight(16).short,
  },
  bodyLarge: {
    ...LetterSpacing.normal,
    ...FontWeight.regular,
    fontSize: 18,
    ...LineHeight(18).normal,
  },
  bodyMedium: {
    ...LetterSpacing.normal,
    ...FontWeight.regular,
    fontSize: 16,
    ...LineHeight(16).normal,
  },
  bodySmall: {
    ...LetterSpacing.normal,
    ...FontWeight.regular,
    fontSize: 14,
    ...LineHeight(14).normal,
  },
  caption: {
    ...LetterSpacing.wide,
    ...FontWeight.regular,
    fontSize: 12,
    ...LineHeight(12).normal,
  },
  label: {
    ...LetterSpacing.wide,
    ...FontWeight.medium,
    fontSize: 10,
    ...LineHeight(10).normal,
  },
});

export default Typgrahpy;
