import { defineStore } from "pinia";
import { getHomeHotSuggests } from "@/service/Module/Home";
export const useHomeHotSuggests = defineStore("HomeHotSuggests", {
  state: () => {
    return {
        HomeHotSuggests: {},
    };
  },
  actions: {
    async fetchHomeHotSuggestsData() {
      const res = await getHomeHotSuggests();
      this.HomeHotSuggests = res?.data;
    },
  },
});
