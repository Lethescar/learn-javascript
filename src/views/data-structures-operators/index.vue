<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">Data structures and modern operators</p>
      <a-row>
        <a-col :span="11" class="text-left">
          <!-- S 解构 -->
          <div>
            <p class="text-[28px]">一、解构</p>
            <p>详见代码</p>
          </div>
          <!-- E 解构 -->

          <!-- S 逻辑运算符 -->
          <div>
            <p class="text-[28px]">二、逻辑运算符</p>
            <p>逻辑或 ||</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>只要“||”前面为false,不管“||”后面是true还是false,都返回“||”后面的值</p>
              </li>
              <li>
                <p>只要“||”前面为true,不管“||”后面是true还是false,都返回“||”前面的值</p>
              </li>
            </ul>
            <p>逻辑与 &&</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>只要 “&&” 前面是false,无论 “&&” 后面是true还是false,结果都将返“&&”前面的值</p>
              </li>
              <li>
                <p>只要 “&&” 前面是true,无论 “&&” 后面是true还是false,结果都将返“&&”后面的值</p>
              </li>
            </ul>
            <p>逻辑非 !</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>取反</p>
              </li>
            </ul>
            <p>注意：javascript中以下值会被转换为false</p>
            <p>false、undefined、null、0、-0、NaN、""、''</p>
          </div>
          <!-- E 逻辑运算符 -->

          <!-- S 操作符 ?? -->
          <div>
            <p class="text-[28px]">三、操作符</p>
            <p>可选链 ?.</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>javascript中如果一个值为null、undefined,直接访问会报错 Uncaught TypeError: Cannot read properties of undefined, 可通过
                  ?. 解决</p>
                <p>例: obj?.data?.person?.name</p>
              </li>
              <li>
                <p>?. 可以无限链下去,不论有多少属性,只要有最后可以访问到属性,就会直接赋值最后的属性值。否则当任何一个链出现问题,立刻停止,而后赋值undefined</p>
              </li>
            </ul>
            <p>空值合并运算符 ??</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>?? 双问号后面是默认值,在 ?? 前面没有值(即null,undefined)的时候会默认 ?? 后边的值</p>
              </li>
            </ul>
            <p>空值赋值运算符 ??=</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>??= 后面是默认值,当??=左侧的值为null、undefined的时候,会将右侧的值赋值给左侧变量</p>
                <p>例如:</p>
                <a-textarea :value="valuableAssignExample" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
                <a-textarea :value="noValueAssignExample" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
            </ul>
          </div>
          <!-- E 操作符 ?? -->

          <!-- S for of -->
          <div>
            <p class="text-[28px]">四、for/of</p>
            <p>循环遍历可迭代对象的值</p>
            <p>entries()方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value),迭代对象中数组的索引值作为 key, 数组元素作为 value</p>
            <a-textarea :value="forOfExample" autoSize readonly class="!w-[400px] !bg-transparent !text-white !mb-4">
            </a-textarea>
          </div>
          <!-- E for of -->

          <!-- S Object.keys()、Object.values()、Object.entries() -->
          <div>
            <p class="text-[28px]">五、Object.keys()、Object.values()、Object.entries()</p>
            <p>Object.keys()</p>
            <p>该方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>传入对象,返回包含对象可枚举属性和方法的数组</p>
                <a-textarea :value="objectKeysExample1" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>传入字符串,将被强制转换为对象,返回下标值数组</p>
                <a-textarea :value="objectKeysExample2" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>传入数组,返回索引值</p>
                <a-textarea :value="objectKeysExample3" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>具有随机键排序的对象,当我们使用数字键时,根据键按数字顺序返回的值</p>
                <a-textarea :value="objectKeysExample4" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
            </ul>
            <p>Object.values()</p>
            <p>该方法会返回一个数组,其元素是在对象上找到的可枚举属性值。属性的顺序与通过手动循环对象的属性值所给出的顺序相同</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>传入对象</p>
                <a-textarea :value="objectValuesExample1" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>传入具有随机键顺序的类数组对象</p>
                <a-textarea :value="objectValuesExample2" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>传入字符串</p>
                <a-textarea :value="objectValuesExample3" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
            </ul>
            <p>Object.entries()</p>
            <p>该方法会返回一个数组,其元素是与直接在object上找到的可枚举属性键值对相对应的数组。属性的顺序与通过手动循环对象的属性值所给出的顺序相同</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>传入对象</p>
                <a-textarea :value="objectEntriesExample1" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>传入具有随机键顺序的类数组对象</p>
                <a-textarea :value="objectEntriesExample2" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
              <li>
                <p>传入字符串</p>
                <a-textarea :value="objectEntriesExample3" autoSize readonly
                  class="!w-[400px] !bg-transparent !text-white !mb-4">
                </a-textarea>
              </li>
            </ul>
          </div>
          <!-- E Object.keys()、Object.values()、Object.entries() -->
        </a-col>
        <a-col :span="2" class="text-left">
          <a-divider type="vertical" class="!h-full !border-white" dashed />
        </a-col>
        <a-col :span="11" class="text-left">
          <!-- S Set -->
          <div>
            <p class="text-[28px]">六、Set</p>
            <p>Set 是唯一值的集合。每个值在 Set 中只能出现一次,一个 Set 可以容纳任何数据类型的任何值。</p>
            <p>创建Set:</p>
            <a-textarea :value="setExample" autoSize readonly class="!w-[400px] !bg-transparent !text-white !mb-4">
            </a-textarea>
            <p>Set 对象的方法和属性:</p>
            <a-table size="small" :columns="setColumns" :data-source="setData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <!-- E Set -->

          <!-- S Map -->
          <div>
            <p class="text-[28px]">七、Map</p>
            <p>Map 对象存有键值对，其中的键可以是任何数据类型。</p>
            <p>Map 对象记得键的原始插入顺序。</p>
            <p>Map 对象具有表示映射大小的属性。</p>
            <p>创建Map对象:</p>
            <a-textarea :value="mapExample" autoSize readonly class="!w-[400px] !bg-transparent !text-white !mb-4">
            </a-textarea>
            <p>Map() 方法和属性:</p>
            <a-table size="small" :columns="mapColumns" :data-source="mapData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <!-- E Map -->

          <!-- S String -->
          <div>
            <p class="text-[28px]">八、String</p>
            <p>字符串用于存储一系列字符。</p>
            <p>使用位置（索引）可以访问字符串中任何的字符,字符串的索引从零开始。</p>
            <p>使用长度属性length来计算字符串的长度。</p>
            <p>Sting 方法:</p>
            <a-table size="small" :columns="stringColumns" :data-source="stringData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
            <p>padStart()方法用于用另一个字符串填充一个字符串，直到达到给定的长度。从字符串的左端开始应用填充</p>
            <p>padEnd()方法用于用另一个字符串填充一个字符串，直到达到给定的长度。从字符串的右端开始应用填充</p>
          </div>
          <!-- E String -->
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { setColumns, setData, mapColumns, mapData, stringColumns, stringData } from './data';

// 初始数据
const restaurant = {
  name: 'Classics Italiana',
  location: 'Via Angelo Taranto 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Capers Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex: number, mainIndex: number) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time = '08:00', address }: { starterIndex: number, mainIndex: number, time: string, address: string }) {
    return `收到订单! ${this.starterMenu[starterIndex]} 和 ${this.mainMenu[mainIndex]} 将要在${time} 送到 ${address}`;
  },
  orderPasta: function (ing1: string, ing2: string, ing3: string) {
    return `这是你的意大利面,配料有${ing1}、${ing2}、 ${ing3}`;
  }
} as any;

/*************** 解构数组 *****************/
// 根据数组下标赋值
const arr = [1, 2, 3]
const a = arr[0]
const b = arr[1]
const c = arr[2]
// console.log(a, b, c); // 1 2 3

// 结构赋值
const [x, y, z] = arr
// console.log(x, y, z); // 1 2 3

// 跳过第二个,获取第一、第三个的值
let [first, , third] = restaurant.categories
// console.log(first, third);  // Italian Vegetarian

/* 两个变量值交换 */
// 方式一
const temp = first;
first = third;
third = temp;
// console.log(first, third); // Vegetarian Italian
// 方式二
[first, third] = [third, first]
// console.log(first, third); // Italian Vegetarian

// 接收函数的两个返回值
const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main);

// 解构 获取嵌套数组值
const nested = [1, 2, [3, 4]] as any;
const [i, , [j, k]] = nested
// console.log(i, j, k);  // 1 3 4

// 解构 设置默认值
const [p = 0, q = 0, r = 0] = [1, 2]
// console.log(p, q, r);  // 1 2 0

/*************** 解构对象 *****************/
// 输入对应的对象key,没有先后顺序
const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories);

// 别名
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
// console.log(restaurantName, hours, tags);

// 设置默认值
const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters);

// 重新赋值
let key1 = 100
let key2 = 200
const obj = { key1: 1, key2: 2, key3: 3 };
({ key1, key2 } = obj)
// console.log(key1, key2);  // 1 2

// 解构  获取嵌套对象值
const { fri: { open: o, close: cl } } = openingHours
// console.log(o, cl);

restaurant.orderDelivery({
  time: '09:00',
  address: '济南市高新区汉峪金谷',
  mainIndex: 2,
  starterIndex: 2
})

/*************** 扩展运算符 *****************/
const spreadArr = [1, 2, 3]
const newArr = [1, 2, ...arr]
// console.log(newArr);   // [1, 2, 1, 2, 3]

// 数组可迭代: 数组, 字符串, map, set
const str = 'String'
const letters = [...str, ' ', '1']
// console.log(letters); // ['S', 't', 'r', 'i', 'n', 'g', ' ', '1']

// 扩展传参
const ingredients = ['香菇', '竹笋', '奶酪'] as any;
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients)

// 对象 扩展
const spreadObj = { key: 'value', ...restaurant }

/*************** 剩余参数 *****************/
const [restA, restB, ...others] = [1, 2, 3, 4, 5]
// console.log(others); // [[3, 4, 5]

// 数组 - 剩余参数不包括跳过的元素  并  剩余参数必须为最后一个
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Brochette', 'Garlic Bread', 'Capers Salad']

// 函数
const add = function (...numbers: Array<number>) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

add(1, 2, 3)
add(1, 2, 3, 4, 5)

const addArr = [1, 2, 3, 4]
add(...addArr)

const valuableAssignExample = `let name = '徐淑栋'
name ??= '栋栋'  // '徐淑栋'`

const noValueAssignExample = `let name = undefined
name ??= '栋栋'  // '栋栋'`

const forOfExample = `for(const [i, el] of starters.entries()){
    // i 为下标, el 为值
}`

for (const [i, el] of starters.entries()) {
  // console.log(`${i}: ${el}`);
  // 0: Focaccia
  // 1: Brochette
  // 2: Garlic Bread
  // 3: Capers Salad
}

const objectKeysExample1 = `const obj = { name: '', age: 18}
console.log(Object.keys(obj));  // ['name','age']`

const objectKeysExample2 = `const str = 'Hello'
console.log(Object.keys(str));  // ['0','1', '2', '3', '4']`

const objectKeysExample3 = `const arr = [1, 2, 3]
console.log(Object.keys(arr));  // ['0','1', '2']`

const objectKeysExample4 = `const obj = {  100: 'a', 2: 'b', 7: 'c' }
console.log(Object.keys(obj)); // ['2', '7', '100']`

const objectValuesExample1 = `const obj = { name: '', age: 18 }
console.log(Object.values(obj)); // ['', 18]`

const objectValuesExample2 = `const obj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.values(obj)); // ['b', 'c', 'a']`

const objectValuesExample3 = `const str = 'Hello'
console.log(Object.values(str)); // ['H', 'e', 'l', 'l', 'o']`

const objectEntriesExample1 = `const obj = { name: '', age: 18 }
console.log(Object.entries(obj)); // [ ['name', ''], ['age', 18] ]`

const objectEntriesExample2 = `const obj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.entries(obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]`

const objectEntriesExample3 = `const str = 'Hello'
console.log(Object.entries(str)); // [ ['0', 'H'], ['1', 'e'], ['2', 'l'], ['3', 'l'], ['4', 'o'] ]`

const setExample = `const letters = new Set([1, 2, 3])
// or
const letters = new Set()
letters.add('a')
letters.add('b')
letters.add('c')`

const mapExample = `const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200]
])
// or
const fruits = new Map();
fruits.set('apples', 500);
fruits.set('bananas', 300);
fruits.set('oranges', 200)`

</script>

<style lang='less' scoped>
</style>