export default (state = [], action) => {
  switch (action.type) {
    case 'ANSWER':
      state.push(action);
    default:
      return state;
  }
}
