<template>
  <div class="text-white">
    <div class="guess-number p-4 calc-height overflow-y-auto">
      <div class="bg-color box-border block">
        <header>
          <h1 class="text-white">Guess Number!</h1>
          <p class="between">(Between 1 and 20)</p>
          <button class="btn again">Again!</button>
          <div class="number">?</div>
        </header>
        <main>
          <section class="left">
            <input type="number" min="0" class="guess" />
            <button class="btn check">Check!</button>
          </section>
          <section class="right">
            <p class="message">Start guessing...</p>
            <p class="label-score">💯 Score: <span class="score">20</span></p>
            <p class="label-high-score">
              🥇 HighScore: <span class="high-score">0</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { nextTick } from 'vue';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let highScore = 0
let score = 20

nextTick(() => {
  handleDom()
})

function handleDom() {
  document.querySelector('.check')?.addEventListener('click', () => {
    const guess = Number((document.querySelector('.guess') as any).value)  // ts 需加上类型注解any 否则提示类型“Element”上不存在属性“value”
    // as Element 类型断言
    if (!guess) { // 没有输入
      displayContent('.message', '⛔Please enter the required number')
    } else if (guess === secretNumber) { // 猜中
      console.log(111, highScore);
      if (score > highScore) {
        highScore = score;
        displayContent('.high-score', score.toString())
      }
      displayContent('.message', '🎉Correct Number');
      (document.querySelector('.bg-color') as any).style.backgroundColor = '#60b347';
      displayContent('.number', secretNumber.toString());
      (document.querySelector('.number') as any).style.width = '12rem';
    } else if (guess !== secretNumber) { // 猜测错误
      const message = score > 1 ? guess > secretNumber ? '📈Too Height' : '📉Too Low' : '💥You lost the game!';
      displayContent('.message', message)
      score > 0 ? score-- : 0;
      displayContent('.score', score.toString())
    }
  })

  document.querySelector('.again')?.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayContent('.message', 'Start guessing...')
    displayContent('.score', score.toString())
    displayContent('.number', '?');
    (document.querySelector('.guess') as any).value = '';
    (document.querySelector('.bg-color') as any).style.backgroundColor = '#222';
    (document.querySelector('.number') as any).style.width = '7.5rem';
  })
}

/**
 * 
 * @param key css选择器值
 * @param content 内容
 */
function displayContent(key: string, content: string) {
  (document.querySelector(key) as Element).textContent = content;
}

/* 
编码挑战 #1
实现游戏休息功能，让玩家可以做出新的猜测！ 方法如下：

1. 选择具有“again”类的元素并附加一个单击事件处理程序
2. 在handler函数中，恢复score和secretNumber变量的初始值
3. 恢复消息、数字、分数和猜测输入栏的初始条件
4. 也恢复原来的背景颜色（#222）和数字宽度（15rem）

祝你好运 😀
*/

</script>

<style lang='less' scoped>
@import url('/@/assets/style/font.css');

.calc-height {
  height: calc(100vh - 170px);
}

.guess-number {
  font-family: 'Press Start 2P', sans-serif;
}

.bg-color {
  background-color: #222;
}

header {
  position: relative;
  height: 250px;
  border-bottom: 3px solid #eee;
}

main {
  height: 400px;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left {
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right {
  width: 40rem;
  font-size: 1rem;
}

/* ELEMENTS STYLE */
h1 {
  font-size: 2rem;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.number {
  background: #eee;
  color: #333;
  font-size: 3rem;
  width: 7.5rem;
  padding: 1rem 0rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.between {
  font-size: 0.7rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.again {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.guess {
  background: none;
  border: 2px solid #eee;
  font-family: inherit;
  color: inherit;
  font-size: 2.5rem;
  padding: 1.2rem;
  width: 12.5rem;
  text-align: center;
  display: block;
  margin-bottom: 1.5rem;
}

.btn {
  border: none;
  background-color: #eee;
  color: #222;
  font-size: 1rem;
  font-family: inherit;
  padding: 1rem 1.5rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}

.message {
  margin-bottom: 4rem;
  height: 1.5rem;
}

.label-score {
  margin-bottom: 1rem;
}
</style>