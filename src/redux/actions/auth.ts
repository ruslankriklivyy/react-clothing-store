import { userApi } from '../../api/api';
import { ThunkAction } from 'redux-thunk';
import { InitialState } from '../reducers/auth';

const SET_USER = 'SET_USER';
const SET_AUTH = 'SET_AUTH';

export type Thunk = ThunkAction<Promise<void>, InitialState, unknown, ActionTypes>;

type SetUser = {
  type: typeof SET_USER;
  email: string;
  password: string;
};

export const setUser = (email: string, password: string): SetUser => ({
  type: SET_USER,
  email,
  password,
});

export const setRegistration = (email: string, password: string): Thunk => async (dispatch) => {
  const data = await userApi.registration(email, password);
  dispatch(setAuth(data.token && true));
  dispatch(setUser(email, password));
};

export const setLogin = (email: string, password: string): Thunk => async (dispatch) => {
  const data = await userApi.login(email, password);
  const token = JSON.parse(localStorage.getItem('token') || '{}');
  dispatch(setUser(email, password));
  if (token) {
    dispatch(setAuth(true));
  }
};

type SetAuth = {
  type: typeof SET_AUTH;
  isAuth: boolean;
};

export const setAuth = (isAuth: boolean): SetAuth => ({
  type: SET_AUTH,
  isAuth,
});

export type ActionTypes = SetUser | SetAuth;
