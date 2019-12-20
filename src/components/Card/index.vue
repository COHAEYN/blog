<template>
  <el-card v-bind="$attrs" v-on="$listeners" :style="{height: height, width: width}">
    <p class="title">{{title}}</p>
    <slot></slot>
  </el-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: '100%'
    }
  }
}
</script>
<style lang="scss">
  .el-card {
    .title {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
  }
</style>