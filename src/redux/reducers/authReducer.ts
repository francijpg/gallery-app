import { SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS } from "../../constants/actionTypes";
import { AuthState } from '../../types/user';
import { AuthAction } from '../../types/types';

const initialState: AuthState = {
  user: null,
  authenticated: false,
  loading: false,
  error: '',
  needVerification: false,
  success: ''
}

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        authenticated: false,
        loading: false
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case NEED_VERIFICATION:
      return {
        ...state,
        needVerification: action.payload
      }
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;