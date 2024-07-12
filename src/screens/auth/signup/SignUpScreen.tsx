import React, { useCallback, useContext, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./SignUpScreenStyle";
import { useTheme } from "@react-navigation/native";
import { KEYS, SCREENS } from "@shared-constants";
import CustomText from "@shared-components/CustomText/CustomText";
import { Image, View } from "react-native";
import InputText from "@shared-components/InputText/InputText";
import Button from "@shared-components/Button/Button";
import { setItem } from "utils";
import { AuthContext } from "context/AuthContext";
import { AuthData } from "@services/models";
import { LOGIN_BACKGROUND } from "assets/constant";
import { verticalScale } from "@theme/metrix";
import LinearGradient from "react-native-linear-gradient";

const SignUpScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { signIn } = useContext(AuthContext);

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleEmail = useCallback((text: string) => {
    console.log("handleEmail", text);
    setEmail(text);
  }, []);
  const handleName = useCallback((text: string) => {
    console.log("handleEmail", text);
    setName(text);
  }, []);
  const handlePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);
  const handleConfirmPassword = useCallback((text: string) => {
    setConfirmPassword(text);
  }, []);
  const doSignUp = () => {
    console.log(
      "Signup Success....",
      "name:" + name,
      "email:",
      email,
      "password:",
      password,
    );

    const user: AuthData = {
      name: name,
      email: email,
      password: password,
      isLoggedIn: true,
      isGuestLoggedIn: false,
    };
    signIn(user);
  };
  const renderUI = () => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: verticalScale(150),
          left: verticalScale(25),
          gap: verticalScale(10),
          position: "absolute",
          width: "85%",
        }}
      >
        <CustomText color={colors.secondaryWhite}>Name</CustomText>
        <InputText
          value={name}
          onChangeText={handleName}
          placeholder="Enter Name"
          inputStyle={styles.customInput}
        />
        <CustomText color={colors.secondaryWhite}>Email</CustomText>
        <InputText
          value={email}
          onChangeText={handleEmail}
          placeholder="Enter email"
          inputStyle={styles.customInput}
        />
        <CustomText color={colors.secondaryWhite}>Password</CustomText>
        <InputText
          value={password}
          onChangeText={handlePassword}
          placeholder="Enter password"
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <CustomText color={colors.secondaryWhite}>Confirm Password</CustomText>
        <InputText
          value={confirmPassword}
          onChangeText={handleConfirmPassword}
          placeholder="Confirm password"
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <Button
          buttonStyle={{ marginTop: verticalScale(16) }}
          title="Sign Up"
          onPress={doSignUp}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={LOGIN_BACKGROUND}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
        style={{
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {renderUI()}
      </LinearGradient>
    </View>
  );
};

export default SignUpScreen;
