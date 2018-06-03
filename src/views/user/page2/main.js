/**
 * created by snowdrop on 2018/5/27
 */
import('babel-polyfill').then(() => {
  const main = async () => {
    const { default: Vue } = await import('vue');
    const { default: commonUtils } = await import('utils/common');
    const App = () => import('./App');

    const init = {
      install(vue) {
        vue.prototype.$utils = {
          common: commonUtils,
        };
      },
    };
    Vue.use(init);

    new Vue({
      el: '#app',
      render: h => h(App),
    });
  };
  main();
});