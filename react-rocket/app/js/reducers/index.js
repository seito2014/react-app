const initialState = {
  index: 1
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return { index: state.index + 1}
    }
    default:
      return state
  }
};

export default reducer;