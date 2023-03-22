import { defineStore } from "pinia";
const Home = defineStore("home", {
  state: () => {
    return {
      home: {
        title: "this is home title",
      },
    };
  },
  actions: {},
});
export default Home;
