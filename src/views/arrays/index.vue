<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px]">Arrays</p>
      <a-row>
        <a-col :span="11" class="text-left">
          <!-- S 数组方法 -->
          <div>
            <p class="text-[28px]">一、数组方法</p>
            <p>Array slice() 方法</p>
            <div class="pl-4">
              <p>slice() 方法以新的数组对象，返回数组中被选中的元素</p>
              <p>
                slice() 方法选择从给定的 start 参数开始的元素，并在给定的 end
                参数处结束，但不包括
              </p>
              <p>slice() 方法不会改变原始数组</p>
            </div>
            <p>Array splice() 方法</p>
            <div class="pl-4">
              <p>splice() 方法从数组添加/删除项目，并返回删除的项目</p>
              <p>splice() 方法会改变原始数组</p>
              <p>参数值</p>
              <a-table size="small" :columns="spliceColumns" :data-source="spliceData" bordered :pagination="false"
                :scroll="{ y: 600 }">
              </a-table>
            </div>
            <p>Array reverse() 方法</p>
            <div class="pl-4">
              <p>reverse() 方法反转数组中元素的顺序</p>
              <p>reverse() 方法将改变原始数组</p>
            </div>
            <p>Array concat() 方法</p>
            <div class="pl-4">
              <p>concat() 方法用于连接两个或多个数组</p>
              <p>concat() 方法不会更改现有数组，而是返回一个新数组，其中包含已连接数组的值</p>
            </div>
            <p>Array join() 方法</p>
            <div class="pl-4">
              <p>join() 方法将数组作为字符串返回</p>
              <p>元素将由指定的分隔符分隔。默认分隔符是逗号 (,)</p>
              <p>join() 方法不会改变原始数组</p>
            </div>
            <p>Array at() 方法</p>
            <div class="pl-4">
              <p>at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数</p>
            </div>
            <p>Array map() 方法</p>
            <div class="pl-4">
              <p>map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值</p>
              <p>map() 方法按照原始数组元素顺序依次处理元素</p>
              <p>map() 不会对空数组进行检测</p>
              <p>map() 不会改变原始数组</p>
            </div>
            <p>Array filter() 方法</p>
            <div class="pl-4">
              <p>filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素</p>
              <p>filter() 不会对空数组进行检测</p>
              <p>filter() 不会改变原始数组</p>
            </div>
            <p>Array reduce() 方法</p>
            <div class="pl-4">
              <p>reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值</p>
              <p>reduce() 可以作为一个高阶函数，用于函数的 compose</p>
              <p>reduce() 对于空数组是不会执行回调函数的</p>
            </div>
            <p>Array find() 方法</p>
            <div class="pl-4">
              <p>find() 方法返回通过测试（函数内判断）的数组的第一个元素的值</p>
              <p>find() 方法为数组中的每个元素都调用一次函数执行:</p>
              <div class="pl-4">
                <p>当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数</p>
                <p>如果没有符合条件的元素返回 undefined</p>
              </div>
              <p>find() 对于空数组，函数不会执行</p>
              <p>find() 并没有改变数组的原始值</p>
            </div>
            <p>Array findIndex() 方法</p>
            <div class="pl-4">
              <p>findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置</p>
              <p>findIndex() 方法为数组中的每个元素都调用一次函数执行:</p>
              <div class="pl-4">
                <p>当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数</p>
                <p>如果没有符合条件的元素返回 -1</p>
              </div>
              <p>findIndex() 对于空数组，函数不会执行</p>
              <p>findIndex() 并没有改变数组的原始值</p>
            </div>
            <p>Array every() 方法</p>
            <div class="pl-4">
              <p>every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）</p>
              <p>every() 方法使用指定函数检测数组中的所有元素:</p>
              <div class="pl-4">
                <p>如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测</p>
                <p>如果所有元素都满足条件，则返回 true</p>
              </div>
              <p>every() 不会对空数组进行检测</p>
              <p>every() 不会改变原始数组</p>
            </div>
            <p>Array some() 方法</p>
            <div class="pl-4">
              <p>some() 方法用于检测数组中的元素是否满足指定条件（函数提供）</p>
              <p>some() 方法会依次执行数组的每个元素:</p>
              <div class="pl-4">
                <p>如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测</p>
                <p>如果没有满足条件的元素，则返回false</p>
              </div>
              <p>some() 不会对空数组进行检测</p>
              <p>some() 不会改变原始数组</p>
            </div>
          </div>
          <!-- E 数组方法 -->
        </a-col>
        <a-col :span="2" class="text-left">
          <a-divider type="vertical" class="!h-full !border-white" dashed />
        </a-col>
        <a-col :span="11" class="text-left">
          <p>Array flat() 方法</p>
          <div class="pl-4">
            <p>flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回</p>
            <p>flat(depth) depth指定要提取嵌套数组的结构深度，默认值为 1</p>
          </div>
          <p>Array flatMap() 方法</p>
          <div class="pl-4">
            <p>flat() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些</p>
            <p>返回一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为 1</p>
          </div>
          <p>Array sort() 方法</p>
          <div class="pl-4">
            <p>sort() 方法用于对数组的元素进行排序</p>
            <p>排序顺序可以是字母或数字，并按升序或降序</p>
            <p>默认排序顺序为按字母升序</p>
            <p>使用数字排序,必须通过一个函数作为参数来调用,指定数字是按照升序还是降序排列</p>
          </div>
          <p>Array fill() 方法</p>
          <div class="pl-4">
            <p>fill() 方法用静态值填充数组中的指定元素</p>
            <p>可以指定开始和结束填充的位置。如果未指定，则将填充所有元素</p>
            <p>fill() 会覆盖原始数组</p>
            <a-table size="small" :columns="fillColumns" :data-source="fillData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { spliceColumns, spliceData, fillColumns, fillData } from "./data";
/** 数组方法 */
// slice()
let sliceArr = [1, 2, 3, 4, 5];
let sliceArr1 = sliceArr.slice(2); // 从下标为2的位置开始选择
// console.log(sliceArr1);   // [3, 4, 5]
let sliceArr2 = sliceArr.slice(2, 4); // 从下标为2的位置开始选择,下标为4之前的位置结束
// console.log(sliceArr2);   // [3, 4]
let sliceArr3 = sliceArr.slice(-2); // 选择后两个元素
// console.log(sliceArr3);   // [4, 5]
let sliceArr4 = sliceArr.slice(1, -2); // 从下标为1的位置开始选择,但不包括后两个元素
// console.log(sliceArr4);   // [2, 3]
let sliceArr5 = sliceArr.slice(); // 浅拷贝原数组
// console.log(sliceArr5);   // [1, 2, 3, 4, 5]

// splice()
let spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let spliceArr1 = spliceArr.splice(8); // 从下标为2的位置开始删除元素,并返回删除的元素
// console.log(spliceArr1);  // [9]  此时 spliceArr = [1, 2, 3, 4, 5, 6, 7, 8]
let spliceArr2 = spliceArr.splice(-1); // 删除数组最后一个元素,并返回删除的元素
// console.log(spliceArr2);  // [8]  此时 spliceArr = [1, 2, 3, 4, 5, 6, 7]
let spliceArr3 = spliceArr.splice(1, 2); // 在下标为1处,删除2个元素
// console.log(spliceArr3);  // [2,3]  此时 spliceArr = [1, 4, 5, 6, 7]
let spliceArr4 = spliceArr.splice(1, 0, 2, 3); // 在下标为1处,删除0个元素,添加2个元素(2,3)
// console.log(spliceArr4); // []  此时 spliceArr = [1, 2, 3, 4, 5, 6, 7]

// reverse()
let reverseArr = [1, 2, 3, 4, 5]
let reverseArr1 = reverseArr.reverse() // 数组元素反转
// console.log(reverseArr1);  // [5, 4, 3, 2, 1]

// concat()
let concatArr = [1, 2, 3, 4, 5]
let letters = ['a', 'b', 'c', 'd', 'e'] as any
let concatArr1 = concatArr.concat(letters)  // 数组拼接
// or 
concatArr1 = [...concatArr, ...letters]
// console.log(concatArr1);  // [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

// join()
let joinArr = [1, 2, 3, 4, 5]
let joinArr1 = joinArr.join('、')
// console.log(joinArr1);  // 1、2、3、4、5

// at()
let atArr = [1, 2, 3]
let atArr1 = atArr.at(0)   // 取到第一个元素
// console.log(atArr1);
let atArr2 = atArr.at(-1)   // 取到最后一个元素
// console.log(atArr2);

// forEach() Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currencies.forEach((value, key, map) => {
  // console.log(`${key}: ${value}`);
})
// forEach() Set
const currenciesUnique = new Set(["USD", "EUR", "GBP"]);
currenciesUnique.forEach((value, key, set) => {
  // console.log(`${key}: ${value}`);
})

// reduce()
/* array.reduce(function(total, currentValue, currentIndex, arr), initialValue) 
    total	必需。初始值, 或者计算结束后的返回值
    currentValue	必需。当前元素
    currentIndex	可选。当前元素的索引
    arr	可选。当前元素所属的数组对象
    initialValue 可选。传递给函数的初始值
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((total, currentValue, index, arr) => total + currentValue, 0)
// console.log(balance);

const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// console.log(arr.flat());   // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arrDeep.flat());   // [[1, 2], 3, 4, [5, 6], 7, 8]
// console.log(arrDeep.flat(2));   // [1, 2, 3, 4, 5, 6, 7, 8]

// sort()  排序
const ascSort = movements.sort((a, b) => a - b)
// console.log(ascSort);  // [-650, -400, -130, 70, 200, 450, 1300, 3000]
const descSort = movements.sort((a, b) => b - a)
// console.log(descSort);  // [3000, 1300, 450, 200, 70, -130, -400, -650]

// fill()
const createArr = new Array(6)  // [空属性 × 6]
// createArr.fill(1)   // [1, 1, 1, 1, 1, 1]
// createArr.fill(1, 2, 4)  // 在下标2到4的位置填充1  [空属性 × 2, 1, 1, 空属性 × 2]  
// arr.fill(1, 1, 3)   // 非空属性数组也可以实现填充  [[1, 2, 3], 1, 1, 8]

// from()
const fromArr = Array.from({ length: 6 }, (_, i) => i)  // [0, 1, 2, 3, 4, 5]


</script>

<style lang="less" scoped>
</style>
