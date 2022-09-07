import { TableColumnType } from "ant-design-vue";

export const classListColumns: TableColumnType[] = [
  {
    title: "方法",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
]

export const classListData = [
  {
    method: 'add(class1, class2, ...)',
    describe: `在元素中添加一个或多个类名,如果指定的类名已存在，则不会添加`
  },
  {
    method: 'contains(class)',
    describe: `返回布尔值，判断指定的类名是否存在。返回值:true: 元素已经包含了该类名false: 元素中不包含该类名`
  },
  {
    method: 'item(index)',
    describe: `返回元素中索引值对应的类名,索引值从 0 开始,如果索引值在区间范围外则返回 null`
  },
  {
    method: 'remove(class1, class2, ...)',
    describe: `移除元素中一个或多个类名,移除不存在的类名，不会报错`
  },
  {
    method: 'toggle(class, true|false)',
    describe: `在元素中切换类名,在元素中切换类名。第一个参数为要在元素中移除的类名，并返回 false。如果该类名不存在则会在元素中添加类名，并返回 true。第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。`
  },
];
