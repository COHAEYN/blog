<template>
  <section class="right-list">
    <Card title="标签分类" shadow="hover">
      <div class="category-btn">
        <el-button round size="mini" v-for="item in category" :key="item" @click="handleCategoryClick(item)">{{item}}</el-button>
      </div>
    </Card>
  </section>
</template>
<script>
import Card from '@/components/Card'
export default {
  components: {
    Card
  },
  data() {
    return {
      category: [
        'vue', 'javascript', 'html','webpack', 'jquery'
      ],
    }
  },
  methods: {
    handleCategoryClick(name) {
      this.$router.push({ name: 'Category', params: {name: name} })
    }
  }
}
</script>
<style lang="scss">
  .right-list {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    flex-shrink: 0;

    .category-btn {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 10px;

      .el-button {
        margin-left: 0;
        margin-right: 10px;
        margin-top: 10px;
      }
    }
  }
</style>