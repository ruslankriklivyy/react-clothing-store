import { SET_AUTH, SET_USER, SET_VISIBLE_AUTH } from '../../actionsTypes/actionsTypes';
import { ActionTypes } from '../actions/auth';

interface IUser {
  email: '' | string;
  password: '' | string;
  role: '' | string;
}

const initialState = {
  user: {} as IUser,
  isAuth: false as boolean,
  visibleAuth: false as boolean,
};

export type InitialState = typeof initialState;

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

    case SET_VISIBLE_AUTH:
      return {
        ...state,
        visibleAuth: action.payload,
      };

    default:
      return state;
  }
};
