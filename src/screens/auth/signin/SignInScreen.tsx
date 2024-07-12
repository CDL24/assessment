import React, {
  useCallback,
  useContext,
  useMemo,
  useState,
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

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { authData, signIn, guestSignIn } = useContext(AuthContext);
  console.log("SignIn...Called", authData);
  const handleUsername = useCallback((text: string) => {
    setUserName(text);
  }, []);
  const handlePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);
  const goToSignUp = async () => {
    // const response = await authenticateUser(username, password, authData, signIn)
    // if(response && response.authenticate){
    //   console.log("Login....Success", username, password);
    //   NavigationService.reset(SCREENS.HOME)
    // }else{
    //   console.log("Login....Failed", username, password);
    // }
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

      {/* <CustomText>Username</CustomText>
        <InputText
          value={username}
          onChangeText={handleUsername}
          placeholder="Enter your text"
          inputStyle={styles.customInput}
        />
        <CustomText>Password</CustomText>
        <InputText
          value={password}
          onChangeText={handlePassword}
          placeholder="Enter your password"
          inputStyle={styles.customInput}
          secureTextEntry={true}
        /> */}
      {topTitleView()}
      {bottomView()}
    </View>
  );
};

export default SignInScreen;
