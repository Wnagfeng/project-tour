import { defineStore } from "pinia";
const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);
const userMain = defineStore("main", {
  state: () => {
    return {
      nowData: startDate,
      newdata: endDate,
      isShowLogin: false,
    };
  },
});
export default userMain;
