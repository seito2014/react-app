export default (state = [], action) => {
  switch (action.type) {
    case 'JUDGE':
      state.push(action);
    default:
      return state;
  }
}
