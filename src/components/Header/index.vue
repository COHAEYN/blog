<template>
  <header>
    <div class="nav">
      <i class="el-icon-s-home home-icon" @click="handleBackHome"></i>
      <el-input prefix-icon="el-icon-search" v-model="search" @keyup.enter.native="handleSeach"></el-input>
      <el-dropdown @command="handleCommand">
        <img src="../../assets/images/header-img.jpeg" class="header-img">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="markdown">新建Markdown文档</el-dropdown-item>
          <el-dropdown-item command="file">新建普通文档</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleCommand(command) {
      this.$router.push({ name: 'NewlyBuild', params: { attribute: command } })
    },
    handleBackHome() {
      this.$router.push('/')
    },
    handleSeach() {
      if(this.search == '') {
        return
      }
      console.log(this.search)
    }
  }
}
</script>
<style lang="scss">
  header {
    height: $--header-height;
    background-color: #FFF;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    .nav {
      height: $--header-height;
      margin-right: 40px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      

      .el-input {
        width: 240px;
        margin-left: auto;
        &__inner {
          border-radius: 60px;
        }
      }
      .home-icon {
        color: #ea6f5a;
        font-size: 30px;
      }
      .header-img {
        width: 50px;
        border-radius: 50%;
        margin-left: 20px;
      }
    }
  }
</style>