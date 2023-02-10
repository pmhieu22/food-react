const types = {
  GET_FOOD_ITEMS: "GET_FOOD_ITEMS",
  ADD_FOOD: "ADD_FOOD",
  REMOVE_FOOD: "REMOVE_FOOD",
  UPDATE_STATE: "UPDATE_STATE",
};

const actions = {
  getFoodItems: () => {
    return {
      type: types.GET_FOOD_ITEMS,
      payload: {},
    };
  },

  addFood: (id, amount) => {
    return {
      type: types.ADD_FOOD,
      payload: {
        id,
        amount,
      },
    };
  },

  removeFood: (id) => {
    return {
      type: types.REMOVE_FOOD,
      payload: {
        id,
      },
    };
  },

  updateState: (state = {}) => {
    return {
      type: types.UPDATE_STATE,
      payload: {
        state,
      },
    };
  },
};

const foodActions = {
  types,
  actions,
};

export default foodActions;
