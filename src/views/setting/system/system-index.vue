<script setup>

</script>

<template>
  <lay-field title="GitHub同步">
    <!--    <lay-form :model="model">-->
    <!--      <lay-form-item label="仓库名称" prop="repositoryName">-->
    <!--        <lay-input v-model="model.repositoryName"></lay-input>-->
    <!--      </lay-form-item>-->

    <!--      <lay-form-item label="分支名称" prop="branchName">-->
    <!--        <lay-input v-model="model.branchName"></lay-input>-->
    <!--      </lay-form-item>-->

    <!--      <lay-form-item label="token" prop="token">-->
    <!--        <lay-input v-model="model.token" type="password"></lay-input>-->
    <!--      </lay-form-item>-->

    <!--      <lay-form-item label="存储路径" prop="storagePath">-->
    <!--        <lay-input v-model="model.storagePath"></lay-input>-->
    <!--      </lay-form-item>-->

    <!--      <lay-form-item style="text-align: center;">-->
    <!--        <lay-button type="primary" @click="submit">保存</lay-button>-->
    <!--      </lay-form-item>-->
    <!--    </lay-form>-->
    <lay-form>
      <lay-form-item label="仓库名称" prop="repositoryName">
        <lay-input></lay-input>
      </lay-form-item>

      <lay-form-item label="分支名称" prop="branchName">
        <lay-input></lay-input>
      </lay-form-item>

      <lay-form-item label="token" prop="token">
        <lay-input type="password"></lay-input>
      </lay-form-item>

      <lay-form-item label="存储路径" prop="storagePath">
        <lay-input></lay-input>
      </lay-form-item>

      <lay-form-item style="text-align: right;">
        <lay-button size="sm" type="primary">保存</lay-button>
        <lay-button size="sm" type="default">重置</lay-button>
        <lay-button size="sm" type="normal">同步</lay-button>
      </lay-form-item>
    </lay-form>
  </lay-field>
</template>

<style scoped>

</style>