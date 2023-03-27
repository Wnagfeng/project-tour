import axios from "axios";
import { BASEURL, TIMEOUT } from "./Config";
class WfRequest {
  constructor(BaseUrl, Timeout) {
    // 我们把接收的参数添加到每一个创建出来的实例上
    this.instance = axios.create({
      baseURL: BaseUrl,
      timeout: Timeout,
    });
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
