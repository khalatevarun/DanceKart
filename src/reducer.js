export const initialState = {
  basket: [],
  totalItems: 0,
  wishlist: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
        totalItems: state.totalItems + 1,
      };
    case 'REMOVE_ALL_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
        totalItems: state.totalItems - action.quantity,
      };
    case 'UPDATE_QUANTITY':
      const indexofItem = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );
      const olderQuantity = state.basket[indexofItem].quantity;

      const newBasket = state.basket.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item,
      );
      return {
        ...state,
        basket: newBasket,
        totalItems:
          state.totalItems + parseInt(action.quantity) - olderQuantity,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'UPDATE_WISHLIST':
      return {
        ...state,
        wishlist: action.wishlist,
      };
    case 'LOGOUT':
      return { basket: [], totalItems: 0, wishlist: [] };

    default:
      return state;
  }
};

export default reducer;
