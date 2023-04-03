# project-tour

### 这是一个旅游项目!

### 结束于:

### 项目知识点:

## 项目难点

### css 布局:

在写 tab-bar 的时候需要使用到固定定位+flex;当使用固定定位时我们需要给他一定的 left 和 right 要不然开启定位的元素无法占满一定的位置

给固定定位和绝对定位的盒子设置 left:0;right:0 可以实现横向撑满

给固定定位和绝对定位的盒子设置 top:0;bottom:0 可以实现纵向撑满

给固定定位和绝对定位的盒子设置 tleft:0;right:0；op:0;bottom:0 可以实现充满整个屏幕

```css
我们还可以使用简写属性:
inset: 0;
/* 等同于 `top: 0; right: 0; bottom: 0; left: 0;` */
inset: 1px 2px;
/* 等同于 `top: 1px; right: 2px; bottom: 1px; left: 2px;` */
inset: 1px 2px 3px;
/* 等同于 `top: 1px; right: 2px; bottom: 3px; left: 2px;` */
inset: 1px 2px 3px 4px;
/* 等同于 `top: 1px; right: 2px; bottom: 3px; left: 4px;` */
```

### ViteUrl

在 vite 项目中我对底部的 tab-bar 进行了抽取，因为图片需要动态的展示

由于 vite 的机制，我无法使用动态获取路径`:imgurl:"item.imgurl"`这在 vite 项目中是不能实现的

如果在 webpack 中我们可以使用 require 来实现 在 vite 中我们如果想实现动态获取 url 只能自己去封装函数动态获取

我们这个项目中的图片来自于本地如果来自于服务器要好得多

动态获取 ImgUrl 的函数封装

```js
export const loadImgUrl = (imgUrl) => {
  // 这里我们需要获取两个参数
  // 参数一相对路径
  // 参数二当前路径的URl
  // new URl有两个参数 第一个是需要配置的路径 第二个是baseurl也就是默认的url ---- new URL(url, [base])
  /*
    解析 import.meta.url是获取当前文件的运行环境的url
    比如在浏览器中解析的话会得到
    http://127.0.0.1:5173/src/components/Tabbar/Tabbar.vue?t=1679492463633
    这个路径正好是我们所需要的拿到当前的绝对路径以后我们在去获取一下图片的路径拼接一下就能获得整个图片的路径
    new URl是创建一个新路径的语法
    如果我们在给第一个参数传递值的时候他会自动给我们进行拼接并且在href中返回
    所以我们在获取当前的绝对路径的时候在跳到上两层目录找打我们需要的img拼接一下就行了
    注意这里的第一个参数是根据你的当前位置去找  因为他获取的当前文件的绝对路径 我们当前在utlis就要根据utlis去     获取图片
 */
  const url = new URL(`../assets/img/${imgUrl}`, import.meta.url).href;
  console.log(url);
  console.log(import.meta.url);
  return url;
};
```

### 修改第三方库的样式

两天没写代码，今天对 tab 进行了 ui 库的使用 发现样式不对需要进行自定义

总结:修改第三方库大致有四种方式

1、如果你使用 ui 库的插槽语法插入了自己的元素 那么你在具有 scoped 的 style 标签中是可以直接修改样式的

2、你可以打开控制台看看这个样式是用的什么方式定义的 比如使用了 css 变量我们可以在:root 中进行全局定义变量去覆盖原有的 css 变量(有可能需要加上！important;)

3、我们也可以在局部定义一个变量 去覆盖 UI 库样式 (有可能需要加上！important;)

4、最后一种最细节 我们可以直接找到他的选择器对齐进行修改样式 但是前提是你要对你写的选择器加上:deep()该样式才能生效 因为你在你的页面中使用了其他的样式实际上你是引入了一个 ui 库的子组件 所以他不生效

```css
:deep(.xxxxxx) {
  font-size: 50px;
}
```

### 动态展示 TabBar

在做城市选择的时候我们在这种页面中是不需要展示底部的 TabBar 的所以我们需要对 TabBar 进行动态展示

#### 方案一:

在路由中 meat 进行携带是否展示状态进行动态展示

```js
 {
      path: "/city",
      component: () => import("@/views/City/City.vue"),
      // 在这里定义是否需要展示TabBar的状态
      meta: {
        IsShowTabBar: true,
      },
  },

 组件：  <Tabbar v-show="!router.meta.IsShowTabBar"></Tabbar>
注意我们在这里设置值得时候我们最好给true如果你给了false你会发现整个页面都不展示TabBar了
试想一下如果每次他都会去找一下router.meta.IsShowTabBar在city中确实能找到布尔值进行判断
但是在home页面中呢或者在message中呢他找不到这个值甚至连router都没有 所以他会拿到undefined 然后呢他展示不出来
他不知道undefined是展示还是不展示这就很蛋疼，我们建议来个true 然后对其进行取反展示,如果拿到是undefined取反变成true就可以正常展示了 如果进行city他会拿到 true 直接反转不展示
```

#### 方案二

利用 css 知识进行覆盖展示

```css
.top-page {
  //开启相对定位
  position: relative;
  //设置层级
  z-index: 9;
  //设置高度
  height: 100vh;
  background-color: #fff;
  //滚动只在100vh中滚动
  overflow-y: auto;
}
```

### 网络请求

对网络请求的一些规划

我们在使用 axios 的时候最好对齐进行封装，封装完成以后我们在 series 中创建一个模块文件夹，在模块文件夹中

有许多模块比如 city homebanner homlist 等等

### cssFlex

```
当指定view为flex布局后，给子元素定义width是不起效果的。

原因：定义为flex布局元素的子元素，自动获得了flex-shrink的属性，这个属性是什么意思呢？就是告诉子元素当父元素宽度不够用时，
自己调整自己所占的宽度比，这个flex-shrink设置为1时，表示所有子元素大家同时缩小来适应总宽度。当flex-shrink设置为0时，表示大家都不缩小适应。

所以，倘若给父元素设置了flex布局后，若要其子元素的width有效果，必须给子元素设置flex-shrink为0。

当然，还有一种办法，就是给需要设置width元素的外面再嵌套一层view。这样一来，设置width的元素就变成了子子元素，自然，也就不用受这种规矩的约束了。
```

### css 只显示两行标题解决方案

```css
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

	1.超出的文本隐藏
	2.溢出用省略号显示
	3.溢出不换行
	4.将对象作为弹性伸缩盒子模型显示
	5.从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
	6.这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数

只显示一行标题
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow:ellipsis;
```

拓展----CSS 实现单行、多行文本溢出显示省略号（…）

```css
如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。

实现方法：
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

```

![屏幕截图 2023-03-28 212011](C:\Users\WangFeng\Desktop\屏幕截图 2023-03-28 212011.png)

但是这个属性只支持单行文本的溢出显示省略号，如果我们要实现多行文本溢出显示省略号呢。

接下来重点说一说多行文本溢出显示省略号，如下。

实现方法：

```css
/* Firefox */
display:-moz-box;
-moz-box-orient:vertical;
-moz-line-clamp: 3;
overflow: hidden;

/* Safari, Opera, and Chrome */
display:-webkit-box;
-webkit-box-orient:vertical;
-webkit-line-clamp: 3;
overflow: hidden;

/* W3C */
display:box;
box-orient:vertical;
line-clamp: 3;
overflow: hidden;
}
```

![屏幕截图 2023-03-28 212103](C:\Users\WangFeng\Desktop\屏幕截图 2023-03-28 212103.png)

适用范围：
因使用了 WebKit 的 CSS 扩展属性，该方法适用于 WebKit 浏览器及移动端；

注：

> -webkit-line-clamp 用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的 WebKit 属性。常见结合属性：
> display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
> -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

实现方法：

```
    p {
        position: relative;
        line-height: 20px;
        max-height: 40px;
        overflow: hidden;
    }

    p::after {
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 40px;
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
        background: -o-linear-gradient(right, transparent, #fff 55%);
        background: -moz-linear-gradient(right, transparent, #fff 55%);
        background: linear-gradient(to right, transparent, #fff 55%);
    }
```

![image-20230328212157453](C:\Users\WangFeng\AppData\Roaming\Typora\typora-user-images\image-20230328212157453.png)

适用范围：
该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合 js 优化该方法。

> 注：
> 将 height 设置为 line-height 的整数倍，防止超出的文字露出。
> 给 p::after 添加渐变背景可避免文字只显示一半。

> 由于 ie6-7 不显示 content 内容，所以要添加标签兼容 ie6-7（如：…）；兼容 ie8 需要将::after 替换成:after。

### css 实现三角形效果

三角形主要是使用边框的特性实现的所以最好给他宽高为 0 然后来四个边框四种颜色你会发现 边框的衔接处正好是一个

三角形把不需要的边框样式设置为透明色即可实现一个三角形再来一个旋转即可实现不同方向的三角形

```css
.end .data::after {
  content: "";

  width: 0px;

  height: 0px;

  border: 4px solid #666;

  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;

  border-radius: 3px;

  position: absolute;
  // 伪元素是行内元素 无法设置宽高，如果需要设置我们需要display 或者开启定位 刚好这里需要调整位置直接开启定位就行
  transform: rotate(45deg);

  bottom: -1px;

  right: -1px;
}
```

### background 属性的简写方式

```css
background：color img_url repeat attachment position / size
//颜色 图片地址 重复 是否固定 位置 / 尺寸
```

### 请求拦截器实现动态请求时加载 Loding 动画

```js
this.instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    mainStore.isShowLogin = true;

    return config;
  },
  (err) => {
    return err;
  }
);
this.instance.interceptors.response.use(
  (res) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    mainStore.isShowLogin = false;
    return res;
  },
  (err) => {
    mainStore.isShowLogin = false;
    return err;
  }
);
在mainStore中我们保存了是否动态加载动画的布尔值;
我们只需要在请求拦截器中对其进行修改就行;
```

可以给自定义的 axios 实例添加拦截器。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {
  /*...*/
});
```

### 详情页对数据进行分类

他妈的老是打印不出来数据原因是在detail页面中没有对数据进行判断

我们需要等到数据完全回来才能渲染组件

```vue
 <div class="main" v-if="mainPart">
      <DetaileBanner
        :swipe-data="mainPart?.topModule?.housePicture?.housePics"
      ></DetaileBanner>
 </div>
```

对数据进行分类的思路:

在详情页中轮播图的右下角有浴室主卫毛刺的图片展示每种图片都对应一组图片数据

我们如果想做分类指示器的话必须对数据进行分类

我们观察数据发现每一个数据里面都会有分类的title以他为突破点分类数据

#### 方案一:national_park:难理解

```js
// 声明一个分类数据类型为对象
const swipeGroup = {}

// 思路一次循环完成
// 第一步遍历所有的数据
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  //由于第一次上来我们的swipeGroup中没有任何的数据 所以我们去取的话都是undefined
  //只要没有找到该key就说明该key不存在那我们就把它添加进去
  if (!valueArray) {
      //我们让该value赋值为一个数组
    valueArray = []
      //在从swipeGroup中找到x类型 让他当做key 让valueArray当做value
      //例如---2:[] , 9:[]
      //复习--Object[key]=value ----> key:value ---inster
    swipeGroup[item.enumPictureCategory] = valueArray
  }
    //创建好数据结构以后把我们的item添加进行
  valueArray.push(item)
```

#### 方案二:haircut:好理解 

```js
for (const item of props.swipeData) {
    //第一步我们拿出所有的key创建好数据类型key value结构
    //不用担心会创建多个数组因为他名字一样的话会覆盖掉所以只会留下不同的
  swipeGroup[item.enumPictureCategory] = [];
}

 for (const item of props.swipeData) {
     //根据每个item数据的类型 push一下当前item类型数据
  swipeGroup[item.enumPictureCategory].push(item);
}

```

### 滚动的逻辑

滚动的话用两种方式 一种的整个视口的滚动一种是元素的滚动

如果是元素的话我们就对元素进行监听 如果是页面的话我们需要对window进行监听

```js
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
    if (element === window) {
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
      console.log("到底了");
    }
  }, 100);
  // 由于我们是在window上添加的监听所以我们在其他页面需要使用到这个逻辑的时候一样会监听所以我们最好使用生命周期来动态监听
  onMounted(() => {
    if (element) {
      el = element.value;
    }
    console.log("监听开始了");
    el.addEventListener("scroll", ScrollListenerhandler);
  });
  onUnmounted(() => {
    console.log("监听结束了");
    el.removeEventListener("scroll", ScrollListenerhandler);
  });
  return { isReachBottom, scrollTop };
}

```

### 小小算法一道

#### 主要用于解析歌词或者根据位置匹配tab

```js
   // 需求 根据CurrentNumber 返回他在Array中的位置(CurrentIndex)
      /*
      例如:
      400 在300-500之间 所以位置为1 
      99---返回-1
       */
      const Array = [100, 300, 500, 700, 900, 1100];
      const CurrentNumber = 99;
      let CurrentIndex = undefined;
      // 第一步遍历数组
      for (let i = 0; i < Array.length; i++) {
        const ArrayNumber = Array[i];
        // 第二步找到一个大于CurrentNumber的元素
        if (ArrayNumber > CurrentNumber) {
          CurrentIndex = i - 1;
            //if (CurrentIndex == -1) CurrentIndex = 0;
          break;
        }
      }
      console.log(CurrentIndex);
```

这里的应用场景就是对于歌词的匹配和tab的匹配

因为歌词和tab在一开始是不用匹配的 比如在我们的项目中在小于数组中的数据之前都是-1在等于-1的期间我们的tab还没出来，所以不用担心，歌词也是一样在一开始有前奏我们的歌词暂时还没出来所以不用去匹配

如果真的需要进行匹配我们可以直接给他判断一下改变一下就是了

注意点:当我们的CurrentNumber大于数组中的所有数据比如是1200我们由于没有比他大的index了所以是undefined

所以我们最好在Currentindex初始的时候给他是数组最大长度减一

### KeepAlive的使用

keepalive主要是为了保持组件的鲜活性，

v2 的做法

```js
//Router页面
// router -> index.js
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      // 关键在这下面三行，这个组件就是缓存的啦
      meta: {
        keepAlive: true, 
        deepth: 1,
      },
      component: () => import("@/pages/home/index"),
     }
   ]
}) 
App页面---------------
  // App.vue
 <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
 </keep-alive>
 <router-view v-if="!$route.meta.keepAlive" />
/*
上面代码意思为：
$route我们都知道是路由对象，里面保存着某个路由它自身的所有属性，用v-if三元判断哪个路由身上的meta属性下的keepAlive值为true，那么就用缓存，否则不缓存，是不是非常简单。
*/
```

V3做法

我们如果直接包裹的话会给我们报警告

```js
//错误示范
<KeepAlive>
    <RouterView></RouterView>
</KeepAlive>
//正确做法
<router-view v-slot="props">
  <keep-alive include="home">
    <component :is="props.Component"></component>
  </keep-alive>
</router-view>
//Or
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
```

