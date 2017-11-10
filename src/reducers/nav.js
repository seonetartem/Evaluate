import { NavigationActions } from 'react-navigation';
import AppNavigation from '../navigators/AppNavigation';

const isNavAction = action => Object.values(NavigationActions).some(name => action.type === name);
const getActiveScreenName = (state) => {
  if (state.routes) {
    return getActiveScreenName(state.routes[state.index]);
  }
  return state.routeName;
};

const nav = (state, action) => {
  if (isNavAction(action) && action.uniqueScreen) {
    if (action.routeName === getActiveScreenName(state)) {
      return state;
    }
  }
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

export default nav;
