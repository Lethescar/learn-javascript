<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">Javascript Fundamentals —— Part 1</p>
      <a-row>
        <a-col :span="11" class="text-left">
          <!-- S 变量命名规则 -->
          <div>
            <p class="text-[28px]">一、变量命名规则</p>
            <p>①变量命名必须以字母、下划线”_”或者”$”为开头。其他字符可以是字母、_、美元符号或数字;</p>
            <p>②变量名中不允许使用空格和其他标点符号,首个字不能为数字；</p>
            <p>③变量名长度不能超过255个字符;</p>
            <p>④变量名区分大小写(javascript是区分大小写的语言);</p>
            <p>⑤变量名必须放在同一行中;</p>
            <p>⑥不能使用脚本语言中保留的关键字、保留字、true、false 和 null 作为标识符。</p>
          </div>
          <!-- E 变量命名规则 -->

          <!-- S 数据类型 -->
          <div>
            <p class="text-[28px]">二、数据类型</p>
            <p>Number String Boolean Undefined Null Symbol Bigint</p>
          </div>
          <!-- E 数据类型 -->

          <!-- S let,var,const区别 -->
          <div>
            <p class="text-[28px]">三、let,const,var区别</p>
            <p>块级作用域： let 和 const 具有块级作用域,var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：内层变量可能覆盖外层变量；用来计数的循环变量泄露为全局变量。</p>
            <p>变量提升： var 存在变量提升,let 和 const 不存在变量提升,即在变量只能在声明之后使用,否在会报错。</p>
            <p>给全局添加属性： var 声明的变量为全局变量,并且会将该变量添加为全局对象的属性,但是 let 和 const 不会。</p>
            <p>重复声明： var 声明变量时,可以重复声明变量,后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。</p>
            <p>暂时性死区： 在使用 let、const 命令声明变量之前,该变量都是不可用的。这在语法上,称为暂时性死区。使用 var 声明的变量不存在暂时性死区。</p>
            <p>初始值设置： 在变量声明时,var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。</p>
            <p>指针指向： let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。</p>
          </div>
          <!-- S let,var,const区别 -->

          <!-- S 运算符优先级 -->
          <div>
            <p class="text-[28px]">四、运算符优先级</p>
            <a-table size="small" :columns="columns" :data-source="data" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <!-- E 运算符优先级 -->


        </a-col>
        <a-col :span="2">
          <a-divider type="vertical" class="!h-full !border-white" dashed />
        </a-col>
        <a-col :span="11" class="text-left">
          <!-- S js类型转换 -->
          <div>
            <p class="text-[28px]">五、js类型转换</p>
            <p>在 JavaScript 有两种类型转换的方式,分别是隐式类型转换和强制类型转换。</p>
            <p class="font-medium">隐式类型转换:</p>
            <div class="pl-4">
              <p>隐式转换就是自动转换,通常发生在一些数学运算中。因为 JavaScript
                是一种弱类型的语言,在一个表达式中,运算符两边的类型可以不同,JavaScript解释器会在运算之前将它们的类型进行转换</p>
              <p>JavaScript 中,表达式中包含以下运算符时,会发生隐式类型转换:</p>
              <ul class="list-disc ml-4">
                <li>
                  <p>算术运算符：加（+）、减（-）、乘（*）、除（/）、取模（%）</p>
                </li>
                <li>
                  <p>逻辑运算符：逻辑与（&&）、逻辑或（||）、逻辑非（!）</p>
                </li>
                <li>
                  <p>字符串运算符：+、+=</p>
                </li>
              </ul>
              <p>结论:</p>
              <ul class="list-disc ml-4">
                <li>
                  <p>字符串加数字,数字会转换为字符串</p>
                </li>
                <li>
                  <p>数字减字符串,字符串会转换为数字,如果字符串无法转换为数字（例如"abc"、"JavaScript"）,则会转换为 NaN</p>
                </li>
                <li>
                  <p>字符串减数字,字符串会转换为数字,如果字符串无法转换为数字,则会转换为 NaN</p>
                </li>
                <li>
                  <p>乘、除运算时,也会先将字符串转换为数字</p>
                </li>
              </ul>
            </div>
            <p class="font-medium">强制类型转换:</p>
            <div class="pl-4">
              <p>与隐式类型转换相反,强制类型转换需要手动进行,在 JavaScript 中,强制类型转换主要是通过调用全局函数来实现的,例如
                Number()、Boolean()、parseInt()、parseFloat() 等</p>
              <p>如果布尔对象无初始值或者其值为 0 \ -0 \ null \ "" \ false \ undefined \ NaN 那么对象的值为 false。否则,其值为 true（即使当变量值为字符串
                "false"
                时）！</p>
            </div>

          </div>
          <!-- E js类型转换 -->

          <!-- S '=='与'==='区别 -->
          <div>
            <p class="text-[28px]">六、'=='与'==='区别</p>
            <p>双等号==:</p>
            <ul class="list-disc ml-4">
              <li>
                <p>如果两个值类型相同,再进行三个等号(===)的比较</p>
              </li>
              <li>
                <p>如果两个值类型不同,也有可能相等,需根据以下规则进行类型转换在比较：</p>
                <ul class="ml-4" style="list-style-type:circle">
                  <li>
                    <p>如果一个是null,一个是undefined,那么相等</p>
                  </li>
                  <li>
                    <p>如果一个是字符串,一个是数值,把字符串转换成数值之后再进行比较</p>
                  </li>
                </ul>
              </li>
            </ul>
            <p>三等号===:</p>
            <ul class="list-disc ml-4">
              <li>
                <p>如果类型不同,就一定不相等</p>
              </li>
              <li>
                <p>如果两个都是数值,并且是同一个值,那么相等；如果其中至少一个是NaN,那么不相等</p>
              </li>
              <li>
                <p>如果两个都是字符串,每个位置的字符都一样,那么相等,否则不相等</p>
              </li>
              <li>
                <p>如果两个值都是true,或是false,那么相等</p>
              </li>
              <li>
                <p>如果两个值都引用同一个对象或是函数,那么相等,否则不相等</p>
              </li>
              <li>
                <p>如果两个值都是null,或是undefined,那么相等</p>
              </li>
            </ul>
          </div>
          <!-- E '=='与'==='区别 -->
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { columns, data } from './data'

let count = 40 + 8 + 23 - 10
// console.log('计算值:', count);

/*
编码挑战 #1

Mark 和 John 正在尝试比较他们的 BMI（身体质量指数）,该指数使用以下公式计算：BMI = 质量 / 身高 ** 2 = 质量 /（身高 * 身高）。 （质量单位为公斤,高度单位为米）。

1. 将 Mark 和 John 的质量和高度存储在变量中
2. 使用公式计算他们的BMI（你甚至可以实现两个版本）
3. 创建一个布尔变量“markHigherBMI”,其中包含有关 Mark 的 BMI 是否高于 John 的信息。

测试数据 1：标记重 78 kg,高 1.69 m。 John 体重 92 kg,身高 1.95 m。
测试数据 2：标记重 95 kg,高 1.88 m。 约翰体重 85 kg,身高 1.76 m。

祝你好运 😀
*/
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const BMIMark = weightMark / heightMark ** 2
const BMIJohn = weightJohn / heightJohn ** 2
const markHigherBMI = BMIMark > BMIJohn

/*
编码挑战 #2
使用 编码挑战 #1 中的 BMI 示例和您已经编写的代码,并对其进行改进：

1. 在控制台打印一个漂亮的输出,说明谁的 BMI 更高。 消息可以是“Mark 的 BMI 比 John 的高！” John BMI 比 Mark 的高！”
2. 使用模板文字将 BMI 值包含在输出中。 示例：“Mark 的 BMI (28.3) 高于 John 的 (23.9)！”

提示：使用 if/else 语句😉

祝你好运 😀
*/

if (markHigherBMI) {
  // console.log(`Mark 的 BMI (${BMIMark}) 高于 John 的 (${BMIJohn})！`);
} else {
  // console.log(`John 的 BMI (${BMIJohn}) 高于 Mark 的 (${BMIMark})！`);
}

/*
编码挑战 #3

有两个体操队,Dolphins海豚队和Koalas考拉队。他们相互竞争 3 次。平均分最高的获胜者赢得奖杯！

1. 使用下面的测试数据计算每支球队的平均分
2. 比较队伍的平均分来决定比赛的获胜者,并打印到控制台。不要忘记可能会有平局,因此也要对此进行测试（平局意味着他们的平均得分相同）。

3. 奖励 1：包括最低分数为 100 的要求。在此规则下,只有当一个团队的得分高于另一团队并且同时得分至少为 100 分时,它才会获胜。提示：使用逻辑运算符来测试最低分数,以及多个 else-if 块😉
4. 奖励 2：最低分数也适用于平局！因此,只有当两支球队得分相同且得分大于或等于 100 分时,才会发生平局。否则,没有球队赢得奖杯。

测试数据：海豚得分 96、108 和 89。考拉得分 88、91 和 110
测试数据奖励 1：海豚得分 97、112 和 101。考拉得分 109、95 和 123
测试数据奖励 2：海豚得分 97、112 和 101。考拉得分 109、95 和 106

祝你好运 😀
*/

const dolphinScore = (96 + 108 + 89) / 3
const koalasScore = (88 + 91 + 110) / 3

if (dolphinScore > koalasScore && dolphinScore >= 100) {
  // console.log('海豚队赢得奖杯 🏆');
} else if (dolphinScore < koalasScore && koalasScore >= 100) {
  // console.log('考拉队赢得奖杯 🏆');
} else if (dolphinScore === koalasScore && dolphinScore >= 100 && koalasScore >= 100) {
  // console.log('两队都赢得奖杯');
} else {
  // console.log('没有球队赢得奖杯 😭');
}
/*
编码挑战 #4

Steven 想为他在餐馆吃饭时构建一个非常简单的小费计算器。 在他的国家,如果账单价值在 50 到 300 之间,通常给 15% 的小费。如果值不在该区间,小费是 20%。

1. 你的任务是根据账单价值计算小费。 为此创建一个名为“tip”的变量。 不允许使用 if/else 语句😅（如果你觉得更简单,你可以从 if/else 语句开始,然后尝试将其转换为三元运算符！）
2. 将一个字符串打印到控制台,其中包含账单金额、小费和最终值（账单 + 小费）。 示例：'账单为 275,小费为 41.25,总价值为 316.25'

测试数据：测试钞票价值 275、40 和 430

提示：要计算一个值的 20%,只需将其乘以 20/100 = 0.2
提示：值 X 介于 50 和 300 之间,如果它 >= 50 && <= 300 😉

祝你好运 😀
*/

const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill / 100 * 15 : bill / 100 * 20
const total = bill + tip

// console.log(`账单为 ${bill},小费为 ${tip},总价值为 ${total}`);


</script>

<style lang="less" scoped>
:deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
