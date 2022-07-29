export default [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "主页",
    },
    component: () => import("/@/views/layout/Index.vue"),
  },
  {
    path: "/fundamentals",
    name: "Fundamentals",
    meta: {
      title: "基础知识",
    },
    component: () => import("/@/views/layout/Index.vue"),
    children: [
      {
        path: "/partOne",
        name: "PartOne",
        meta: {
          title: "模块一",
        },
        component: () => import("/@/views/fundamentals/partOne.vue"),
      },
      {
        path: "/partTwo",
        name: "PartTwo",
        meta: {
          title: "模块二",
        },
        component: () => import("/@/views/fundamentals/partTwo.vue"),
      },
    ],
  },
];
