import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    lineHeight: 28 * 1.2,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: '#343A40',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: '#6C757D',
  },
});

export default styles;
