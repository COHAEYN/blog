<template>
  <section class="newly-build">
    <div class="clearfix">
      <el-button type="primary" size="small" @click="handleSaveClick" class="save-btn">保存</el-button>
    </div>
    <mavonEditor 
      v-model="article"
      ref="editor"
      :boxShadow="false"
      placeholder="请输入..."
      @save="handleSaveClick"
      @imgAdd="handleImageAdd"></mavonEditor>
    <!-- <div  class="markdown-body"   v-html="article_html"/> -->
  </section>
</template>
<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      article: '',
      article_html: ''
    }
  },
  methods: {
    handleSaveClick(markdown, html) {
      if(html) {
        this.article_html = html
      } else {
        this.article_html = this.$refs.editor.d_render
      }
      console.log(this.article_html)
    },
    handleImageAdd(pos, $file) {

    }
  }
}
</script>
<style lang="scss">
  .newly-build {
    width: 90%;
    margin: 0 auto;
    padding-top: $--card-spacing;

    .v-note-wrapper {
      min-height: 600px;
    }
    .v-show-content {
      background-color: #FFFFFF !important;
    }
    .save-btn {
      float: right;
      margin-bottom: $--card-spacing;
    }
    .cleafix {
      zoom: 1;
    }
    .clearfix:after {
      content: '.';
      clear: both;
      display: block;
      height: 0;
      visibility: hidden;
    }
  }
</style>