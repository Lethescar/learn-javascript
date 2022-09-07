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
      title: "js基础",
    },
    component: () => import("/@/views/layout/Index.vue"),
    children: [
      {
        path: "/partOne",
        name: "PartOne",
        meta: {
          title: "js基础一",
        },
        component: () => import("/@/views/fundamentals/partOne.vue"),
      },
      {
        path: "/partTwo",
        name: "PartTwo",
        meta: {
          title: "js基础二",
        },
        component: () => import("/@/views/fundamentals/partTwo.vue"),
      },
    ],
  },
  {
    path: "/domAndEvents",
    name: "DomAndEvents",
    meta: {
      title: "dom及events基础",
    },
    component: () => import("/@/views/layout/Index.vue"),
    children: [
      {
        path: "/knowledge",
        name: "Knowledge",
        meta: {
          title: "知识点",
        },
        component: () => import("/@/views/dom-events/knowledge.vue"),
      },
      {
        path: "/guessNumber",
        name: "GuessNumber",
        meta: {
          title: "猜数字",
        },
        component: () => import("/@/views/dom-events/guessNumber.vue"),
      },
      {
        path: "/windowModal",
        name: "WindowModal",
        meta: {
          title: "弹窗",
        },
        component: () => import("../views/dom-events/windowModal.vue"),
      },
      {
        path: "/pigGame",
        name: "PigGame",
        meta: {
          title: "掷骰子",
        },
        component: () => import("../views/dom-events/pigGame.vue"),
      },
    ],
  },
  {
    path: "/dataStructuresOperators",
    name: "DataStructuresOperators",
    meta: {
      title: "数据结构及运算符",
    },
    component: () => import("/@/views/layout/Index.vue"),
    children: [
      {
        path: "/data",
        name: "Data",
        meta: {
          title: "知识点",
        },
        component: () => import("/@/views/data-structures-operators/index.vue"),
      },
    ],
  },
];
