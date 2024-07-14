import React, {
  useContext,
  useMemo,
} from "react";
import * as NavigationService from "react-navigation-helpers";
import createStyles, { ICON_HEIGHT, ICON_WIDTH } from "./SignInScreenStyle";
import {
  useTheme,
} from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import { Image, Text, View } from "react-native";
import Button from "@shared-components/Button/Button";
import { AuthContext } from "context/AuthContext";
import { LOGIN_BACKGROUND } from "assets/constant";
import STAR from "@assets/images/star.svg";

import LinearGradient from "react-native-linear-gradient";
import { translations } from "shared/localization";


const SignInScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { guestSignIn } = useContext(AuthContext);
  
  const goToSignUp = async () => {
    NavigationService.navigate(SCREENS.SIGNUP);
  };

  const onStartCooking = () => {
    guestSignIn();
  };
  const topTitleView = () => {
    return (
      <View style={styles.topTitleContainer}>
        <View style={styles.imgView}><STAR height={ICON_HEIGHT} width={ICON_WIDTH}/></View>
        <Text style={styles.topText}>
          <Text style={styles.numberOfKText}>{translations.numberOf}</Text> {translations.premiumRecipe}
        </Text>
      </View>
    );
  };
  const bottomView = (): React.ReactElement => {
    return (
      <LinearGradient
        colors={[colors.startBlack, colors.endBlack]}
        style={styles.bottomViewLinear}>
        <View style={styles.bottomContainer}>
          <Text style={styles.textTitle}> {translations.yummTitle}</Text>
          <Text style={styles.textSubTitle}>{translations.findRecipe}</Text>
          <View style={styles.btnContainer}>
            <Button title={translations.signUp} onPress={() => goToSignUp()} />
            <Button
              buttonStyle={styles.btnStyle}
              titleStyle={styles.btnTitleStyle}
              title={translations.startCooking}
              onPress={() => onStartCooking()}
            />
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBg}
        source={LOGIN_BACKGROUND}
      />
      {topTitleView()}
      {bottomView()}
    </View>
  );
};
export default SignInScreen;
