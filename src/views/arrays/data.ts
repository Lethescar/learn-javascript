import type { TableColumnType } from "ant-design-vue";
// string方法数据
export const spliceData = [
  {
    method: "index",
    describe:
      "必需。整数，指定在什么位置添加/删除项目，使用负值指定从数组末尾开始的位置",
  },
  {
    method: "num",
    describe: "可选。要删除的项目数。如果设置为 0，则不会删除任何项目",
  },
  {
    method: "item1, ..., itemX",
    describe: "可选。要添加到数组中的新项目",
  },
];

// string方法表格配置
export const spliceColumns: TableColumnType[] = [
  {
    title: "参数",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
];

// fill方法数据
export const fillData = [
  {
    method: "value",
    describe: "必需。用于填充数组的值",
  },
  {
    method: "start",
    describe: "可选。开始填充数组的索引（默认为 0）",
  },
  {
    method: "end",
    describe: "可选。停止填充数组的索引（默认为 array.length）",
  },
];

// fill方法表格配置
export const fillColumns: TableColumnType[] = [
  {
    title: "参数",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
];
