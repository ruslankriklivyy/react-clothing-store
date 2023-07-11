import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { Dispatch } from "redux";

import validateForm from "@/utils/validate";
import Button from "@/components/Button";
import {
  LoginContent,
  LoginFormItem,
  ValidateErrors,
  LoginOrRegistration,
  LoginRegistrationLink,
} from "@/utils/auth-block-styles";

import arrowSvg from "@/assets/img/arrow-white.svg";

interface FormValues {
  email: string;
  password: string;
  setVisible: (visible: boolean) => void;
}

interface OtherProps {
  message: string;
  visibleLogin: boolean;
  setVisible: (visible: boolean) => void;
  setVisibleLogin: (visible: boolean) => void;
}

const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, setVisibleLogin, resetForm } = props;

  const onChangeForm = () => {
    setVisibleLogin(false);
    resetForm();
  };

  return (
    <LoginContent>
      <Form>
        <LoginFormItem>
          <label htmlFor="email">ЭЛ.ПОЧТА</label>
          <Field id="email" type="e-mail" name="email" required />
          {touched.email && errors.email && (
            <ValidateErrors>{errors.email}</ValidateErrors>
          )}
        </LoginFormItem>
        <LoginFormItem>
          <label htmlFor="password">ПАРОЛЬ</label>
          <Field id="password" type="password" name="password" required />
          {touched.password && errors.password && (
            <ValidateErrors>{errors.password}</ValidateErrors>
          )}
        </LoginFormItem>
        <Button disabled={isSubmitting} type="submit" addToCart>
          Войти
          <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
        </Button>
        <LoginOrRegistration>или</LoginOrRegistration>
        <LoginRegistrationLink onClick={() => onChangeForm()}>
          Быстрая регистрация
        </LoginRegistrationLink>
      </Form>
    </LoginContent>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string;
  visibleLogin: boolean;
  setVisible: (visible: boolean) => void;
  setVisibleLogin: (visible: boolean) => void;
  dispatch: Dispatch;
}

const Login = withFormik<MyFormProps, FormValues, OtherProps>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
      setVisible: props.setVisible,
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    let isAuth = true;

    validateForm(isAuth, errors, values);

    return errors;
  },

  handleSubmit: (values, { props, resetForm }) => {
    console.log({ email: values.email, password: values.password });
    resetForm();
    values.setVisible(false);
  },
})(LoginForm);

export default Login;
