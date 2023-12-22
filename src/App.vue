<template>
  <Home/>
</template>

<script>
import Home from './views/home/home-index.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  user-select: none;
}

/* 隐藏垂直滚动条 */
::-webkit-scrollbar {
  width: 5px; /* 滚动条宽度 */
}

/* 隐藏水平滚动条 */
::-webkit-scrollbar:horizontal {
  height: 0; /* 滚动条高度 */
}

/* 修改滚动条轨道样式 */
::-webkit-scrollbar-track {
  background-color: #f5f5f5; /* 轨道背景色 */
}

/* 修改滚动条滑块样式 */
::-webkit-scrollbar-thumb {
  background-color: #ccc; /* 滑块背景色 */
  border-radius: 5px; /* 滑块圆角 */
}

/* 鼠标悬停在滑块上的样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #999; /* 鼠标悬停时的滑块背景色 */
}

/* 修改滚动条角落样式 */
::-webkit-scrollbar-corner {
  background-color: #f5f5f5; /* 角落背景色 */
}
</style>
