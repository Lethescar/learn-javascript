import type { TableColumnType } from "ant-design-vue";

export const data = [
  {
    precedence: '21',
    operatorType: '圆括号',
    associativity: 'n/a',
    individualOperators: "( ... )",
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '20',
    operatorType: '成员访问',
    associativity: '从左到右',
    individualOperators: '.',
    precedenceRowSpan: 5,
    associativityRowSpan: 1
  },
  {
    precedence: '20',
    operatorType: '需计算的成员访问',
    associativity: '从左到右',
    individualOperators: '... [ ... ]',
    precedenceRowSpan: 0,
    associativityRowSpan: 1
  },
  {
    precedence: '20',
    operatorType: 'new (带参数列表)',
    associativity: 'n/a',
    individualOperators: 'new ... ( ... )',
    precedenceRowSpan: 0,
    associativityRowSpan: 1
  },
  {
    precedence: '20',
    operatorType: '函数调用',
    associativity: '从左到右',
    individualOperators: '... ( ... )',
    precedenceRowSpan: 0,
    associativityRowSpan: 1
  },
  {
    precedence: '20',
    operatorType: '可选链(Optional chaining)',
    associativity: '从左到右',
    individualOperators: '?.',
    precedenceRowSpan: 0,
    associativityRowSpan: 1
  },
  {
    precedence: '19',
    operatorType: 'new (无参数列表)',
    associativity: '从右到左',
    individualOperators: 'new ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '18',
    operatorType: '后置递增(运算符在后)',
    associativity: 'n/a',
    individualOperators: '... ++',
    precedenceRowSpan: 2,
    associativityRowSpan: 1
  },
  {
    precedence: '18',
    operatorType: '后置递减(运算符在后)',
    associativity: 'n/a',
    individualOperators: '... --',
    precedenceRowSpan: 0,
    associativityRowSpan: 1
  },
  {
    precedence: '17',
    operatorType: '逻辑非',
    associativity: '从右到左',
    individualOperators: '! ...',
    precedenceRowSpan: 10,
    associativityRowSpan: 10
  },
  {
    precedence: '17',
    operatorType: '按位非',
    associativity: '从右到左',
    individualOperators: '~ ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: '一元加法',
    associativity: '从右到左',
    individualOperators: '+ ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: '一元减法',
    associativity: '从右到左',
    individualOperators: '- ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: '前置递增',
    associativity: '从右到左',
    individualOperators: '++ ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: '前置递减',
    associativity: '从右到左',
    individualOperators: '-- ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: 'typeof',
    associativity: '从右到左',
    individualOperators: 'typeof ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: 'void',
    associativity: '从右到左',
    individualOperators: 'void ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: 'delete',
    associativity: '从右到左',
    individualOperators: 'delete ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '17',
    operatorType: 'await',
    associativity: '从右到左',
    individualOperators: 'await ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '16',
    operatorType: '幂',
    associativity: '从右到左',
    individualOperators: '... ** ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '15',
    operatorType: '乘法',
    associativity: '从左到右',
    individualOperators: '... * ...',
    precedenceRowSpan: 3,
    associativityRowSpan: 3
  },
  {
    precedence: '15',
    operatorType: '除法',
    associativity: '从左到右',
    individualOperators: '... / ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '15',
    operatorType: '取模',
    associativity: '从左到右',
    individualOperators: '... % ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '14',
    operatorType: '加法',
    associativity: '从左到右',
    individualOperators: '... + ...',
    precedenceRowSpan: 2,
    associativityRowSpan: 2
  },
  {
    precedence: '14',
    operatorType: '减法',
    associativity: '从左到右',
    individualOperators: '... - ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '13',
    operatorType: '按位左移',
    associativity: '从左到右',
    individualOperators: '... << ...',
    precedenceRowSpan: 3,
    associativityRowSpan: 3
  },
  {
    precedence: '13',
    operatorType: '按位右移',
    associativity: '从左到右',
    individualOperators: '... >> ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '13',
    operatorType: '无符号右移',
    associativity: '从左到右',
    individualOperators: '... >>> ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '12',
    operatorType: '小于',
    associativity: '从左到右',
    individualOperators: '... < ...',
    precedenceRowSpan: 6,
    associativityRowSpan: 6
  },
  {
    precedence: '12',
    operatorType: '小于等于',
    associativity: '从左到右',
    individualOperators: '... <= ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '12',
    operatorType: '大于',
    associativity: '从左到右',
    individualOperators: '... > ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '12',
    operatorType: '大于等于',
    associativity: '从左到右',
    individualOperators: '... >= ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '12',
    operatorType: 'in',
    associativity: '从左到右',
    individualOperators: '... in ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '12',
    operatorType: 'instanceof',
    associativity: '从左到右',
    individualOperators: '... instanceof ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '11',
    operatorType: '等号',
    associativity: '从左到右',
    individualOperators: '... == ...',
    precedenceRowSpan: 4,
    associativityRowSpan: 4
  },
  {
    precedence: '11',
    operatorType: '非等号',
    associativity: '从左到右',
    individualOperators: '... != ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '11',
    operatorType: '全等号',
    associativity: '从左到右',
    individualOperators: '... === ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '11',
    operatorType: '非全等号',
    associativity: '从左到右',
    individualOperators: '... !== ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '10',
    operatorType: '按位与',
    associativity: '从左到右',
    individualOperators: '... & ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '9',
    operatorType: '按位异或',
    associativity: '从左到右',
    individualOperators: '... ^ ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '8',
    operatorType: '按位或',
    associativity: '从左到右',
    individualOperators: '... | ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '7',
    operatorType: '逻辑与',
    associativity: '从左到右',
    individualOperators: '... && ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '6',
    operatorType: '逻辑或',
    associativity: '从左到右',
    individualOperators: '... || ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '5',
    operatorType: '空值合并',
    associativity: '从左到右',
    individualOperators: '... ?? ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '4',
    operatorType: '条件运算符',
    associativity: '从右到左',
    individualOperators: '... ? ... :',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '3',
    operatorType: '赋值',
    associativity: '从右到左',
    individualOperators: '... = \\ += \\ -= \\ **= \\ /= \\ %= \\ <<= \\ >>= \\ >>>= \\ &= \\ ^= \\ |= \\ &&= \\ ||= \\ ??= ...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '2',
    operatorType: 'yield',
    associativity: '从右到左',
    individualOperators: 'yield ...',
    precedenceRowSpan: 2,
    associativityRowSpan: 2
  },
  {
    precedence: '2',
    operatorType: 'yield*',
    associativity: '从右到左',
    individualOperators: 'yield* ...',
    precedenceRowSpan: 0,
    associativityRowSpan: 0
  },
  {
    precedence: '1',
    operatorType: '扩展运算符',
    associativity: 'n/a',
    individualOperators: '...',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
  {
    precedence: '0',
    operatorType: '逗号',
    associativity: '从右到左',
    individualOperators: ',',
    precedenceRowSpan: 1,
    associativityRowSpan: 1
  },
];

export const columns: TableColumnType[] = [
  {
    title: "优先级",
    dataIndex: "precedence",
    customCell: (_) => {
      return { rowSpan: _.precedenceRowSpan };
    },
  },
  {
    title: "运算类型",
    dataIndex: "operatorType",
  },
  {
    title: "关联性",
    dataIndex: "associativity",
    customCell: (_) => {
      return { rowSpan: _.associativityRowSpan };
    },
  },
  {
    title: "运算符",
    dataIndex: "individualOperators",
  },
]; 
