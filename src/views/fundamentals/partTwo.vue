<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">Javascript Fundamentals —— Part 2</p>
      <a-row>
        <a-col :span="11" class="text-left">
          <!-- S js 函数 -->
          <div>
            <p class="text-[28px]">一、js 函数</p>
            <p>函数是被设计为执行特定任务的代码块,会在某代码调用它时被执行</p>
            <p>parameters是在函数定义中所列的名称,arguments是当调用函数时由函数接收的真实的值。在函数中,参数是局部变量</p>
            <p class="font-semibold">函数调用</p>
            <p>函数中的代码将在其他代码调用该函数时执行:</p>
            <ul class="list-disc ml-4">
              <li>
                <p>当事件发生时（当用户点击按钮时）</p>
              </li>
              <li>
                <p>当 JavaScript 代码调用时</p>
              </li>
              <li>
                <p>自动的（自调用）</p>
              </li>
            </ul>
            <p class="font-semibold">函数返回</p>
            <p>当 JavaScript 到达 return 语句，函数将停止执行。通过 return 语句将结果返回</p>
          </div>
          <!-- E js 函数 -->

          <!-- S js 数组 -->
          <div>
            <p class="text-[28px]">二、js 数组</p>
            <p>数组是一种特殊的变量，它能够一次存放一个以上的值</p>
            <p class="font-semibold">数组创建方法</p>
            <p>语法1: let arrayName = [item1, item2, ...]</p>
            <p>语法2: let arrayName = new Array(item1, item2, ...)</p>
            <p>数组是一种特殊类型的对象。在 JavaScript 中对数组使用 typeof 运算符会返回 "object"。</p>
            <p class="font-semibold">如何识别数组</p>
            <ul class="list-disc ml-4">
              <li>
                <p>ES 5 Array.isArray()方法 会返回true/false (可能存在兼容性问题)</p>
              </li>
              <li>
                <p>创建isArray()函数</p>
                <a-textarea :value="isArrayFunText" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
                <p>解释:假如对象原型包含单词 "Array" 则返回 true</p>
              </li>
              <li>
                <p>instanceof运算符 arrayName instanceof Array 返回true/false</p>
              </li>
            </ul>
            <p class="font-semibold">数组方法</p>
            <a-table size="small" :columns="arrayColumns" :data-source="arrayData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <!-- E js 数组 -->
        </a-col>
        <a-col :span="2">
          <a-divider type="vertical" class="!h-full !border-white" dashed />
        </a-col>
        <a-col :span="11" class="text-left">
          <!-- S js 对象 -->
          <div>
            <p class="text-[28px]">三、js 对象</p>
            <p>对象是拥有属性和方法的数据</p>
            <p>对象可以包含多个值（多个变量），每个值以 name:value 对呈现</p>
            <p class="font-semibold">对象创建方法</p>
            <p>语法: let objectName = {name1: value1, name2: value2, ...}</p>
          </div>
          <!-- E js 对象 -->

          <!-- S js 数组\对象区别 -->
          <div>
            <p class="text-[28px]">四、js 数组\对象区别</p>
            <p>数组使用数字索引,对象使用命名索引</p>
            <p>数组是特殊类型的对象，具有数字索引</p>
            <p>JavaScript 不支持关联数组</p>
            <p>如果希望元素名为字符串（文本）则应该使用对象</p>
            <p>如果希望元素名为数字则应该使用数组</p>
          </div>
          <!-- E js 数组\对象区别 -->
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { arrayData, arrayColumns, personParams, BMIParams } from './data'

function hello() {
  console.log('Hello World!');
}
// hello()

function fruitProcessor(apples: number, oranges: number) {
  return `Juice with ${apples} apples and ${oranges} oranges`
}
const juice = fruitProcessor(1, 6)
// console.log(juice);

/************************************************************/

// 函数声明
function declaration() {
  return 'function declaration 函数声明'
}

// 函数表达式
const expression = function () {
  return 'function expression 函数表达式'
}

// console.log(declaration(), expression());

// 箭头函数
const arrow = () => 'arrow function 箭头函数'
const arrowValue = arrow()
// console.log(arrowValue);

// const input = value => value  // js
const input = (value: string | number) => value  // ts
const inputValue = input('input value')
// console.log(inputValue);

/*************************************************************/

// 计算年龄
function calcAge(birthYear: number) {
  const year = new Date().getFullYear()
  return year - birthYear
}
// 计算退休剩余年数
function yearsUntilRetirement(birthYear: number) {
  const retirement = 65 - calcAge(birthYear)
  return retirement > 0 ? retirement : 0
}
// console.log(yearsUntilRetirement(1998));

/*
编码挑战 #1

回到两支体操队，海豚队Dolphins和考拉队Koalas！有一个新的体操学科，它的工作方式不同。
每队比赛3次，然后计算3次得分的平均值（所以每队一个平均分）。
一支球队只有在其平均得分至少是另一支球队的两倍时才能获胜。否则，没有球队获胜！

1. 创建一个箭头函数'calcAverage'来计算3个分数的平均值
2. 使用函数计算两队的平均值
3. 创建一个函数'checkWinner'，它以每支球队的平均得分为参数（'avgDolphins' 和'avgKoalas'），然后根据上述规则将获胜者连同胜利分数一起记录到控制台。示例：“考拉获胜（30 对 13）”。
4. 使用“checkWinner”函数来确定 DATA 1 和 DATA 2 的获胜者。
5. 这次忽略平局。

测试数据 1：海豚得分 44、23 和 71。考拉得分 65、54 和 49
测试数据 2：海豚得分 85、54 和 41。考拉得分 23、34 和 27

提示：要计算 3 个值的平均值，请将它们加在一起并除以 3
提示：要检查数字 A 是否至少是数字 B 的两倍，请检查 A >= 2 * B。将此应用于团队的平均分数😉

祝你好运 😀
*/
const calcAverage = (a: number, b: number, c: number) => (a + b + c) / 3
const avgDolphins = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(65, 54, 49)
// console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins: number, avgKoalas: number) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `海豚队获胜 🏆 (${avgDolphins} vs ${avgKoalas})`
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `海豚队获胜 🏆 (${avgDolphins} vs ${avgKoalas})`
  } else {
    return `没有队伍获胜`
  }
}
// console.log(checkWinner(avgDolphins, avgKoalas));

/************************** 数组 *****************************/
const isArrayFunText = `function isArray(){
    return ['Array'].includes(value.constructor.toString())
}`

const arr = ['孙悟空', '坂田银时', '蒙奇·D·路飞', '犬夜叉', '荻野千寻', '御坂美琴', '五更琉璃']
// 添加元素
// 向数组末尾添加新元素，并返回新长度
arr.push('江户川柯南')
// 将新元素添加到数组的开头，并返回新的长度
arr.unshift('漩涡鸣人')
// console.log(arr);

// 删除元素
// 删除数组的最后一个元素，并返回该元素
arr.pop()
// 删除数组的第一个元素，并返回该元素
arr.shift()
// console.log(arr);

/*
编码挑战 #2

Steven 仍在构建他的小费计算器，使用与以前相同的规则：如果账单价值在 50 到 300 之间，则支付 15% 的小费，如果值不同，则小费为 20%。

1. 编写一个函数'calcTip'，将任何账单值作为输入并返回相应的小费，根据上述规则计算（如果需要，您可以查看第一个小费计算器挑战的代码）。使用你最喜欢的函数类型。使用账单值 100 测试函数。
2. 现在让我们使用数组！因此，创建一个包含以下测试数据的数组“票据”。
3. 创建一个数组“tips”，其中包含每张账单的小费值，根据您之前创建的函数计算得出。
4. BONUS：创建一个包含总值的数组“total”，即账单+小费。

测试数据：125、555 和 44

提示：请记住，数组的每个位置都需要一个值，而该值实际上可以是函数的返回值！所以你可以将一个函数作为数组值调用（所以不要先将提示值存储在单独的变量中，而是直接存储在新数组中）😉

祝你好运 😀
*/

const calcTip = (bill: number) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(tips, total);

/*************************** 对象 ****************************/

// 添加类型注解 处理ts动态添加属性报错问题
const person: personParams = {
  name: '石昊',
  alias: ['荒天帝', '荒', '罪', '天庭之主', '石皇', '荒天候', '荒天王', '最爱吃兽奶', '小不点'],
  clan: '石族',
  realm: '仙帝境',
  wife: ['火灵儿', '云曦', '清漪'],
  birthYear: 2013,

  // 每次调用都是执行该方法,浪费资源
  // calcAge: function () {
  //   const year = new Date().getFullYear()
  //   return year - this.birthYear
  // }

  // 将值赋值给新属性, 只会计算一次 
  calcAge: function () {
    const year = new Date().getFullYear()
    this.age = 2022 - this.birthYear
    return this.age
  },
  // 此处使用calcAge()而不使用age是因为若外部没有调用calcAge,则不会有age属性
  getSummary: function () {
    return `${this.name} 已经 ${this.calcAge()} 岁了`
  }
}
// console.log(person.name);
// console.log(person['name']);
// 添加新元素
person.skill = '柳神法'
person['createKill'] = '他化自在大法'
// console.log(person);

// console.log(`${person.name}有${person.wife.join('、')} ${person.wife.length}位妻子,世人称他${person.alias[0]}`);

// console.log(person.calcAge());
// console.log(person.getSummary());

/*
编码挑战 #3

让我们回到 Mark 和 John 来比较他们的 BMI！ 这一次，让我们使用对象来实现计算！ 请记住：BMI = 质量 / 高度 ** 2 = 质量 /（高度 * 高度）。 （质量为公斤，高度为米）

1. 为它们中的每一个创建一个具有全名、质量和高度属性的对象（Mark Miller 和 John Smith）
2. 在每个对象上创建一个“calcBMI”方法来计算 BMI（两个对象上的方法相同）。 将 BMI 值存储到属性中，并从方法中返回它。
3. 打印较高BMI,连同全名和相应的BMI。 示例：“John Smith 的 BMI (28.3) 高于 Mark Miller 的 (23.9)！”

测试数据：Mark 重 78 kg，高 1.69 m。 John 体重 92 kg，身高 1.95 m。

祝你好运 😀
*/

const mark: BMIParams = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

const john: BMIParams = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

mark.calcBMI()
john.calcBMI()

if (mark.bmi > john.bmi) {
  // console.log(`${mark.fullName} 的BMI (${mark.bmi}) 高于 ${john.fullName} 的 (${john.bmi})`);
} else {
  // console.log(`${john.fullName} 的BMI  (${john.bmi}) 高于 ${mark.fullName} 的 (${mark.bmi})`);
}

/*
编码挑战 #4

让我们进一步改进 Steven 的小费计算器，这次使用循环！

1. 创建一个包含所有 10 个测试账单值的数组“账单”
2. 为提示和总计创建空数组（'tips' 和 'totals'）
3. 使用我们之前写的'calcTip'函数（无需重复）计算票据数组中每个票据值的小费和总值（票据+小费）。使用 for 循环执行 10 次计算！

测试数据：22、295、176、440、37、105、10、1100、86 和 52

提示：在循环中调用 calcTip 并使用 push 方法将值添加到 Tips 和 totals 数组 😉

4. 奖励：编写一个函数 'calcAverage'，它接受一个名为 'arr' 的数组作为参数。此函数计算给定数组中所有数字的平均值。这是一项艰巨的挑战（我们以前没有这样做过）！以下是解决方法：
  4.1。首先，您需要将数组中的所有值相加。要进行加法，首先创建一个从 0 开始的变量“sum”。然后使用 for 循环遍历数组。在每次迭代中，将当前值添加到“sum”变量中。这样，在循环结束时，您将所有值加在一起
  4.2.要计算平均值，请将您之前计算的总和除以数组的长度（因为这是元素的数量）
  4.3.使用“totals”数组调用函数

祝你好运 😀
*/

const improveBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const improveTips = []
const improveTotals = []
for (let index = 0; index < improveBills.length; index++) {
  const tip = calcTip(improveBills[index])
  improveTips.push(tip);
  improveTotals.push(improveBills[index] + tip);
}
// console.log(improveTips, improveTotals);

const improveCalcAverage = (arr: number[]) => {
  let sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum / arr.length
}
// console.log(improveCalcAverage(improveTotals));
// console.log(improveCalcAverage(improveTotals));
</script>

<style lang='less' scoped>
</style>