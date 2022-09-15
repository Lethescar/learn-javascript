import type { TableColumnType } from "ant-design-vue";

// set方法数据
export const setData = [
  {
    method: "add()",
    describe: "向 Set 添加新元素",
  },
  {
    method: "clear()",
    describe: "从 Set 中删除所有元素",
  },
  {
    method: "delete()",
    describe: "删除由其值指定的元素",
  },
  {
    method: "entries()",
    describe: "返回 Set 对象中值的数组",
  },
  {
    method: "has()",
    describe: "如果值存在则返回 true",
  },
  {
    method: "forEach()",
    describe: "为每个元素调用回调",
  },
  {
    method: "keys()",
    describe: "返回 Set 对象中值的数组",
  },
  {
    method: "values()",
    describe: "返回 Set 对象中元素值的数组",
  },
  {
    method: "size",
    describe: "返回元素计数",
  },
];

// set方法表格配置
export const setColumns: TableColumnType[] = [
  {
    title: "方法/属性",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
];

// map方法数据
export const mapData = [
  {
    method: "set()",
    describe: "为 Map 对象中的键设置值",
  },
  {
    method: "get()",
    describe: "获取 Map 对象中键的值",
  },
  {
    method: "entries()",
    describe: "返回 Map 对象中键/值对的数组",
  },
  {
    method: "entries()",
    describe: "返回 Set 对象中值的数组",
  },
  {
    method: "keys()",
    describe: "返回 Map 对象中键的数组",
  },
  {
    method: "values()",
    describe: "返回 Map 对象中值的数组",
  },
  {
    method: "clear()",
    describe: "删除 Map 中的所有元素",
  },
  {
    method: "delete()",
    describe: "删除由键指定的元素",
  },
  {
    method: "has()",
    describe: "如果键存在，则返回 true",
  },
  {
    method: "forEach()",
    describe: "为每个键/值对调用回调",
  },
  {
    method: "size",
    describe: "获取 Map 中键的值",
  },
];

// map方法表格配置
export const mapColumns: TableColumnType[] = [
  {
    title: "方法/属性",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
];

// string方法数据
export const stringData = [
  {
    method: "charAt()",
    describe: "返回在指定位置的字符",
  },
  {
    method: "charCodeAt()",
    describe: "返回在指定的位置的字符的 Unicode 编码",
  },
  {
    method: "concat()",
    describe: "连接两个或更多字符串，并返回新的字符串",
  },
  {
    method: "indexOf()",
    describe: "返回某个指定的字符串值在字符串中首次出现的位置",
  },
  {
    method: "includes()",
    describe: "查找字符串中是否包含指定的子字符串",
  },
  {
    method: "lastIndexOf()",
    describe:
      "从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置",
  },
  {
    method: "match()",
    describe: "查找找到一个或多个正则表达式的匹配",
  },
  {
    method: "repeat()",
    describe: "复制字符串指定次数，并将它们连接在一起返回",
  },
  {
    method: "replace()",
    describe: "在字符串中查找匹配的子串，并替换与正则表达式匹配的子串",
  },
  {
    method: "replaceAll()",
    describe: "在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串",
  },
  {
    method: "search()",
    describe: "查找与正则表达式相匹配的值",
  },
  {
    method: "slice()",
    describe: "提取字符串的片断，并在新的字符串中返回被提取的部分",
  },
  {
    method: "split()",
    describe: "把字符串分割为字符串数组",
  },
  {
    method: "substring()",
    describe: "提取字符串中两个指定的索引号之间的字符",
  },
  {
    method: "toLowerCase()",
    describe: "把字符串转换为小写",
  },
  {
    method: "toUpperCase()",
    describe: "把字符串转换为大写",
  },
  {
    method: "trim()",
    describe: "去除字符串两边的空白",
  },
  {
    method: "valueOf()",
    describe: "返回某个字符串对象的原始值",
  },
  {
    method: "toString()",
    describe: "转成字符串",
  },
  {
    method: "startsWith()",
    describe: "查看字符串是否以指定的子字符串开头",
  },
  {
    method: "endsWith()",
    describe: "判断当前字符串是否是以指定的子字符串结尾的（区分大小写）",
  },
];

// string方法表格配置
export const stringColumns: TableColumnType[] = [
  {
    title: "方法/属性",
    dataIndex: "method",
  },
  {
    title: "描述",
    dataIndex: "describe",
  },
];
