<template>
  <a-layout class="!min-h-screen">
    <a-layout-sider v-model:collapsed="collapsed" collapsible @collapse="handleCollapse">
      <Aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="bg-white !p-0">
        <Header />
      </a-layout-header>
      <a-layout-content class="my-[24px] mx-[16px] bg-white overflow-hidden layout-content">
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { ref } from "vue";
import { useLayoutStore } from "/@/store/layout";

const collapsed = ref<boolean>(false);
const layoutStore = useLayoutStore()

function handleCollapse(collapsed: boolean) {
  console.log(collapsed);
  layoutStore.setCollapse(collapsed)
}
</script>
<style>
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.layout-content {
  height: calc(100vh - 112px);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(206, 206, 206);
}
</style>
