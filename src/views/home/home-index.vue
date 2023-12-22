<template>
  <lay-layout class="example">
    <lay-layout>
      <lay-side>
        <HomeNav/>
      </lay-side>

      <lay-body>
        <lay-header>
          财富是选择，而不是收入。通过明智的管理和投资，是创造财务自由的路程。
        </lay-header>

        <lay-container fluid>
          <lay-card>
            <router-view></router-view>
          </lay-card>

        </lay-container>

      </lay-body>
    </lay-layout>
  </lay-layout>
</template>


<script setup>

import HomeNav from "@/components/nav/HomeNav.vue";
</script>


<style scoped>
.example {
  height: 100vh;
}

.example .layui-header {
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #16baaa;
  color: white;
}

.example .layui-container {
  padding: 20px;
  height: calc(100% - 25px);
  background-color: #f5f5f5;
}
</style>