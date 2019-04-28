import { connect } from 'react-redux'
import Home from './Home';
import { Dispatch } from 'react';
import { GlobalState } from '../interfaces/state';
import {loadApod} from '../ducks/apod';
import { isLoading, getPictureData } from '../selectors/apod';

const mapStateToProps = (state: GlobalState) => {
  return {
    loading: isLoading(state),
    pictureData: getPictureData(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  loadApod: () => {
    dispatch(loadApod());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)