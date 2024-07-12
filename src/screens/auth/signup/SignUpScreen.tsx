import React, { useCallback, useContext, useMemo, useState } from "react";
import createStyles from "./SignUpScreenStyle";
import { useTheme } from "@react-navigation/native";
import { Image, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import InputText from "@shared-components/InputText/InputText";
import Button from "@shared-components/Button/Button";
import { AuthContext } from "context/AuthContext";
import { AuthData } from "@services/models";
import { LOGIN_BACKGROUND } from "assets/constant";
import LinearGradient from "react-native-linear-gradient";
import { translations } from "shared/localization";

const SignUpScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { signIn } = useContext(AuthContext);

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleEmail = useCallback((text: string) => {
    setEmail(text);
  }, []);
  const handleFirstName = useCallback((e: any) => {
    console.log(e)
    //setFirstName(text);
  }, []);
  const handleLastName = useCallback((text: string) => {
    setLastName(text);
  }, []);
  const handlePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);
  const handleConfirmPassword = useCallback((text: string) => {
    setConfirmPassword(text);
  }, []);
  const doSignUp = () => {
    //if(!firstName) setErrorMsg('Input field required!') 
    //if(!firstName) setErrorMsg('Input field required!') 

    const user: AuthData = {
      name: firstName+' '+lastName,
      email: email,
      password: password,
      isLoggedIn: true,
      isGuestLoggedIn: false,
    };
    signIn(user);
  };
  const renderUI = () => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.label}>{translations.firstName}</Text>
        <InputText
          value={firstName}
          onChangeText={handleFirstName}
          placeholder={translations.firstNamePlaceHolder}
          inputStyle={styles.customInput}
        />
        <Text style={styles.label}>{translations.lastName}</Text>
        <InputText
          value={lastName}
          onChangeText={handleLastName}
          placeholder={translations.lastNamePlaceHolder}
          inputStyle={styles.customInput}
        />
        <Text style={styles.label}>{translations.email}</Text>
        <InputText
          value={email}
          onChangeText={handleEmail}
          placeholder={translations.emailPlaceHolder}
          inputStyle={styles.customInput}
        />
        <Text style={styles.label}>{translations.passwordTitle}</Text>
        <InputText
          value={password}
          onChangeText={handlePassword}
          placeholder={translations.passwordPlaceHolder}
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <Text style={styles.label}>{translations.confirmPasswordTitle}</Text>
        <InputText
          value={confirmPassword}
          onChangeText={handleConfirmPassword}
          placeholder={translations.confirmPasswordPlaceHolder}
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <Button
          buttonStyle={styles.btnStyle}
          title={translations.signUp}
          onPress={doSignUp}
        />
      </View>
      
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image
        style={styles.imageBg}
        source={LOGIN_BACKGROUND}
      />
      <LinearGradient
        colors={[colors.startBlack, colors.endBlack]}
        style={styles.bottomViewLinear}>
        {renderUI()}
      </LinearGradient>
      </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
