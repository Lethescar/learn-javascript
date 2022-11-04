<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">code challenge</p>
      <div class="w-1/2 m-auto text-left">
        <p>编码挑战 #1</p>
        <p>{{ poll.question }}</p>
        <p v-for="(item, index) in poll.options" :key="index">{{ item }}</p>
        <p>(写选项号)</p>
        <a-input v-model:value="inputValue" style="width: 300px;" placeholder="请输入" :rows="4" />
        <a-button @click="handleClick">确定</a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const inputValue = ref()
/* 
编码挑战 #1
让我们构建一个简单的投票应用程序！
民意调查有一个问题、一组可供人们选择的选项，以及一个包含每个选项的回复数的数组。此数据存储在下面的启动器对象中。
以下是您的任务：
1. 在"poll"对象上创建一个名为"registerNewAnswer"的方法。该方法做了两件事：
  1.1. 显示提示窗口，供用户输入所选选项的编号。提示应如下所示：
        你最喜欢的编程语言是什么？
        0：JavaScript
        1：Python
        2：Rust
        3：C++
        （写选项号）
  1.2. 根据输入数字，更新 answers 数组。例如，如果选项为 3，则将数组的位置 3 处的值增加 1。确保检查输入是否为数字以及该数字是否有意义（例如答案 52 没有意义，对吗？）
2. 每当用户点击“Answer poll”按钮时调用此方法。
3. 创建一个显示投票结果的方法“displayResults”。该方法将字符串作为输入（称为“类型”），可以是“字符串”或“数组”。如果 type 是 'array'，只需使用 console.log() 显示结果数组。这应该是默认选项。如果 type 为 'string'，则显示类似“Poll results are 13, 2, 4, 1”的字符串。
4. 在每个"registerNewAnswer"方法调用结束时运行“displayResults”方法。
提示：使用您在本节和上一节中学到的许多工具😉
奖励：使用“displayResults”方法显示测试数据中的 2 个数组。同时使用 'array' 和 'string' 选项。不要将数组放在 poll 对象中！那么在这种情况下 this 关键字应该是什么样子呢？
奖励测试数据 1：[5、2、3]
奖励测试数据 2：[1、5、3、9、6、1]

祝你好运😀
*/
const poll = {
  question: '你最喜欢的编程语言是什么?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    Number(inputValue.value) && inputValue.value < this.answers.length && this.answers[inputValue.value]++
    return `${this.question}\n${this.options.join('\n')}\n(写选项号)`
  },
  displayResults(type: string) {
    // console.log(type, this.answers);
  }
};

function handleClick() {
  poll.registerNewAnswer()
  // console.log(poll);
}

poll.displayResults.bind({ answers: [1, 2, 3] }, 'array')()

/* 
编码挑战 #2
这更像是一个思维挑战而不是编码挑战🤓
以下面的 IIFE 为例，在函数的末尾，附加一个事件侦听器，每次单击 BODY 元素时，将选定的 h1 元素（'header'）的颜色更改为蓝色。 不要再次选择 h1 元素！
现在向您自己（或您周围的人）解释为什么这有效！ 把所有你需要的时间。 考虑一下回调函数的确切执行时间，以及这对本示例中涉及的变量意味着什么。
祝你好运😀
*/


</script>

<style lang='less' scoped>
</style>