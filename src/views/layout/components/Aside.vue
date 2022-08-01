<template>
  <div>
    <h3 class="text-white text-center leading-[36px] h-[36px] mb-0">Js学习</h3>
    <!-- @click="selectMenu" @open-change="openMenu" -->
    <a-menu :selectedKeys="selectedKeys" :open-keys="openKeys" theme="dark" mode="inline" @click="selectMenu">
      <template v-for="item in routers" :key="item.name">
        <a-menu-item :key="item.name" v-if="hasOnlyChildren(item)">
          <router-link :to="item.path">
            {{ item.meta && item.meta.title }}
          </router-link>
        </a-menu-item>
        <template v-else>
          <a-sub-menu :title="item.meta && item.meta.title" :key="item.name">
            <a-menu-item v-for="itemChild in item.children" :key="itemChild.name">
              <router-link :to="itemChild.path">
                {{ itemChild.meta && itemChild.meta.title }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMenuStore } from '/@/store/menu'

const selectedKeys = ref<string[]>(['Index']);
const openKeys = ref<string[]>([]);
const { options } = useRouter();
const routers = options.routes;
const menuStore = useMenuStore()

// openKeys.value = menuStore.getMenuInfo.openKey || []
// selectedKeys.value = menuStore.getMenuInfo.selectKey || []

function hasOnlyChildren(data: any): boolean {
  if (data.children) {
    const routers = data.children.filter((item: any) => item.hidden === true)
    return routers.length === 1
  } else {
    return true
  }
}

function selectMenu(data: any) {
  const { key } = data
  selectedKeys.value = [key]
  // menuStore.setMenuInfo({ selectKey: [key] })
}

function openMenu(openKey: string[]) {
  // openKeys.value = openKey
  // menuStore.setMenuInfo({ openKey: openKey })
}
</script>

<style lang="less" scoped>
</style>
