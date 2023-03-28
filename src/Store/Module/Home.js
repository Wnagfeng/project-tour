import { defineStore } from "pinia";
import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomehouselist,
} from "@/service/Module/Home";
export const useHomeHotSuggests = defineStore("HomeHotSuggests", {
  state: () => {
    return {
      HomeHotSuggests: {},
      Categories: [],
      houselist: [],
      CurrentPage: 1,
    };
  },
  actions: {
    async fetchHomeHotSuggestsData() {
      const res = await getHomeHotSuggests();
      this.HomeHotSuggests = res?.data;
    },
    async fetchHomeCategoriesData() {
      const res = await getHomeCategories();
      this.Categories = res?.data;
    },
    async fetchHomeHouseList() {
      const res = await getHomehouselist(this.CurrentPage);
      this.houselist.push(...res?.data);
      this.CurrentPage++;
    },
  },
});
