import { ActionTypes } from '../actions/auth';

interface IUser {
  email: '' | string;
  password: '' | string;
  role: '' | string;
}

const initialState = {
  user: {} as IUser,
  isAuth: false as boolean,
};

export type InitialState = typeof initialState;

const SET_AUTH = 'SET_AUTH';
const SET_USER = 'SET_USER';

export const auth = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          email: action.email,
          password: action.password,
          role: action.role,
        },
      };

    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};
