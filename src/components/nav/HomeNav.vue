<script setup>
import {ref} from 'vue'

const isTree = ref(true)
const selectedKey = ref("1")
const openKeys5 = ref(["1"])

</script>

<template>
  <lay-menu v-model:open-keys="openKeys5" v-model:selected-key="selectedKey" v-model:tree="isTree">
    <h1>Max理财系统</h1>
    <router-link to="/">
      <lay-menu-item id="1">
        <lay-icon type="layui-icon-chart"></lay-icon>
        财务报表
      </lay-menu-item>
    </router-link>

    <lay-sub-menu id="2">
      <template v-slot:title>
        <lay-icon type="layui-icon-rmb"></lay-icon>
        财务管理
      </template>
      <router-link to="/scenario-based">
        <lay-menu-item id="3">
          <lay-icon type="layui-icon-layer"></lay-icon>
          场景化
        </lay-menu-item>
      </router-link>
      <router-link to="/wallet-management">
        <lay-menu-item id="4">
          <lay-icon type="layui-icon-senior"></lay-icon>
          个人钱包
        </lay-menu-item>
      </router-link>
    </lay-sub-menu>

    <router-link to="/wish-list">
      <lay-menu-item id="5">
        <lay-icon type="layui-icon-heart"></lay-icon>
        愿望清单
      </lay-menu-item>
    </router-link>

    <lay-sub-menu id="6">
      <template v-slot:title>
        <lay-icon type="layui-icon-set"></lay-icon>
        设置
      </template>
      <router-link to="/system-setting">
        <lay-menu-item id="7">
          <lay-icon type="layui-icon-util"></lay-icon>
          系统设置
        </lay-menu-item>
      </router-link>
      <router-link to="/dictionary-config">
        <lay-menu-item id="8">
          <lay-icon type="layui-icon-template-one"></lay-icon>
          字典配置
        </lay-menu-item>
      </router-link>
    </lay-sub-menu>


  </lay-menu>
</template>

<style scoped>
.layui-nav {
  height: 100vh;
  overflow-y: hidden;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
}
</style>