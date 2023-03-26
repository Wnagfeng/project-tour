import { defineStore } from "pinia";
import { GetCityData } from "@/service";
const useCityStore = defineStore("City", {
  state: () => ({
    AllCityData: {},
  }),
  actions: {
    async fetchGetAllCityData() {
      const res = await GetCityData();
      this.AllCityData = res.data;
    },
  },
});
export default useCityStore;
