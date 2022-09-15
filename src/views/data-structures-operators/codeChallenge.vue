<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">code challenge</p>
      <div class="w-1/2 m-auto text-left">
        <p>编码挑战 #4</p>
        <a-textarea v-model:value="textAreaValue" placeholder="请输入" :rows="4" />
        <a-button @click="handleClick">确定</a-button>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>import { ref } from 'vue';


const game = {
  team1: 'Bayern Munich',
  team2: 'Prussia Dortmund',
  players: [
    [
      'Neue',
      'Paved',
      'Martinez',
      'Alba',
      'Davies',
      'Gimmick',
      'Gretzky',
      'Comas',
      'Muller',
      'Gnarly',
      'Landowska',
    ],
    [
      'Burka',
      'Schulz',
      'Hummel',
      'Kanji',
      'Hakim',
      'Weigh',
      'Wiesel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Lotze',
    ],
  ],
  score: '4:0',
  scored: ['Landowska', 'Gnarly', 'Landowska', 'Hummel'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
} as any;

/* 
编码挑战 #1
构建一个足球投注应用程序！
假设我们从 Web 服务获取有关某个游戏的数据（如下）。在这个挑战中，我们将使用数据。所以这是你的任务：
1. 为每支球队创建一个球员数组（变量'players1'和'players2'）
2. 任何球员阵列中的第一个球员是守门员，其他球员是场上球员。对于Bayern Munich（第 1 队），创建一个包含守门员姓名的变量 ('gk')，以及一个包含所有剩余 10 名场上球员的数组 ('fieldPlayers')
3. 创建一个数组'allPlayers'，包含两支球队的所有球员（22 名球员）
4. 比赛期间，Bayern Munich（1队）使用了3名替补球员。因此，创建一个新数组 ('players1Final')，其中包含所有原始 team1 球员以及 'Thicko'、'Continuo' 和 'Perisarc'
5. 基于game.odds对象，为每个属性创建一个变量（称为'team1'、'draw'和'team2'）
6. 编写一个函数（'printGoals'），接收任意数量的球员姓名（不是数组）并将每个球员姓名连同总进球数（传入的球员姓名数）打印到控制台)
7. 赔率低的队伍获胜的可能性更大。打印到控制台哪个团队更有可能获胜，而不使用 if/else 语句或三元运算符。

测试数据：使用球员'Davies', 'Muller', 'Landowska' and 'Gimmick'。然后，再次使用来自 game.scored 的玩家调用该函数

祝你好运😀
*/
const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
const allPlayers = [...players1, ...players2]
const players1Final = [...players1, 'Thicko', 'Continuo', 'Perisarc']
const { odds: { team1, x: draw, team2 } } = game
const printGoals = (...name: Array<string>) => {
  return name
}
printGoals('Davies', 'Muller', 'Landowska', 'Gimmick')
const winResult = `${(team1 > team2 && 'team2') || 'team1'}更有可能获胜`;

/* 
编码挑战 #2
让我们继续使用我们的足球投注应用程序！
1. 遍历 game.scored 数组并将每个球员的姓名连同进球号码一起打印到控制台（例如：“Goal 1: Landowska”）
2. 使用循环计算平均赔率并将其记录到控制台（我们已经研究过如何计算平均数，如果不记得可以去检查）
3. 将 3 个赔率打印到控制台，但格式如下所示：
      Bayern Munich获胜几率：1.33
      平局几率：3.25
      Prussia Dortmund获胜几率：6.5
直接从游戏对象中获取团队名称，不要对其进行硬编码（“draw”除外）。 提示：注意赔率和游戏对象如何具有相同的属性名称😉

奖励：创建一个名为“scorers”的对象，其中包含作为属性得分的球员的姓名，以及作为值的进球数。 在这个游戏中，它看起来像这样：
{
  Gnarly: 1,
  Hummel: 1,
  Landowska: 2
}

祝你好运😀
*/

// 1.
for (const [i, player] of game.scored.entries()) {
  // console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let average = 0
const odds = Object.values(game.odds)
for (const odd of odds) {
  average += odd as number
}
average /= odds.length
// console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = game?.[team] || '平局'
  // console.log(`${teamStr === '平局' ? teamStr : teamStr + '获胜'}几率: ${odd}`);
}

/* 
编码挑战 #3
让我们继续使用我们的足球投注应用程序！ 这一次，我们有一张地图，上面记录了游戏期间发生的事件。 值是事件本身，键是每个事件发生的分钟数（一场足球比赛有 90 分钟加上一些额外时间）。

1. 为发生的不同游戏事件创建一个数组"events"（无重复）
2. 比赛结束后，发现第64分钟的黄牌不公平。 所以从游戏事件日志中删除这个事件。
3. 将以下字符串打印到控制台："平均每 9 分钟发生一次事件"（请记住，游戏有 90 分钟）
4. 循环事件并将它们记录到控制台，标记它是在游戏的上半场还是下半场（45 分钟后），如下所示：[FIRST HALF] 17: ⚽️ GOAL

祝你好运😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1.
const events = [...new Set(gameEvents.values())]
// console.log(events);

// 2.
gameEvents.delete(64)

// 3.
const time = [...gameEvents.keys()].pop() as number
// console.log(`平均每 ${time / gameEvents.size} 分钟发生一次事件`);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? '上半场' : '下半场'
  // console.log(`[${half}]${min}: ${event}`);
}

/* 
编码挑战 #4
编写一个程序，接收用 underscore_case 编写的变量名列表并将它们转换为 camelCase。

输入将来自插入到 DOM 中的文本区域（参见下面的代码），当按下按钮时会发生转换。

此测试数据（粘贴到 textarea）
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

应该产生这个输出（5 个单独的 console.log 输出）
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

提示 1：记住哪个字符在 textarea 中定义了一个新行😉
提示 2：该解决方案只需要对由 2 个单词组成的变量起作用，例如 a_b
提示 3：开始时不要担心 ✅。只有在变量名转换工作之后才能解决这个问题😉
提示 4：这个挑战是故意的，所以开始观察解决方案，以防你被卡住。然后暂停并继续！

之后，用自己的测试数据进行测试！

祝你好运😀
*/
const textAreaValue = ref('')
function handleClick() {
  const rows = textAreaValue.value.split('\n')
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().toLowerCase().split('_')
    const camelCase = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    // console.log(`${camelCase.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
}

</script>

<style lang='less' scoped>
</style>