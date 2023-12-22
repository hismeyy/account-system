<script setup>
import {reactive, ref} from 'vue'
import {layer} from "@layui/layui-vue"

const wallet = reactive({
      name: "",
      balance: "",
      remark: ""
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
  <lay-button size="sm" type="primary" @click="changeVisible">添加账户</lay-button>
  <lay-row space="10" style="margin-top: 10px">
    <lay-col md="8">
      <lay-card class="card" title="招商银行">
        <div class="card-info">
          <h3>余额: $1000</h3>
          <span>
          备注: 用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱量的钱用来存储自己大量的钱
        </span>
          <div class="card-btns">
            <lay-button size="xs" type="normal">详细</lay-button>
            <lay-button size="xs" type="primary">修改</lay-button>
            <lay-button size="xs" type="danger" @click="deleteValue">删除</lay-button>
          </div>
        </div>
      </lay-card>
    </lay-col>
  </lay-row>

  <lay-layer v-model="visible" :area="['500px', '310px']" :btn="action" :shade="false" title="添加账户">
    <div style="padding: 10px;">
      <lay-form ref="layFormRef11" :model="wallet" required>
        <lay-form-item label="账户名称" prop="walletName">
          <lay-input v-model="wallet.name"></lay-input>
        </lay-form-item>
        <lay-form-item label="账户余额" prop="balance">
          <lay-input v-model="wallet.balance">></lay-input>
        </lay-form-item>
        <lay-form-item label="账户备注" prop="remark">
          <lay-input v-model="wallet.remark"></lay-input>
        </lay-form-item>
      </lay-form>
    </div>
  </lay-layer>

</template>

<style scoped>
.card-container {
  margin-top: 15px;
  display: flex;
  justify-content: left;

}

/*  列表  */
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-info h3 {
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.2;
}

.card-info span {
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 4px;
}

.card-btns {
  display: flex;
  justify-content: flex-start; /* 按钮靠左对齐 */
  margin-top: 10px;
}

.grid-demo {
  padding: 10px;
  line-height: 50px;
  border-radius: 2px;
  text-align: center;
  background-color: var(--global-checked-color);
  color: #fff;
}
</style>