import { UiState } from '../interfaces/state';

const OPEN_FULLSCREEN_VIEW = 'ui/OPEN_FULLSCREEN_VIEW';
const CLOSE_FULLSCREEN_VIEW = 'ui/CLOSE_FULLSCREEN_VIEW';

const initialState: UiState = {
  fullScreenViewVisible: false
}

export default (state: UiState = initialState, action: any = {}) => {
  switch (action.type) {
    case OPEN_FULLSCREEN_VIEW:
      return {
        ...state,
        fullScreenViewVisible: true
      }
    case CLOSE_FULLSCREEN_VIEW:
      return {
        ...state,
        fullScreenViewVisible: false
      }
    default: return state;
  }
}

export const openFullScreenView = () => (
  { type: OPEN_FULLSCREEN_VIEW }
);

export const closeFullScreenView = () => (
  { type: CLOSE_FULLSCREEN_VIEW }
);