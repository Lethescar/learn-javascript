<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">Javascript Fundamentals —— Part 1</p>
      <div class="text-left w-1/2  m-auto">
        <p class="text-[36px]">变量命名规则</p>
        <p>①变量命名必须以字母、下划线”_”或者”$”为开头。其他字符可以是字母、_、美元符号或数字；</p>
        <p>②变量名中不允许使用空格和其他标点符号，首个字不能为数字；</p>
        <p>③变量名长度不能超过255个字符；</p>
        <p>④变量名区分大小写(javascript是区分大小写的语言)；</p>
        <p>⑤变量名必须放在同一行中；</p>
        <p>⑥不能使用脚本语言中保留的关键字、保留字、true、false 和 null 作为标识符。</p>
      </div>
      <div class="text-left w-1/2  m-auto">
        <p class="text-[36px]">数据类型</p>
        <p>Number String Boolean Undefined Null Symbol Bigint</p>
      </div>
      <div class="text-left w-1/2  m-auto">
        <p class="text-[36px]">let,const,var区别</p>
        <p>块级作用域： let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：内层变量可能覆盖外层变量；用来计数的循环变量泄露为全局变量。</p>
        <p>变量提升： var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。</p>
        <p>给全局添加属性： var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。</p>
        <p>重复声明： var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。</p>
        <p>暂时性死区： 在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区。</p>
        <p>初始值设置： 在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。</p>
        <p>指针指向： let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。</p>
      </div>
      <div class="text-left w-1/2  m-auto">
        <p class="text-[36px]">运算符优先级</p>
        <a-table size="small" :columns="columns" :data-source="data" bordered :pagination="false" :scroll="{ y: 600 }">
        </a-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { columns, data } from './data'

let count = 40 + 8 + 23 - 10
console.log('计算值:', count);

</script>

<style lang="less" scoped>
:deep(.table-striped) td {
  background-color: #fafafa;
}
</style>
