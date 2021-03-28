import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import styled from 'styled-components';
import Button from './Button';
import arrowSvg from '../assets/img/arrow-white.svg';

const LoginContent = styled.div`
  padding: 30px;
  form {
    width: 100%;
    height: 100%;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 45px;
    img {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
`;

const LoginFormItem = styled.div`
  margin-bottom: 25px;
  label {
    display: block;
    font-size: 17px;
    letter-spacing: 1px;
    color: #000;
    opacity: 0.8;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    height: 38px;
    font-size: 16px;
    letter-spacing: 1px;
    background: #f4f6f8;
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 20px;
  }
`;

const LoginOrRegistration = styled.span`
  position: relative;
  display: block;
  letter-spacing: 1px;
  width: 40px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: #000;
  opacity: 0.7;
  margin-top: 40px;
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 13px;
    z-index: 700;
    width: 15px;
    height: 1px;
    background: #000;
  }
  &::after {
    right: -13px;
  }
  &::before {
    left: -13px;
  }
`;

const LoginRegistrationLink = styled.span`
  display: block;
  letter-spacing: 1px;
  font-weight: 500;
  width: 200px;
  margin: 35px auto 0 auto;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;

const ValidateErrors = styled.span`
  display: block;
  margin-top: 5px;
  letter-spacing: 1px;
  opacity: 0.6;
  font-size: 14px;
`;

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

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, visibleLogin, setVisibleLogin, resetForm } = props;

  const onChangeForm = () => {
    setVisibleLogin(!visibleLogin);
    resetForm();
  };

  return (
    <LoginContent>
      <Form>
        <LoginFormItem>
          <label htmlFor="email">ЭЛ.ПОЧТА</label>
          <Field id="email" type="e-mail" name="email" required autoFocus />
          {touched.email && errors.email && <ValidateErrors>{errors.email}</ValidateErrors>}
        </LoginFormItem>
        <LoginFormItem>
          <label htmlFor="password">ПАРОЛЬ</label>
          <Field id="password" type="password" name="password" required />
          {touched.password && errors.password && (
            <ValidateErrors>{errors.password}</ValidateErrors>
          )}
        </LoginFormItem>
        <Button
          registration={visibleLogin === false && true}
          disabled={isSubmitting}
          type="submit"
          addToCart>
          {visibleLogin ? 'Войти' : 'Зарегистрироваться'}
          <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
        </Button>
        <LoginOrRegistration>или</LoginOrRegistration>
        <LoginRegistrationLink onClick={() => onChangeForm()}>
          {visibleLogin ? 'Быстрая регистрация' : 'Войти'}
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

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Поле обязательно для ввода';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Некорректный email';
    }
    if (!values.password) {
      errors.password = 'Поле обязательно для ввода';
    } else if (
      !/.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/i.test(
        values.password,
      )
    ) {
      errors.password = 'Некорректный пароль';
    }
    return errors;
  },

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerForm);

export default MyForm;
