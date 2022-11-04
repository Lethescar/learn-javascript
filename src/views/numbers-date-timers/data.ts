import type { TableColumnType } from "ant-design-vue";
// 数字方法数据
export const numberData = [
  {
    method: "Number.parseFloat()",
    describe: "将字符串转换成浮点数",
  },
  {
    method: "Number.parseInt()",
    describe: "将字符串转换成整型数字",
  },
  {
    method: "Number.isFinite()",
    describe: "判断传递的参数是否为有限数字",
  },
  {
    method: "Number.isInteger()",
    describe: "判断传递的参数是否为整数",
  },
  {
    method: "Number.isNaN()",
    describe: "判断传递的参数是否为 isNaN()",
  },
  {
    method: "Number.isSafeInteger()",
    describe: "判断传递的参数是否为安全整数",
  },
];

// 表格配置
export const columns: TableColumnType[] = [
  {
    title: "方法",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
];
// math方法数据
export const mathData = [
  {
    method: "abs(x)",
    describe: "返回 x 的绝对值",
  },
  {
    method: "ceil(x)",
    describe: "对数进行上舍入",
  },
  {
    method: "floor(x)",
    describe: "对 x 进行下舍入",
  },
  {
    method: "max(x,y,z,...,n)",
    describe: "返回 x,y,z,...,n 中的最高值",
  },
  {
    method: "min(x,y,z,...,n)",
    describe: "返回 x,y,z,...,n中的最低值",
  },
  {
    method: "random()",
    describe: "返回 0 ~ 1 之间的随机数",
  },
  {
    method: "round(x)",
    describe: "四舍五入",
  },
];
// date方法数据
export const dateData = [
  {
    method: "getFullYear()",
    describe: "从 Date 对象以四位数字返回年份",
  },
  {
    method: "getMonth()",
    describe: "从 Date 对象返回月份 (0 ~ 11)",
  },
  {
    method: "getDay()",
    describe: "从 Date 对象返回一周中的某一天 (0 ~ 6)",
  },
  {
    method: "getDate()",
    describe: "从 Date 对象返回一个月中的某一天 (1 ~ 31)",
  },
  {
    method: "getHours()",
    describe: "返回 Date 对象的小时 (0 ~ 23)",
  },
  {
    method: "getMinutes()",
    describe: "返回 Date 对象的分钟 (0 ~ 59)",
  },
  {
    method: "getSeconds()",
    describe: "返回 Date 对象的秒数 (0 ~ 59)",
  },
  {
    method: "getMilliseconds()",
    describe: "返回 Date 对象的毫秒(0 ~ 999)",
  },
  {
    method: "getTime()",
    describe: "返回 1970 年 1 月 1 日至今的毫秒数",
  },
  {
    method: "setFullYear()",
    describe: "设置 Date 对象中的年份（四位数字）",
  },
  {
    method: "setMonth()",
    describe: "设置 Date 对象中月份 (0 ~ 11)",
  },
  {
    method: "setDate()",
    describe: "设置 Date 对象中月的某一天 (1 ~ 31)",
  },
  {
    method: "setHours()",
    describe: "设置 Date 对象中的小时 (0 ~ 23)",
  },
  {
    method: "setMinutes()",
    describe: "设置 Date 对象中的分钟 (0 ~ 59)",
  },
  {
    method: "setSeconds()",
    describe: "设置 Date 对象中的秒钟 (0 ~ 59)",
  },
  {
    method: "setMilliseconds()",
    describe: "设置 Date 对象中的毫秒 (0 ~ 999)",
  },
  {
    method: "setTime()",
    describe: "setTime() 方法以毫秒设置 Date 对象",
  },
];
