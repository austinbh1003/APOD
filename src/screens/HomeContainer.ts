import { connect } from 'react-redux'
import Home from './Home';
import { Dispatch } from 'react';
import { GlobalState } from '../interfaces/state';
import {loadApod} from '../ducks/apod';
import { isLoading, getPictureData } from '../selectors/apod';
import { openFullScreenView, closeFullScreenView } from '../ducks/ui';

const mapStateToProps = (state: GlobalState) => {
  return {
    loading: isLoading(state),
    pictureData: getPictureData(state),
    fullScreenViewVisible: state.ui.fullScreenViewVisible
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  loadApod: () => {
    dispatch(loadApod());
  },
  closeFullScreenView: () => {
    dispatch(closeFullScreenView());
  },
  openFullScreenView: () => {
    dispatch(openFullScreenView());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)