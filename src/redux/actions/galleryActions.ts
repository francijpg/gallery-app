import { GalleryImage } from '../../types/gallery';
import { GalleryAction } from '../../types/types';
import { GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, SET_IMAGE_ERROR, PRIVATE_IMAGE } from "../../constants/actionTypes";

export const getImagesAction = (arr: GalleryImage[]): GalleryAction => ({
  type: GET_IMAGES,
  payload: arr
})

export const addImageAction = (image: GalleryImage): GalleryAction => ({
  type: ADD_IMAGE,
  payload: image
})

export const deleteImageAction = (images: GalleryImage[]): GalleryAction => ({
  type: DELETE_IMAGE,
  payload: images
})

export const setImageError = (msg: string): GalleryAction => ({
  type: SET_IMAGE_ERROR,
  payload: msg
})

export const privateImageAction = (images: GalleryImage[]): GalleryAction => ({
  type: PRIVATE_IMAGE,
  payload: images
})
