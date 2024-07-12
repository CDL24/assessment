import React, { useContext, useMemo } from "react";
import createStyles from "./SignUpScreenStyle";
import { useTheme } from "@react-navigation/native";
import { Image, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import InputText from "@shared-components/InputText/InputText";
import Button from "@shared-components/Button/Button";
import { AuthContext } from "context/AuthContext";
import { LOGIN_BACKGROUND } from "assets/constant";
import LinearGradient from "react-native-linear-gradient";
import { translations } from "shared/localization";
import { Formik } from 'formik';
import { doSignUp } from "utils";
import { SignUpSchema } from "@services/models/schema";

const SignUpScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { signIn } = useContext(AuthContext);

  const renderUI = () => {
    return (
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => doSignUp(values ,signIn)}
      >
        {({values, errors, touched, handleChange, setFieldTouched, isValid ,handleSubmit})=>(
        <View style={styles.subContainer}>
          <Text style={styles.label}>{translations.firstName}</Text>
          <InputText
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            placeholder={translations.firstNamePlaceHolder}
            inputStyle={styles.customInput}
            onBlur={()=> setFieldTouched('firstName')}
          />
          {touched.firstName && errors.firstName && (<Text style={styles.error}>{errors.firstName}</Text>)}
          <Text style={styles.label}>{translations.lastName}</Text>
          <InputText
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            placeholder={translations.lastNamePlaceHolder}
            inputStyle={styles.customInput}
            onBlur={()=> setFieldTouched('lastName')}
          />
          {touched.lastName && errors.lastName && (<Text style={styles.error}>{errors.lastName}</Text>)}
          <Text style={styles.label}>{translations.email}</Text>
          <InputText
            value={values.email}
            onChangeText={handleChange('email')}
            placeholder={translations.emailPlaceHolder}
            inputStyle={styles.customInput}
            onBlur={()=> setFieldTouched('email')}
          />
          {touched.email && errors.email && (<Text style={styles.error}>{errors.email}</Text>)}
          <Text style={styles.label}>{translations.passwordTitle}</Text>
          <InputText
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder={translations.passwordPlaceHolder}
            inputStyle={styles.customInput}
            secureTextEntry={true}
            onBlur={()=> setFieldTouched('password')}
          />
          {touched.password && errors.password && (<Text style={styles.error}>{errors.password}</Text>)}
          <Text style={styles.label}>{translations.confirmPasswordTitle}</Text>
          <InputText
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            placeholder={translations.confirmPasswordPlaceHolder}
            inputStyle={styles.customInput}
            secureTextEntry={true}
            onBlur={()=> setFieldTouched('confirmPassword')}
          />
          {touched.confirmPassword && errors.confirmPassword && (<Text style={styles.error}>{errors.confirmPassword}</Text>)}
          <Button
            disabled={!isValid}
            buttonStyle={isValid ? styles.btnStyle : styles.btnDisableStyle}
            title={translations.signUp}
            onPress={handleSubmit}
          />
        </View>
      )}
      </Formik>
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
