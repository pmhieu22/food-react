import { request } from "./baseRequest";

const foodApi = {
  getFoodList: () => {
    return request({
      url: "/meals.json",
      method: "GET",
    });
  },

  updateFoodOrder: (orderedUser, orderedItems) => {
    return request({
      url: "order.json",
      method: "POST",
      data: {
        orderedUser: orderedUser,
        orderedItems: orderedItems,
      },
    });
  },
};

export default foodApi;
