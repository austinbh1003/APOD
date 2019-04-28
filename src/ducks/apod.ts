import { Dispatch } from 'redux';
import { ApodState } from '../interfaces/state';

const LOAD_APOD = 'apod/LOAD_APOD';
const LOAD_APOD_SUCCESS = 'apod/LOAD_APOD_SUCCESS';
const LOAD_APOD_ERROR = 'apod/LOAD_APOD_ERROR';

const initialState: ApodState = {
  loading: false,
  pictureData: null
}

export default (state: ApodState = initialState, action: any = {}) => {
  switch (action.type) {
    case LOAD_APOD:
      return {
        ...state,
        loading: true
      }
    case LOAD_APOD_SUCCESS:
      return {
        ...state,
        loading: false,
        pictureData: action.payload
      }
    case LOAD_APOD_ERROR:
      return {
        ...state,
        loading: false
      }
    default: return state;
  }
}

export const loadApodSuccess = (data: any) => (
  { type: LOAD_APOD_SUCCESS, payload: data }
)

export const loadApodError = (error: any) => (
  { type: LOAD_APOD_ERROR, payload: error }
)

export const loadApod = () => {
  return (dispatch: Dispatch) => {
    dispatch({type: LOAD_APOD});
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") //&count=5
      .then((data: any) => data.json())
      .then((data: any) => dispatch(loadApodSuccess(data)))
      .catch((err: Error) => dispatch(loadApodError(err)))
  }
}