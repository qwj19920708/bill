import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    name: "readBill",
    path: "/readBill",
    component: () => import("@/views/ReadBill.vue"),
    meta: {
      title: "读取数据",
    },
  },
  {
    name: "adjustData",
    path: "/adjustData",
    component: () => import("@/views/AdjustData.vue"),
    meta: {
      title: "数据调整",
    },
  },
  {
    name: "outputResult",
    path: "/outputResult",
    component: () => import("@/views/OutputResult.vue"),
    meta: {
      title: "输出结果",
    },
  },
  {
    name: "systemSetting",
    path: "/systemSetting",
    meta: {
      title: "系统设置",
    },
    children: [
      {
        name: "account",
        path: "account",
        component: () => import("@/views/systemSetting/Account.vue"),
        meta: {
          title: "账户设置",
        },
      },
      {
        name: "trader",
        path: "trader",
        component: () => import("@/views/systemSetting/Trader.vue"),
        meta: {
          title: "交易员设置",
        },
      },
      {
        name: "relation",
        path: "relation",
        component: () => import("@/views/systemSetting/Relation.vue"),
        meta: {
          title: "账户关系设置",
        },
      },
      {
        name: "fund",
        path: "fund",
        component: () => import("@/views/systemSetting/Fund.vue"),
        meta: {
          title: "其他资金设置",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: routes[0].path,
    },
    ...routes,
  ],
});

export default router;
