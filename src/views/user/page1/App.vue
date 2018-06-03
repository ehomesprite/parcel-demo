<template>
  <div class="sample">{{text}}</div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        text: '测试文本233',
      }
    },
    methods: {
      async fn() {
        return new Promise(resolve => {
          setTimeout(() => {
            this.$utils.common.test();
            resolve();
          }, 1000);
        });
      },
      async init() {
        console.log(1);
        await this.fn();
        console.log(2)
      },
    },
    created() {
      this.init();
    },
  }
</script>

<style lang="less">
  body {
    background: gray;
    .sample {
      color: red;
    }
  }
</style>