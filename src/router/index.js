import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      path: "/favor",
      component: () => import("@/views/Favor/Favor.vue"),
    },
    {
      path: "/order",
      component: () => import("@/views/Order/Order.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/Message/Message.vue"),
    },
    {
      path: "/city",
      component: () => import("@/views/City/City.vue"),
      // 在这里定义是否需要展示TabBar的状态
      meta: {
        IsShowTabBar: true,
      },
    },
    {
      path: "/search",
      component: () => import("@/views/Search/Search.vue"),
      // 在这里定义是否需要展示TabBar的状态
      meta: {
        IsShowTabBar: true,
      },
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/Detail/Detail.vue"),
      // 在这里定义是否需要展示TabBar的状态
      meta: {
        IsShowTabBar: true,
      },
    },
  ],
});

export default router;
