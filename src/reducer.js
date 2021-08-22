export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
