import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {ImageStyle as FastImageStyle} from 'react-native-fast-image';
import { ExtendedTheme } from '@react-navigation/native';
import fonts from '@fonts';
import fontSize from '@font-size';
import { horizontalScale, moderateScale, verticalScale } from '@theme/metrix';

type Style = {
  container: ViewStyle;
  recipeImage: FastImageStyle;
  rateContainer: ViewStyle;
  rateImage: ImageStyle;
  rateText: TextStyle;
  favouriteContainer: ViewStyle;
  bottomContainer: ViewStyle;
  titleText: TextStyle;
  descriptionContainer: ViewStyle;
  descriptionText: TextStyle;
};

export const ITEM_HEIGHT = verticalScale(180)

export default (theme: ExtendedTheme) => {
    const { colors } = theme;
    return StyleSheet.create<Style>({
      container: {
        marginRight: horizontalScale(16),
        width: horizontalScale(124),
        columnGap: horizontalScale(10)
      },
      recipeImage: {
        width: horizontalScale(124),
        height: verticalScale(124),
        borderRadius: moderateScale(8)
      },
      rateContainer: {
        position: 'absolute',
        top: verticalScale(8),
        left: horizontalScale(8),
        width: horizontalScale(56),
        height: verticalScale(28),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.grey4D,
        justifyContent: 'center'
      },
      rateImage: {
        marginLeft: 8,
        tintColor: colors.white,
      },
      rateText: {
        marginLeft: horizontalScale(5),
        marginTop: verticalScale(2),
        color: colors.white,
        fontFamily: fonts.poppins.bold,
        fontSize: fontSize.font14
      },
      favouriteContainer: {
        position: 'absolute',
        right: horizontalScale(8),
        top: verticalScale(16),
        width: horizontalScale(32),
        height: verticalScale(32),
        borderRadius: moderateScale(16),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      bottomContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(6),
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
      },
      titleText: {
        color: colors.grey,
        fontFamily: fonts.poppins.bold,
        fontSize: fontSize.font14
      },
      descriptionContainer: {
        flexDirection: 'row',
        marginTop: verticalScale(2),
        alignItems: 'center',
      },
      descriptionText: {
        color: colors.lightGrey,
        fontFamily: fonts.poppins.regular,
        fontSize: fontSize.font12
      },
    });
  };
  