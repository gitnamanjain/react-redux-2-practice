export const ADD_TO_CART = "ADD_TO_CART";
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Laptop",
      price: 65000,
    },
    {
      id: 2,
      title: "Phone",
      price: 30000
    },
    {
      id: 3,
      title: "PlayStation",
      price: 55000,
    },
    
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const isInCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
