<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">数字、日期、计时器</p>
      <a-row>
        <a-col :span="11" class="text-left">
          <p class="text-[28px]">一、数字方法</p>
          <div class="pl-4">
            <a-table size="small" :columns="columns" :data-source="numberData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <p class="text-[28px]">二、Math对象方法</p>
          <div class="pl-4">
            <a-table size="small" :columns="columns" :data-source="mathData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <p class="text-[28px]">三、Date对象</p>
          <div class="pl-4">
            <p>Date 对象用于处理日期与时间</p>
            <a-textarea :value="dataExample" autoSize readonly class="!w-[600px] !bg-transparent !text-white !mb-4">
            </a-textarea>
            <p>参数说明</p>
            <ul class="list-disc ml-4 pl-4">
              <li>
                <p>milliseconds 参数是一个 Unix 时间戳（Unix Time Stamp），它是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix
                  epoch）以来的毫秒数</p>
              </li>
              <li>
                <p>dateString 参数表示日期的字符串值</p>
              </li>
              <li>
                <p>year, month, day, hours, minutes, seconds, milliseconds 分别表示年、月、日、时、分、秒、毫秒</p>
              </li>
            </ul>
            <p>Data对象方法</p>
            <a-table size="small" :columns="columns" :data-source="dateData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
        </a-col>
        <a-col :span="2" class="text-left"></a-col>
        <a-col :span="11" class="text-left"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { columns, numberData, mathData, dateData } from './data';

const dataExample = `// 创建 Date 对象
let d = new Date();
let d = new Date(milliseconds); // 参数为毫秒
let d = new Date(dateString);
let d = new Date(year, month, day, hours, minutes, seconds, milliseconds);`
</script>

<style lang='less' scoped>
</style>