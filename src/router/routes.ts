export default [
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页",
    },
    component: () => import("/@/views/layout/Index.vue"),
    children: [
      {
        path: "/",
        name: "Index",
        hidden: true,
        meta: {
          title: "首页",
        },
        component: () => import("/@/views/home/Index.vue"),
      },
    ],
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
  {
    path: "/test",
    name: "Test",
    meta: {
      title: "主页",
    },
    component: () => import("/@/views/layout/Index.vue"),
    children: [
      {
        path: "/test",
        name: "Test",
        meta: {
          title: "首页",
        },
        component: () => import("/@/views/home/Index.vue"),
      },
    ],
  },
];
