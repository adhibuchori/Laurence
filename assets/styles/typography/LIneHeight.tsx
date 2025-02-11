import {StyleSheet} from 'react-native';

const LineHeight = (fontSize: number) =>
  StyleSheet.create({
    short: {
      lineHeight: fontSize * 1.2,
    },
    normal: {
      lineHeight: fontSize * 1.4,
    },
    tall: {
      lineHeight: fontSize * 1.5,
    },
  });

export default LineHeight;
