<template>
  <div class="sample">{{text}}</div>
</template>

<script>
  import commonUtils from 'utils/common';

  export default {
    name: 'App',
    data() {
      return {
        text: '测试文本233',
      }
    },
    methods: {
      // async fn() {
      //   return new Promise(resolve => {
      //     setTimeout(() => {
      //       commonUtils.test();
      //       resolve();
      //     }, 3000);
      //   });
      // },
      async init() {
        console.log(1);
        // await this.fn();
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