<template>
  <div class="sample">{{text}}</div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        text: '测试文本',
      }
    },
    methods: {
      async fn() {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log(3);
            resolve();
          }, 3000);
        });
      },
    },
    async created() {
      console.log(1);
      await this.fn();
      console.log(2)
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