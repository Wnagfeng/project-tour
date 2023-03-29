/*
下拉加载更多
 */
import { throttle } from "underscore";
import { onMounted, onUnmounted, ref } from "vue";
export function UserScroll() {
  // 当我们滚动到底部的时候给使用这个hooks的组件一个回应
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);
  const ScrollListenerhandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight; //获取当前视口的高度
    scrollTop.value = document.documentElement.scrollTop; //获取当前已经滚动的距离
    scrollHeight.value = document.documentElement.scrollHeight;
    // console.log(clientHeight, scrollTop, scrollHeight); //获取当前一共可以滚动的距离
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 如果当前视口加上已经滚动的距离大于等于一共可以滚动的距离就说明已经到达底部了这时候可以发送网络请求了
      isReachBottom.value = true;
    }
  }, 100);
  // 由于我们是在window上添加的监听所以我们在其他页面需要使用到这个逻辑的时候一样会监听所以我们最好使用生命周期来动态监听
  onMounted(() => {
    console.log("监听开始了");
    window.addEventListener("scroll", ScrollListenerhandler);
  });
  onUnmounted(() => {
    console.log("监听结束了");
    window.removeEventListener("scroll", ScrollListenerhandler);
  });
  return { isReachBottom, scrollTop };
}
