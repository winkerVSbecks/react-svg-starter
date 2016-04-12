import {
  WINDOW_RESIZE,
} from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  width: 100,
  height: 100,
  w: 100,
  h: 100,
});

function canvasReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case WINDOW_RESIZE:
    return state.merge(action.payload);

  default:
    return state;
  }
}

export default canvasReducer;
