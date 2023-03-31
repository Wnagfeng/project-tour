import axios from "axios";
import { BASEURL, TIMEOUT } from "./Config";
import userMain from "@/Store/Module/Main";
const mainStore = userMain();
class WfRequest {
  constructor(BaseUrl, Timeout) {
    // 我们把接收的参数添加到每一个创建出来的实例上
    // 这里的instance指向了我们new出来的每一个axios实例对象
    /*
    在new WfRequest的时候实际上是调用这里的构造方法
    我们在构造方法中写了this.instance我们创建了一个新的实例
    我们针对这个实例添加一下实例方法
     */
    this.instance = axios.create({
      baseURL: BaseUrl,
      timeout: Timeout,
    });
    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isShowLogin = true;

        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        mainStore.isShowLogin = false;
        return res;
      },
      (err) => {
        mainStore.isShowLogin = false;
        return err;
      }
    );
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new WfRequest(BASEURL, TIMEOUT);

