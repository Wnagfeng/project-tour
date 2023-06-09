/*
下拉加载更多
 */
import { throttle } from "underscore";
import { onMounted, onUnmounted, ref } from "vue";
export function UserScroll(element) {
  let el = window;
  // 当我们滚动到底部的时候给使用这个hooks的组件一个回应
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);
  const ScrollListenerhandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight; //获取当前视口的高度
      scrollTop.value = document.documentElement.scrollTop; //获取当前已经滚动的距离
      scrollHeight.value = document.documentElement.scrollHeight; //获取当前一共可以滚动的距离
      // console.log(clientHeight.value, scrollTop.value, scrollHeight.value);
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
      // console.log(clientHeight.value, scrollTop.value, scrollHeight.value);
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 如果当前视口加上已经滚动的距离大于等于一共可以滚动的距离就说明已经到达底部了这时候可以发送网络请求了
      isReachBottom.value = true;
    }
  }, 100);
  // 由于我们是在window上添加的监听所以我们在其他页面需要使用到这个逻辑的时候一样会监听所以我们最好使用生命周期来动态监听
  onMounted(() => {
    if (element) el = element.value;
    el.addEventListener("scroll", ScrollListenerhandler);
  });
  onUnmounted(() => {
    el.removeEventListener("scroll", ScrollListenerhandler);
  });
  return { isReachBottom, scrollTop };
}
