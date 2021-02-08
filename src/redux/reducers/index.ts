import { combineReducers } from 'redux';
import authReducer from './authReducer';
import galleryReducer from './galleryReducer';
import unsplashReducer from './unsplashReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  gallery: galleryReducer,
  unsplash: unsplashReducer
});

export default rootReducer;
