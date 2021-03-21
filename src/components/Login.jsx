import React from 'react';
import styled from 'styled-components';
import fire from '../utils/fire';
import Button from './Button';
import arrowSvg from '../assets/img/arrow-white.svg';

const LoginWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 40px;
  z-index: 800;
  background: #fff;
  width: 350px;
  height: 400px;
  border-radius: 25px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const LoginContent = styled.div`
  padding: 30px;
  form {
    width: 100%;
    height: 100%;
  }
  button {
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 45px;
    img {
      margin-left: 20px;
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

const Login = () => {
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [user, setUser] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setPasswordError('');
    setEmailError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default:
            return err;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          default:
            return err;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  React.useEffect(() => {
    authListener();
  }, []);

  return (
    <LoginWrapper>
      <LoginContent>
        <form>
          <LoginFormItem>
            <label htmlFor="email">ЭЛ.ПОЧТА</label>
            <input
              required
              autoFocus
              type="e-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{emailError}</span>
          </LoginFormItem>
          <LoginFormItem>
            <label htmlFor="password">ПАРОЛЬ</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{passwordError}</span>
          </LoginFormItem>
          <Button addToCart type="text" onClick={() => handleLogin()}>
            Войти <img className="more-arrow" src={arrowSvg} alt="arrow svg" />
          </Button>
        </form>
      </LoginContent>
    </LoginWrapper>
  );
};

export default Login;
