<template>
  <div>
    <h3 class="text-white text-center leading-[36px] h-[36px] mb-0">Js学习</h3>
    <a-menu :selectedKeys="selectedKeys" :open-keys="openKeys" theme="dark" mode="inline" @click="selectMenu"
      @open-change="openMenu">
      <template v-for="item in routers" :key="item.name">
        <a-menu-item :key="item.name" v-if="!item.children">
          <router-link :to="item.path">
            {{ item.meta && item.meta.title }}
          </router-link>
        </a-menu-item>
        <a-sub-menu v-else :title="item.meta && item.meta.title">
          <a-menu-item v-for="itemChild in item.children" :key="itemChild.name">
            <router-link :to="itemChild.path">
              {{ itemChild.meta && itemChild.meta.title }}
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMenuStore } from '/@/store/menu'

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);
const { options } = useRouter();
const routers = options.routes;
const menuStore = useMenuStore()

openKeys.value = menuStore.getMenuInfo.openKey || []
selectedKeys.value = menuStore.getMenuInfo.selectKey || []

function selectMenu(data: any) {
  const { key } = data
  selectedKeys.value = [key]
  menuStore.setMenuInfo({ selectKey: [key] })
}

function openMenu(openKey: string[]) {
  openKeys.value = openKey
  menuStore.setMenuInfo({ openKey: openKey })
}
</script>

<style lang="less" scoped>
</style>
