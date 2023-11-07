export const FETCH_CAT_IMAGE_REQUEST = 'FETCH_CAT_IMAGE_REQUEST';
export const FETCH_CAT_IMAGE_SUCCESS = 'FETCH_CAT_IMAGE_SUCCESS';
export const FETCH_CAT_IMAGE_FAILURE = 'FETCH_CAT_IMAGE_FAILURE';

export const fetchCatImageRequest = () => ({ type: FETCH_CAT_IMAGE_REQUEST });
export const fetchCatImageSuccess = (image) => ({ type: FETCH_CAT_IMAGE_SUCCESS, payload: image });
export const fetchCatImageFailure = (error) => ({ type: FETCH_CAT_IMAGE_FAILURE, payload: error });

export const fetchRandomCatImage = () => async (dispatch) => {
  dispatch(fetchCatImageRequest());
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const image = data[0];
    dispatch(fetchCatImageSuccess(image));
  } catch (error) {
    dispatch(fetchCatImageFailure(error.toString()));
  }
};
