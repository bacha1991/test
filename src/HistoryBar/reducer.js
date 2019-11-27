const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case ADD:
      return payload && state.some(item => item.id === payload.id)
        ? state
        : [payload, ...state];
    case REMOVE:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};

export const addVideoToHistory = dispatch => payload => dispatch({ type: ADD, payload });
export const removeVideoFromHistory = dispatch => id => dispatch({ type: REMOVE, payload: { id } });
  