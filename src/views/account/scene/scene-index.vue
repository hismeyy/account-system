<script setup>
import {reactive, ref} from 'vue'
import {layer} from "@layui/layui-vue"

const scenario = reactive({
      sceneName: "",
      bindAccount: "",
      budgetAmount: "",
      currentStatus: 1
    }
)

const layFormRef11 = ref();

const visible = ref(false);

const changeVisible = () => {
  visible.value = !visible.value;
}

const deleteValue = () => {
  layer.msg("删除成功", {time: 1000, icon: 1})
}

const action = ref([
  {
    text: "确认",
    callback: () => {
      changeVisible()
      layer.msg("添加成功", {time: 1000, icon: 1})
    }
  },
  {
    text: "取消",
    callback: () => {
      changeVisible()
    }
  }
])
</script>

<template>
  <lay-button size="sm" type="primary" @click="changeVisible">添加场景</lay-button>

  <div class="scene-list">
    <div class="scene-row scene-header">
      <div class="scene-cell">序号</div>
      <div class="scene-cell">场景名称</div>
      <div class="scene-cell">绑定账户</div>
      <div class="scene-cell">预算金额</div>
      <div class="scene-cell">当前状态</div>
      <div class="scene-cell">创建时间</div>
      <div class="scene-cell">操作</div>
    </div>
    <div class="scene-row">
      <div class="scene-cell">1</div>
      <div class="scene-cell">场景 1</div>
      <div class="scene-cell">账户 A</div>
      <div class="scene-cell">$1000</div>
      <div class="scene-cell">进行中</div>
      <div class="scene-cell">2023-12-04</div>
      <div class="scene-cell">
        <lay-button size="xs" type="normal">详细</lay-button>
        <lay-button size="xs" type="primary">修改</lay-button>
        <lay-button size="xs" type="danger" @click="deleteValue">删除</lay-button>
      </div>
    </div>
  </div>

  <lay-layer v-model="visible" :area="['500px', '360px']" :btn="action" :shade="false" title="添加场景">
    <div style="padding: 10px;">
      <lay-form ref="layFormRef11" :model="scenario" required>
        <lay-form-item label="场景名称" prop="sceneName">
          <lay-input v-model="scenario.sceneName"></lay-input>
        </lay-form-item>
        <lay-form-item label="绑定账户" prop="bindAccount">
          <lay-input v-model="scenario.bindAccount" type="password">></lay-input>
        </lay-form-item>
        <lay-form-item label="预算金额" prop="budgetAmount">
          <lay-input v-model="scenario.budgetAmount"></lay-input>
        </lay-form-item>
        <lay-form-item label="当前状态" prop="currentStatus">
          <lay-select v-model="scenario.currentStatus" style="width:100%;">
            <lay-select-option label="准备开始" value="1"></lay-select-option>
            <lay-select-option label="已经开始" value="2"></lay-select-option>
            <lay-select-option label="已经结束" value="3"></lay-select-option>
          </lay-select>
        </lay-form-item>
      </lay-form>
    </div>
  </lay-layer>

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