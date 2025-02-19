import {StyleSheet} from 'react-native';
import Colors from '../../../assets/styles/Colors';
import FontFamily from '../../../assets/styles/typography/FontFamily';
import Typography from '../../../assets/styles/typography/Typography';

const styles = StyleSheet.create({
  welcomeTitleText: {
    ...Colors.neutral800,
    ...FontFamily.plusJakartaSansBold,
    fontSize: 16,
    maxWidth: 24 * 8,
  },
  greetingSubTitleText: {
    ...Colors.neutral600,
    ...FontFamily.plusJakartaSansRegular,
    fontSize: 12,
  },
  searchButton: {
    backgroundColor: Colors.primary500.color,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
  },
  sectionTitleText: {
    ...Typography.h4,
    ...FontFamily.plusJakartaSansBold,
    ...Colors.neutral800,
  },
  seeAllText: {
    ...Typography.caption,
    ...Colors.neutral600,
  },
  paddingContentContainerHorizontal: {
    paddingHorizontal: 16,
  },
  itemSeparatorHorizontalGap: {
    width: 16,
  },
  itemSeparatorVerticalGap: {
    height: 16,
  },
  paddingContentContainerBottom: {
    paddingBottom: 16,
  },
  snackbarText: {
    ...Typography.caption,
    ...Colors.neutral100,
    marginLeft: 8,
  },
  snackbarPetNameText: {
    fontWeight: 'bold',
    ...Colors.neutral100,
  },
  snackbarContainer: {
    borderRadius: 100,
    paddingHorizontal: 4,
    marginHorizontal: 16,
    marginBottom: 16,
  },
});

export default styles;
