import { defineStore } from "pinia";
import { GetAllCityData } from "@/service/index";
const usecityData = defineStore("city", {
  state: () => {
    return {
      cityAllData: {},
      currentCity: {
        cityName: "安徽",
      },
    };
  },
  actions: {
    async fetchCityData() {
      const res = await GetAllCityData();
      //   把获取的数据放到state中
      this.cityAllData = res?.data;
    },
  },
});
export default usecityData;
