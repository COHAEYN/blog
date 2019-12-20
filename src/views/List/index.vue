<template>
  <section class="list">
    <div class="list-left">
      <div>
        <img class="banner" src="../../assets/images/banner.jpg">
      </div>
      <el-card class="article-list" shadow="never">
        <div class="article" v-for="item in article" :key="item.id">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
        </div>
      </el-card>
    </div>
    <Right class="right"/>
  </section>
</template>
<script>
import Right from './components/Right'
export default {
  components: {
    Right
  },
  data() {
    return {
      article: [
        {id: '1001', title: 'vue-router query和params传参(接收参数)$router $route的区别', desc: '今天做项目时踩到了vue-router传参的坑（query和params），所以决定总结一下二者的区别。直接总结干货！！！1.query方式传参和接收参数...'},
        {id: '1002', title: 'vue-router query和params传参(接收参数)$router $route的区别', desc: '今天做项目时踩到了vue-router传参的坑（query和params），所以决定总结一下二者的区别。直接总结干货！！！1.query方式传参和接收参数...'}
      ]
    }
  }
}
</script>
<style lang="scss">
  .list {
    width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: $--card-spacing 0;
    position: relative;
    box-sizing: border-box;
    display: flex;

    &-left {
      width: auto;
      margin-right: $--card-spacing;

      .banner {
        width: 100%;
        height: 100%;
        border-radius: $--card-border-radius;
      }
      .article-list {
        display: flex;
        flex-direction: column;
        margin-top: $--card-spacing;
        text-align: left;
        
        .article {
          padding-bottom: 10px;
          border-bottom: 1px solid #f0f0f0;
      
          &:last-child {
            border: none;
          }
          h3 {
            font-size: 18px;
            line-height: 1.5em;
            margin: 10px 0;
          }
          p {
            font-size: 13px;
            color: #999;
            line-height: 1.5em;
          }
        }
        
      }
    }
  }
  
  @media screen and (max-width: 800px) {
    .list {
      width: 100%;

      .right {
        display: none;
      }
      .list-left {
        width: 100%;
        margin: 0 10px;
      }
    }
    
  }
</style>