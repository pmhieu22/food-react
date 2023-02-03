const types = {
  GET_FOOD_ITEMS: "GET_FOOD_ITEMS",
};

const actions = {
  getFoodItems: () => {
    return {
      type: types.GET_FOOD_ITEMS,
      payload: {},
    };
  },
};

const foodActions = {
  types,
  actions,
};

export default foodActions;
