<script setup>

</script>

<template>
  <lay-button size="sm" type="primary">创建字典</lay-button>

  <div class="scene-list">
    <div class="scene-row scene-header">
      <div class="scene-cell">序号</div>
      <div class="scene-cell">字典名称</div>
      <div class="scene-cell">字典类型</div>
      <div class="scene-cell">备注</div>
      <div class="scene-cell">创建时间</div>
      <div class="scene-cell">操作</div>
    </div>
    <div class="scene-row">
      <div class="scene-cell">1</div>
      <div class="scene-cell">支出类型</div>
      <div class="scene-cell">payment_type</div>
      <div class="scene-cell">用来构建分类数据</div>
      <div class="scene-cell">2023-12-04</div>
      <div class="scene-cell">
        <lay-button size="xs" type="normal">详细</lay-button>
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
</style>