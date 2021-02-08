import { ImageAPI } from '../../types/unsplash';
import { UnsplashAction } from '../../types/types';
import { GET_IMAGES_UNSPLASH, UNSPLASH_ERROR } from "../../constants/actionTypes";

export const getImagesApiAction = (images: ImageAPI[]): UnsplashAction => ({
  type: GET_IMAGES_UNSPLASH,
  payload: images
})

export const unsplashErrorAction = (msg: string): UnsplashAction => ({
  type: UNSPLASH_ERROR,
  payload: msg
})
