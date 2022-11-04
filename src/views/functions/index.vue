<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">Functions </p>
      <a-row>
        <a-col :span="11" class="text-left"></a-col>
        <a-col :span="2" class="text-left"></a-col>
        <a-col :span="11" class="text-left"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang='ts' setup>
// 预定 数组
const bookings = [] as any
function createBooking(flightNum: string, numPassengers: number = 1, price: number = 1) {
  const booking = { flightNum, numPassengers, price }
  bookings.push(booking)
}
createBooking('LH123')
createBooking('LH123', undefined, 1000)   // 第二个传undefined 即为默认值
// console.log(bookings);

function toLower(str: string) {
  return str.toLowerCase()
}
const transformer = function (str: string, fun: Function) {
  // console.log(fun(str));
}
transformer('Hello World!', toLower)

/************ 柯里化 ************/
const greet = function (greeting: string) {
  return function (name: string) {
    // console.log(`${greeting} ${name}`);
  }
}
const greetingHello = greet('Hello')
greetingHello('栋栋')
// or
greet('Hello')('徐淑栋')

const greetArrow = (greeting: string) => (name: string) => console.log(`${greeting} ${name}`);
// greetArrow('Hello')('金刚鼠')

/************ this ************/
const airChina = {
  airline: '国航',
  iataCode: 'CA',
  bookings: [] as any,
  book(flightNum: number, name: string) {
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name
    })
    return `${name}预定了${this.airline}${this.iataCode}${flightNum}航班的座位`
  }
}
const airShan = {
  airline: '山航',
  iataCode: 'SC',
  bookings: [] as any,
}
// console.log(airChina.book(123, '栋栋'));  // 栋栋预定了国航TNA123航班的座位

const book = airChina.book
// call()
book.call(airShan, 123, '栋栋');
// console.log(book.call(airShan, 123, '栋栋'));  // 栋栋预定了山航SC123航班的座位
// apply()
book.apply(airShan, [123, '栋栋']);
// console.log(book.apply(airShan, [123, '栋栋']));  // 栋栋预定了山航SC123航班的座位
// bind()
book.bind(airShan, 123, '栋栋')();
// console.log(book.bind(airShan, 123, '栋栋')());  // 栋栋预定了山航SC123航班的座位

/************ 立即调用函数 IIFE ************/
(function () {
  console.log('立即调用函数 Immediately Invoked Function Expressions');
})();
// or
(() => console.log('立即调用函数 Immediately Invoked Function Expressions'))()
</script>

<style lang='less' scoped>
</style>