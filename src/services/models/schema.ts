import { translations } from "shared/localization";
import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
              .min(3, translations.tooShort).max(20, translations.tooLong).required(translations.errorFiledRequired),
    lastName: Yup.string()
              .min(3, translations.tooShort).max(20, translations.tooLong).required(translations.errorFiledRequired),
    email: Yup.string()
              .email(translations.errorInvalidEmail).required(translations.errorFiledRequired),
    password: Yup.string()
              .min(3, translations.tooShort)
              .required(translations.errorFiledRequired),
    confirmPassword: Yup.string()
              .min(3, translations.tooShort)
              .oneOf([Yup.ref('password')], translations.missmatchPassword)
              .required(translations.errorFiledRequired)                      
  })