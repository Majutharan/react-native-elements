import { SET_THEME } from './theme-actions';
import theme from './themes/default';

const initialState = theme;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME: {
      return action.theme;
    }

    default:
      return state;
  }
};
