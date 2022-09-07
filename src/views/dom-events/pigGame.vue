<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full pig-game">
      <main class="m-auto">
        <section class="player player--0 player--active">
          <h2 class="name" id="name--0">Player 1</h2>
          <p class="score" id="score--0">43</p>
          <div class="current">
            <p class="current-label">Current</p>
            <p class="current-score" id="current--0">0</p>
          </div>
        </section>
        <section class="player player--1">
          <h2 class="name" id="name--1">Player 2</h2>
          <p class="score" id="score--1">24</p>
          <div class="current">
            <p class="current-label">Current</p>
            <p class="current-score" id="current--1">0</p>
          </div>
        </section>

        <img src="/src/assets/images/dice-1.png" alt="Playing dice" class="dice" />
        <button class="btn btn--new">🔄 New game</button>
        <button class="btn btn--roll">🎲 Roll dice</button>
        <button class="btn btn--hold">📥 Hold</button>
      </main>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';

let player0El: Element;
let player1El: Element;
let score0El: Element;
let score1El: HTMLElement;
let current0El: HTMLElement;
let current1El: HTMLElement;
let diceEl: HTMLImageElement;
let btnNew: Element;
let btnRoll: Element;
let btnHold: Element;
let scores: number[];
let currentScore: number;
let activePlayer: number;
let playing: boolean;

onMounted(() => {
  // 选择元素
  player0El = document.querySelector('.player--0') as Element;
  player1El = document.querySelector('.player--1') as Element;
  score0El = document.querySelector('#score--0') as Element;
  score1El = document.getElementById('score--1') as HTMLElement;
  current0El = document.getElementById('current--0') as HTMLElement;
  current1El = document.getElementById('current--1') as HTMLElement;

  diceEl = document.querySelector('.dice') as HTMLImageElement;
  btnNew = document.querySelector('.btn--new') as Element;
  btnRoll = document.querySelector('.btn--roll') as Element;
  btnHold = document.querySelector('.btn--hold') as Element;
  init();
  handler();
})

// 初始化
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  (document.getElementById(`current--${activePlayer}`) as HTMLElement).textContent = '0';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

function handler() {
  // 掷骰子功能
  btnRoll.addEventListener('click', function () {
    if (playing) {
      // 1. 生成随机骰子
      const dice = Math.trunc(Math.random() * 6) + 1;

      // 2. 显示骰子
      diceEl.classList.remove('hidden');
      diceEl.src = `/src/assets/images/dice-${dice}.png`;

      // 3. 检查骰子 是否为1
      if (dice !== 1) {  // 不为1 的情况
        // 将骰子分数添加到当前分数
        currentScore += dice;
        (document.getElementById(`current--${activePlayer}`) as Element).textContent = currentScore.toString();
      } else { // 切换到下一个玩家
        switchPlayer();
      }
    }
  });

  btnHold.addEventListener('click', function () {
    if (playing) {
      // 1. 将当前分数添加到活跃玩家的分数
      scores[activePlayer] += currentScore;
      (document.getElementById(`score--${activePlayer}`) as Element).textContent = scores[activePlayer].toString();

      // 2. 检查玩家的分数是否 >= 100
      if (scores[activePlayer] >= 100) {
        // 完成游戏
        playing = false;
        diceEl.classList.add('hidden');

        (document.querySelector(`.player--${activePlayer}`) as Element).classList.add('player--winner');
        (document.querySelector(`.player--${activePlayer}`) as Element).classList.remove('player--active');
      } else { // 切换到下一个玩家
        switchPlayer();
      }
    }
  });

  btnNew.addEventListener('click', init);
}
</script>

<style lang='less' scoped>
@import url('/@/assets/style/font.css');

.pig-game {
  font-family: 'Nunito', sans-serif;
}

main {
  position: relative;
  width: 50rem;
  height: 30rem;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(200px);
  filter: blur();
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  overflow: hidden;
  display: flex;
}

.player {
  flex: 50%;
  padding: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.75s;
}

/* ELEMENTS */
.name {
  position: relative;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 2px;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.score {
  font-size: 4rem;
  font-weight: 300;
  color: #c7365f;
  margin-bottom: auto;
}

.player--active {
  background-color: rgba(255, 255, 255, 0.4);
}

.player--active .name {
  font-weight: 700;
}

.player--active .score {
  font-weight: 400;
}

.player--active .current {
  opacity: 1;
}

.current {
  background-color: #c7365f;
  opacity: 0.8;
  border-radius: 9px;
  color: #fff;
  width: 65%;
  padding: 1rem;
  text-align: center;
  transition: all 0.75s;
}

.current-label {
  text-transform: uppercase;
  margin-bottom: .5rem;
  font-size: .8rem;
  color: #ddd;
}

.current-score {
  font-size: 1.7rem;
}

/* ABSOLUTE POSITIONED ELEMENTS */
.btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #444;
  background: none;
  border: none;
  font-family: inherit;
  font-size: .9rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.2s;

  background-color: white;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);

  padding: 0.3rem 1.2rem;
  border-radius: 25rem;
  box-shadow: 0 .9rem 1.7rem rgba(0, 0, 0, 0.1);
}

.btn::first-letter {
  font-size: 1.2rem;
  display: inline-block;
  margin-right: 0.35rem;
}

.btn--new {
  top: 2rem;
}

.btn--roll {
  top: 20rem;
}

.btn--hold {
  top: 23rem;
}

.btn:active {
  transform: translate(-50%, 3px);
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.15);
}

.btn:focus {
  outline: none;
}

.dice {
  position: absolute;
  left: 50%;
  top: 8.2rem;
  width: 4rem;
  height: 4rem;
  display: block;
  border-radius: 10px;
  background: #fff;
  transform: translateX(-50%);
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.2);
}

.player--winner {
  background-color: #2f2f2f;
}

.player--winner .name {
  font-weight: 700;
  color: #c7365f;
}
</style>