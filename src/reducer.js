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
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_ALL_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case 'UPDATE_QUANTITY':
      const newBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item,
      );
      return {
        ...state,
        basket: newBasket,
      };

    case 'EMPTY_BASKET':
      console.log('STATE >>>>>', state);
      return {
        ...state,
        basket: [],
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
