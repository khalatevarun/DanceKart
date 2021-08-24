export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_ALL_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
