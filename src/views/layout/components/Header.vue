<template>
  <a-row class="h-[64px] leading-[64px] px-4 bg-white">
    <a-col :span="12"></a-col>
    <a-col :span="12" align="right">
      <a-dropdown>
        <a-avatar src="https://joeschmoe.io/api/v1/random"> </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">17800000000</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">Ch/En</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { UserOutlined } from "@ant-design/icons-vue";
</script>

<style lang="less" scoped></style>
