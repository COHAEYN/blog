<template>
  <section class="category">
    {{name}}
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    this.name = this.$route.params.name
  }
}
</script>