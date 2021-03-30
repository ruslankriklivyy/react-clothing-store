import React from 'react';
import validateForm from '../utils/validate';
import {withFormik, FormikProps, FormikErrors, Form, Field} from 'formik';
import Button from './Button';
import arrowSvg from '../assets/img/arrow-white.svg';
import {userApi} from "../api/api";
import {
  LoginContent,
  LoginFormItem,
  ValidateErrors,
  LoginOrRegistration,
  LoginRegistrationLink
} from '../utils/stylesAuthBlock';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
  visibleLogin: boolean;
  visibleAuthBlock: boolean;
  setVisibleLogin: (visible: boolean) => void;
}

const LoginForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {touched, errors, isSubmitting, setVisibleLogin, resetForm} = props;

  const onChangeForm = () => {
    setVisibleLogin(false);
    resetForm();
  };

  return (
    <LoginContent>
      <Form>
        <LoginFormItem>
          <label htmlFor="email">ЭЛ.ПОЧТА</label>
          <Field id="email" type="e-mail" name="email" required/>
          {touched.email && errors.email && <ValidateErrors>{errors.email}</ValidateErrors>}
        </LoginFormItem>
        <LoginFormItem>
          <label htmlFor="password">ПАРОЛЬ</label>
          <Field id="password" type="password" name="password" required/>
          {touched.password && errors.password && (
            <ValidateErrors>{errors.password}</ValidateErrors>
          )}
        </LoginFormItem>
        <Button
          disabled={isSubmitting}
          type="submit"
          addToCart>
          Войти
          <img className="more-arrow" src={arrowSvg} alt="arrow svg"/>
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
  visibleAuthBlock: boolean;
  setVisibleLogin: (visible: boolean) => void;
}

const Login = withFormik<MyFormProps, FormValues, OtherProps>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    let isAuth = true;

    validateForm(isAuth, errors, values);

    return errors;
  },

  handleSubmit: (values, {resetForm}) => {
    userApi.login(values.email, values.password)
    resetForm()
  },
})(LoginForm);

export default Login;
