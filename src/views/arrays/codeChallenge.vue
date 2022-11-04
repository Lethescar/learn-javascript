<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">code challenge</p>
      <div class="w-1/2 m-auto text-left">
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
/* 
编码挑战 #1
Julia和Kate正在研究狗。于是他们每人向 5 位狗主人询问了他们的狗的年龄，并将数据存储到一个数组中（每个数组一个）。目前，他们只想知道一只狗是成年狗还是小狗。如果狗至少 3 岁，则为成年狗，如果小于 3 岁，则为小狗。

创建一个函数"checkDogs"，它接受 2 个狗的年龄数组参数（"dogsJulia"和"dogsKate"），并执行以下操作：

1. Julia 发现 第一个 和 最后两只狗的主人实际上有猫，而不是狗！因此，创建 Julia 数组的浅表副本，并从该复制的数组中删除 cat 年龄（因为改变函数参数是一种不好的做法）
2. 使用 Julia（已更正）和 Kate 的数据创建一个数组
3. 对于剩下的每只狗，登录控制台是成年狗（"1 号狗是成年狗，5 岁"）还是小狗（"2 号狗还是小狗🐶"）
4. 为两个测试数据集运行函数

提示：到目前为止，使用本节所有讲座中的工具😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function checkDogs(dogsJulia: Array<number>, dogsKate: Array<number>) {
  const dogsJuliaCorrected = dogsJulia.slice()
  dogsJuliaCorrected.splice(0, 1)
  dogsJuliaCorrected.splice(-2)
  const dogs = [...dogsJuliaCorrected, ...dogsKate]
  dogs.forEach((value, index) => {
    // console.log(`${index + 1}号狗是${value >= 3 ? '成年狗' : '小狗'}, ${value}岁`);
  });

}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

</script>

<style lang='less' scoped>
</style>