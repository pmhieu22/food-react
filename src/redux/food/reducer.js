import foodActions from "./action";

const initialState = {
  foodItem: {
    meals: {},
    isLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case foodActions.types.GET_FOOD_ITEMS:
      console.log("abc", state);
      return {
        ...state,
        foodItem: {
          ...state.foodItem,
          isLoading: true,
        },
      };

    default:
      return state;
  }
};

export default reducer;
