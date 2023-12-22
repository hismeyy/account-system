<script setup>

</script>

<template>
  <lay-button size="sm" type="primary">添加愿望</lay-button>


  <div class="scene-list">
    <div class="scene-row scene-header">
      <div class="scene-cell">序号</div>
      <div class="scene-cell">名称</div>
      <div class="scene-cell">资金</div>
      <div class="scene-cell">预计日期</div>
      <div class="scene-cell">备注</div>
      <div class="scene-cell">状态</div>
      <div class="scene-cell">操作</div>
    </div>
    <div class="scene-row">
      <div class="scene-cell">2</div>
      <div class="scene-cell">购买电脑</div>
      <div class="scene-cell">4500</div>
      <div class="scene-cell">2024-1-1</div>
      <div class="scene-cell">购买宏基笔记本电脑</div>
      <div class="scene-cell">
        <!--                    <span class="status-btn status-completed">完成</span>-->
        <span class="status-btn status-incomplete">未完成</span>
      </div>
      <div class="scene-cell">
        <lay-button size="xs" type="primary">修改</lay-button>
        <lay-button size="xs" type="danger">删除</lay-button>
      </div>
    </div>
    <div class="scene-row">
      <div class="scene-cell">2</div>
      <div class="scene-cell">购买电脑</div>
      <div class="scene-cell">4500</div>
      <div class="scene-cell">2024-1-1</div>
      <div class="scene-cell">购买宏基笔记本电脑</div>
      <div class="scene-cell">
        <span class="status-btn status-completed">完 成</span>
        <!--        <span class="status-btn status-incomplete">未完成</span>-->
      </div>
      <div class="scene-cell">
        <lay-button size="xs" type="primary">修改</lay-button>
        <lay-button size="xs" type="danger">删除</lay-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene-list {
  width: 100%;
  margin-top: 10px;
}

.scene-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #eee; /* 添加分隔线 */
}

.scene-header {
  background-color: #f2f2f2;
  font-weight: bold; /* 加粗表头文字 */
  cursor: default; /* 禁用选择 */
}

.scene-cell {
  flex: 1;
  text-align: center;
  font-size: 14px; /* 缩小单元格字体 */
}

.scene-row:hover {
  background-color: #f5f5f5;
}

.status-btn {
  display: inline-block;
  padding: 1px 4px;
  border: 1px solid transparent;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}

/* 完成状态的样式 */
.status-completed {
  color: white;
  background-color: #1E9FFF; /* 浅绿色 */
}

/* 未完成状态的样式 */
.status-incomplete {
  color: white;
  background-color: #FFB800; /* 浅红色 */
}

</style>