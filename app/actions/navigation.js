import * as types from './types';

export const navigatePush= (state) => ({
  type: types.NAVIGATION_PUSH,
  state,
})
export const navigatePop = () => ({
  type: types.NAVIGATION_POP,
})
export const navigateUpdate = (route) => ({
  type: types.NAVIGATION_UPDATE,
  route,
})
