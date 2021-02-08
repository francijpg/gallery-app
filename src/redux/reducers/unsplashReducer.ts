import { GET_IMAGES_UNSPLASH, UNSPLASH_ERROR } from '../../constants/actionTypes';
import { ImageAPIState } from '../../types/unsplash';
import { UnsplashAction } from '../../types/types';

const initialState: ImageAPIState = {
  images: [],
  imagesApiLoaded: false
}

const unsplashReducer = (state = initialState, action: UnsplashAction) => {
  switch (action.type) {
    case GET_IMAGES_UNSPLASH:
      return {
        ...state,
        images: action.payload,
        imagesApiLoaded: true
      }
    case UNSPLASH_ERROR:
      return {
        ...state,
        error: action.payload,
        imagesApiLoaded: false
      }
    default:
      return state;
  }
}

export default unsplashReducer;