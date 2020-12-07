export const SET_LANDING_CONFIG = "SET_LANDING_CONFIG";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export default {
  [SET_LANDING_CONFIG](state, data) {
    state.landStates = data;
  },
  [SET_IS_FETCHING](state, data) {
    state.isFetching = data;
  },
};
