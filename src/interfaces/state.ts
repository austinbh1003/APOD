export interface PictureData {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
}

export interface ApodState {
  loading: boolean;
  pictureData: null | PictureData;
}

export interface UiState {
  fullScreenViewVisible: boolean;
}

export interface GlobalState {
  apod: ApodState;
  ui: UiState;
}