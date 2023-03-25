# project-tour

### 这是一个旅游项目!

### 开始于:2023年3月22日15:28:14

### 结束于:

### 项目知识点:

day1:

css布局:

在写tab-bar的时候需要使用到固定定位+flex;当使用固定定位时我们需要给他一定的left和right要不然开启定位的元素无法占满一定的位置

给固定定位和绝对定位的盒子设置left:0;right:0可以实现横向撑满

给固定定位和绝对定位的盒子设置top:0;bottom:0可以实现纵向撑满

给固定定位和绝对定位的盒子设置tleft:0;right:0；op:0;bottom:0可以实现充满整个屏幕

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

在vite项目中我对底部的tab-bar进行了抽取，因为图片需要动态的展示

由于vite的机制，我无法使用动态获取路径`:imgurl:"item.imgurl"`这在vite项目中是不能实现的

如果在webpack中我们可以使用require来实现 在vite中我们如果想实现动态获取url只能自己去封装函数动态获取

我们这个项目中的图片来自于本地如果来自于服务器要好得多

动态获取ImgUrl的函数封装

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

两天没写代码，今天对tab进行了ui库的使用 发现样式不对需要进行自定义

总结:修改第三方库大致有四种方式

1、如果你使用ui库的插槽语法插入了自己的元素 那么你在具有scoped的style标签中是可以直接修改样式的

2、你可以打开控制台看看这个样式是用的什么方式定义的 比如使用了css变量我们可以在:root中进行全局定义变量去覆盖原有的css变量(有可能需要加上！important;)

3、我们也可以在局部定义一个变量 去覆盖UI库样式 (有可能需要加上！important;)

4、最后一种最细节 我们可以直接找到他的选择器对齐进行修改样式 但是前提是你要对你写的选择器加上:deep()该样式才能生效 因为你在你的页面中使用了其他的样式实际上你是引入了一个ui库的子组件 所以他不生效 

```css
:deep(.xxxxxx){
font-size:50px;
}
```



