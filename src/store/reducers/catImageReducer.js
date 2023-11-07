import {
    FETCH_CAT_IMAGE_REQUEST,
    FETCH_CAT_IMAGE_SUCCESS,
    FETCH_CAT_IMAGE_FAILURE,
  } from '../actions/catImageActions';
  
  const initialState = {
    imageUrl: '',
    loading: false,
    error: null,
  };
  
  const catImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CAT_IMAGE_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_CAT_IMAGE_SUCCESS:
        return { ...state, loading: false, imageUrl: action.payload.url };
      case FETCH_CAT_IMAGE_FAILURE:
        return { ...state, loading: false, error: action.payload, imageUrl: '' };
      default:
        return state;
    }
  };
  
  export default catImageReducer;
  