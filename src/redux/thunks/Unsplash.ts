import { AppThunk } from '../../types/types';
import { getImagesApiAction, unsplashErrorAction } from '../actions/unsplashActions';
import { ImageAPI } from '../../types/unsplash';

export const getImagesApi = (images: ImageAPI[]): AppThunk => {
  return async dispatch => {
    try {
      dispatch(getImagesApiAction(images));
    } catch (err) {
      dispatch(unsplashErrorAction(err.message));
    }
  }
}