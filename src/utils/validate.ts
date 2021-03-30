interface FormValues {
  email: string;
  password: string;
}

const validateForm = (isAuth: boolean, errors: any, values: FormValues) => {
  const rules = {
    email: (value: string) => {
      if (!value) {
        errors.email = 'Введите E-mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неверный E-mail';
      }
    },
    password: (value: string) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/i.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Слишком лёгкий пароль';
      }
    },
  };
  Object.keys(values).forEach((key) => rules[key as keyof FormValues] && rules[key as keyof FormValues](values[key as keyof FormValues]));
};

export default validateForm;
