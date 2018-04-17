import AppRouteConfig from './AppRouteConfig';

const initialState = 
AppRouteConfig.router.getStateForAction(AppRouteConfig.router.getActionForPathAndParams('Splash'));

const navReducer = (state = initialState, action) => {
  const nextState = AppRouteConfig.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
