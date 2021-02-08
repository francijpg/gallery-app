import { GET_IMAGES, ADD_IMAGE, DELETE_IMAGE, SET_IMAGE_ERROR, PRIVATE_IMAGE, GET_USER_IMAGES } from '../../constants/actionTypes';
import { GalleryState } from '../../types/gallery';
import { GalleryAction } from '../../types/types';

const initialState: GalleryState = {
  images: [],
  imagesLoaded: false,
  imagesPrivates: false,
}

const galleryReducer = (state = initialState, action: GalleryAction) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [action.payload, ...state.images]
      }
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        imagesLoaded: true
      }
    case DELETE_IMAGE:
      return {
        ...state,
        images: action.payload
      }
    case SET_IMAGE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case PRIVATE_IMAGE:
      return {
        ...state,
        images: action.payload,
        imagesPrivates: true
      }
    case GET_USER_IMAGES:
      return {
        ...state,
        images: action.payload,
        imagesLoaded: true
      }
    default:
      return state;
  }
}

export default galleryReducer;