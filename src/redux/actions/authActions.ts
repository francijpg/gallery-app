import { AuthAction } from "../../types/types";
import { User } from "../../types/user";
import { SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS } from "../../constants/actionTypes";

export const setUser = (user: User): AuthAction => ({
  type: SET_USER,
  payload: user
})

export const setLoading = (value: boolean): AuthAction => ({
  type: SET_LOADING,
  payload: value
})

export const setSignOut = (): AuthAction => ({
  type: SIGN_OUT
})

export const setError = (msg: string): AuthAction => ({
  type: SET_ERROR,
  payload: msg
})

export const setNeedVerification = (value: boolean): AuthAction => ({
  type: NEED_VERIFICATION,
  payload: value
})

export const setSuccess = (msg: string): AuthAction => ({
  type: SET_SUCCESS,
  payload: msg
})