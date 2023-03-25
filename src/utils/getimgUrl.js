export const loadImgUrl = (imgUrl) => {
  // 这里我们需要获取两个参数
  // 参数一相对路径
  // 参数二当前路径的URl
  // new URl有两个参数 第一个是需要配置的路径 第二个是baseurl也就是默认的url
  // new URL(url, [base])
  /*
    解析 import.meta.url是获取当前文件的运行环境的url
    比如在浏览器中解析的话会得到
    http://127.0.0.1:5173/src/components/Tabbar/Tabbar.vue?t=1679492463633
    这个路径正好是我们所需要的拿到当前的绝对路径以后我们在去获取一下图片的路径拼接一下就能获得整个图片的路径
    new URl是创建一个新路径的语法
    如果我们在给第一个参数传递值的时候他会自动给我们进行拼接并且在href中返回
    所以我们在获取当前的绝对路径的时候在跳到上两层目录找打我们需要的img拼接一下就行了
    注意这里的第一个参数是根据你的当前位置去找  因为他获取的当前文件的绝对路径 我们当前在utlis就要根据utlis去获取图片
     */
  const url = new URL(`../assets/img/${imgUrl}`, import.meta.url).href;
  // console.log(url);
  // console.log(import.meta.url);

  return url;
};
