/**
 * created by snowdrop on 2018/5/27
 */
import('babel-polyfill').then(() => {
  const main = async () => {
    const Vue = (await import('vue')).default;
    const App = () => import('./App');

    new Vue({
      el: '#app',
      render: h => h(App),
    });
  };
  main();
});