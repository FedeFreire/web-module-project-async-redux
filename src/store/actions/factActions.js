export const FETCH_FACT_REQUEST = 'FETCH_FACT_REQUEST';
export const FETCH_FACT_SUCCESS = 'FETCH_FACT_SUCCESS';
export const FETCH_FACT_FAILURE = 'FETCH_FACT_FAILURE';

export const fetchFactRequest = () => ({ type: FETCH_FACT_REQUEST });
export const fetchFactSuccess = (fact) => ({ type: FETCH_FACT_SUCCESS, payload: fact });
export const fetchFactFailure = (error) => ({ type: FETCH_FACT_FAILURE, payload: error });

export const fetchRandomFact = () => async (dispatch) => {
  dispatch(fetchFactRequest());
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    dispatch(fetchFactSuccess(data.fact)); 
  } catch (error) {
    dispatch(fetchFactFailure(error.toString()));
  }
};
