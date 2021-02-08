import { ImageAPI } from "../types/unsplash";
import services from "../services";

const { apiCall } = services
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const url_photos = "https://api.unsplash.com/search/photos"
const url_photo = "https://api.unsplash.com/photos"

export const getUnsplashPictures = async (term: string, page: number) => {
  const fetchedPictures = await apiCall({
    method: 'GET',
    url: url_photos,
    params: {
      client_id: UNSPLASH_KEY,
      query: term,
      per_page: 12,
      page: page,
    },
  }).then((response) => {
    const picturesArray: ImageAPI[] = [];
    response.data.results.forEach((i: ImageAPI) => picturesArray.push(i));
    return picturesArray;
  }).catch((error) => error);
  return fetchedPictures;
};

export const getUnsplashSinglePicture = async (id: string) => {
  const fetchedPicture = await apiCall({
    method: 'GET',
    url: `${url_photo}/${id}`,
    params: {
      client_id: UNSPLASH_KEY,
    },
  }).then((response) => {
    let picture: ImageAPI;
    picture = response.data;
    return picture;
  }).catch((error) => error);
  return fetchedPicture;
};