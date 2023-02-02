import { request } from "./baseRequest";

const foodApi = {
  getFoodList: () => {
    return request({
      url: "/meals.json",
      method: "GET",
    });
  },
};

export default foodApi;
