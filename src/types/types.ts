import { SET_USER, SET_LOADING, SIGN_OUT, SET_ERROR, NEED_VERIFICATION, SET_SUCCESS, ADD_IMAGE, GET_IMAGES, DELETE_IMAGE, SET_IMAGE_ERROR, GET_IMAGES_UNSPLASH, UNSPLASH_ERROR, PRIVATE_IMAGE, GET_USER_IMAGES } from "../constants/actionTypes";
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../redux/store';
import { GalleryImage } from "./gallery";
import { User } from "./user";
import { ImageAPI } from "./unsplash";

// Interface actions to give type in reducers action
interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface NeedVerificationAction {
  type: typeof NEED_VERIFICATION;
  payload: boolean;
}

interface SetSuccessAction {
  type: typeof SET_SUCCESS;
  payload: string;
}

// Gallery
interface AddImageAction {
  type: typeof ADD_IMAGE;
  payload: GalleryImage;
}

interface GetImagesAction {
  type: typeof GET_IMAGES;
  payload: GalleryImage[];
}

interface DeleteImageAction {
  type: typeof DELETE_IMAGE;
  // payload: GalleryImage;
  payload: GalleryImage[];
}

interface SetImageErrorAction {
  type: typeof SET_IMAGE_ERROR;
  payload: string;
}

interface PrivateImageAction {
  type: typeof PRIVATE_IMAGE;
  payload: GalleryImage[];
}

interface GetUserImagesAction {
  type: typeof GET_USER_IMAGES;
  payload: GalleryImage[];
}

// Unsplash
interface GetImagesApiAction {
  type: typeof GET_IMAGES_UNSPLASH;
  payload: ImageAPI[];
}

interface SetUnsplashErrorAction {
  type: typeof UNSPLASH_ERROR;
  payload: string;
}

// Types
export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction | SetSuccessAction;
export type GalleryAction = AddImageAction | GetImagesAction | DeleteImageAction | SetImageErrorAction | PrivateImageAction | GetUserImagesAction;
export type UnsplashAction = GetImagesApiAction | SetUnsplashErrorAction;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AuthAction | GalleryAction | UnsplashAction
>