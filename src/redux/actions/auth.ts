import { userApi } from '../../api/api';
import { ThunkAction } from 'redux-thunk';
import { InitialState } from '../reducers/auth';
import { SET_AUTH, SET_USER, SET_VISIBLE_AUTH } from '../../actionsTypes/actionsTypes';

export type Thunk = ThunkAction<Promise<void>, InitialState, unknown, ActionTypes>;

type SetUser = {
  type: typeof SET_USER;
  email: string;
  password: string;
  role: string;
};

export const setUser = (email: string, password: string, role: string): SetUser => ({
  type: SET_USER,
  email,
  password,
  role,
});

export const setRegistration = (email: string, password: string): Thunk => async (dispatch) => {
  const data = await userApi.registration(email, password);
  const token = JSON.parse(localStorage.getItem('token') || '{}');
  dispatch(setUser(email, password, data.role));
  if (token) {
    dispatch(setAuth(true));
  }
};

export const setLogin = (email: string, password: string): Thunk => async (dispatch) => {
  const data = await userApi.login(email, password);
  const token = JSON.parse(localStorage.getItem('token') || '{}');
  localStorage.setItem('role', JSON.stringify(data.role));
  dispatch(setUser(email, password, data.role));
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

type SetVisibleAuth = {
  type: typeof SET_VISIBLE_AUTH;
  payload: boolean;
};

export const setVisibleAuth = (visible: boolean): SetVisibleAuth => ({
  type: SET_VISIBLE_AUTH,
  payload: visible,
});

export type ActionTypes = SetUser | SetAuth | SetVisibleAuth;
