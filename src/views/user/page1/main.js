/**
 * created by snowdrop on 2018/5/27
 */
import App from './App';

const main = async () => {
  await import('babel-polyfill');
  const Vue = (await import('vue')).default;

  new Vue({
    el: '#app',
    render: h => h(App),
  });
};

main();