<template>
  <div class="flex items-center bg-gradient-to-tl from-[#28b487] to-[#7dd56f] h-full">
    <div class="w-full p-[30px] text-center text-white overflow-y-auto h-full">
      <p class="text-[50px] ">Dom and events fundamentals</p>
      <a-row>
        <a-col :span="11" class="text-left">
          <!-- S dom.querySelector() -->
          <div>
            <p class="text-[28px]">dom.querySelector()</p>
            <p>querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。</p>
            <p>注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。</p>
          </div>
          <!-- E dom.querySelector() -->

          <!-- S element.addEventListener() -->
          <div>
            <p class="text-[28px]">element.addEventListener()</p>
            <p>addEventListener() 方法用于向指定元素添加事件句柄。</p>
            <p>提示： 使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。</p>
          </div>
          <!-- E element.addEventListener() -->

          <!-- S Dom style 对象 -->
          <div>
            <p class="text-[28px]">Dom style 对象</p>
            <p>设置 指定元素的css样式</p>
            <p>document.querySelector("xx").style.property="xxx"</p>
          </div>
          <!-- E Dom style 对象 -->

          <!-- S input输入框value -->
          <div>
            <p class="text-[28px]">input输入框value</p>
            <p>设置 指定输入框的内容</p>
            <p>document.querySelector("xx").value="xxx"</p>
          </div>
          <!-- E input输入框value -->
        </a-col>
        <a-col :span="2" class="text-left">
          <a-divider type="vertical" class="!h-full !border-white" dashed />
        </a-col>
        <a-col :span="11" class="text-left">
          <!-- S DOM classList 属性 -->
          <div>
            <p class="text-[28px]">DOM classList 属性</p>
            <p>classList 属性返回元素的类名，作为 DOMTokenList 对象。</p>
            <p>该属性用于在元素中添加，移除及切换 CSS 类。</p>
            <a-table size="small" :columns="classListColumns" :data-source="classListData" bordered :pagination="false"
              :scroll="{ y: 600 }">
            </a-table>
          </div>
          <!-- E DOM classList 属性 -->
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { classListColumns, classListData } from './data';
</script>

<style lang='less' scoped>
</style>