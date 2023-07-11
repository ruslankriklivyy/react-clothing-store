import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

import Button from "@/components/Button";
import validateForm from "@/utils/validate";
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

const RegistrationForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, setVisibleLogin, resetForm } = props;

  const onChangeForm = () => {
    setVisibleLogin(true);
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

        <Button
          registration={true}
          disabled={isSubmitting}
          type="submit"
          addToCart
        >
          Зарегистрироваться
          <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
        </Button>

        <LoginOrRegistration>или</LoginOrRegistration>

        <LoginRegistrationLink onClick={() => onChangeForm()}>
          Войти
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
}

const Registration = withFormik<MyFormProps, FormValues, OtherProps>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
      setVisible: props.setVisible,
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    let isAuth = false;

    validateForm(isAuth, errors, values);

    return errors;
  },

  handleSubmit: (values, { resetForm }) => {
    console.log({ email: values.email, password: values.password });
    resetForm();
    values.setVisible(false);
  },
})(RegistrationForm);

export default Registration;
