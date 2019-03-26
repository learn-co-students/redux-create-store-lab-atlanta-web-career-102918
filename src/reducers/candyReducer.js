function candyReducer(state = [], action ) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [ action.candy];
    default:
      return state;
  }
}

export default candyReducer;
