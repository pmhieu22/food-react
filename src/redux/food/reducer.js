import foodActions from "./action";

const initialState = {
  foodItem: {
    meals: [],
    totalAmount: 0,
    totalPrice: 0,
    isLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case foodActions.types.GET_FOOD_ITEMS:
      return {
        ...state,
        foodItem: {
          ...state.foodItem,
          isLoading: true,
        },
      };

    // case foodActions.types.ADD_FOOD:
    //   return {
    //     ...state,
    //     foodItem: {
    //       ...state.foodItem,
    //       totalAmount: payload.totalAmount,
    //     },
    //   };

    case foodActions.types.UPDATE_STATE:
      return {
        ...state,
        ...payload.state,
      };

    default:
      return state;
  }
};

export default reducer;
