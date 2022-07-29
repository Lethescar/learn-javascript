<template>
  <a-layout class="!min-h-screen">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <Aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white !p-0">
        <Header />
      </a-layout-header>
      <a-layout-content class="my-[24px] mx-[16px] p-4 bg-white">
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { defineComponent, ref } from "vue";

const collapsed = ref<boolean>(false);
</script>
<style>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
