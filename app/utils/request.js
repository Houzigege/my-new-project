import { NetInfo } from "react-native";
import { Toast } from "@ant-design/react-native";

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  Toast.info(`请求错误 ${response.status}: ${response.url}`,1);
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};


//请求域名头
const urlTitle = 'http://39.105.201.251/distributor';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, option) {

  //检测网络是否连接
  NetInfo.isConnected.fetch().done((isConnected) => {
    console.log(isConnected,'isConnected');
  });

  //检测网络连接信息
  NetInfo.getConnectionInfo().done((connectionInfo) => {
    console.log(connectionInfo, 'connectionInfo');
    if(connectionInfo.type == 'none'){
      Toast.info('暂无网络链接', 1);
    }else if(connectionInfo.type == 'unknown'){
      Toast.info('联网状态异常', 1);
    }
  });

  //监听网络变化事件
  NetInfo.addEventListener('connectionChange', (networkType) => {
    console.log(networkType, 'networkType');
    if(networkType == 'none'){
      Toast.info('暂无网络链接', 1);
    }else if(networkType == 'unknown'){
      Toast.info('联网状态异常', 1);
    }
  });

  //读取TOKEN
  const TOKEN = await storage.load({
    key: 'TOKEN',
    autoSync: false
  }).then(ret => {
    console.log('TOKEN=' + ret);
    return ret.TOKEN;
  }).catch(err => {
    console.log('err=' + err);
    return null;
  });
  console.log(TOKEN);

  const newUrl = `${urlTitle}${url}`
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...option };
  if (
      newOptions.method === 'POST' ||
      newOptions.method === 'PUT' ||
      newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  if(TOKEN) {
    newOptions.headers.TOKEN = TOKEN;
  }

  return fetch(newUrl, newOptions)
      .then(checkStatus)
      .then(response => {
        // DELETE and 204 do not return data by default
        // using .json will report an error.
        if (newOptions.method === 'DELETE' || response.status === 204) {
          return response.text();
        }
        //如果登入过期
        if (response.status == 200) {
          const resData = JSON.parse(response._bodyText);
          console.log(resData);
          if(resData.code == 2) {
            Toast.info('登陆过期，请重新登陆', 2);
            storage.remove({
              key: 'TOKEN'
            });
            storage.remove({
              key: 'userName'
            });
            global.stopMsgTime && clearInterval(global.stopMsgTime);
            global.pushNavigate('Login');
          }
        }
        return response.json();
      })
      .catch(err => {
        const status = err.name;
        console.log(status);
        if (status === 401) {
          global.pushNavigate('Login');
          return;
        }
        if (status === 403) {
          global.pushNavigate('403');
          return;
        }
        if (status <= 504 && status >= 500) {
          global.pushNavigate('500');
          return;
        }
        if (status >= 404 && status < 422) {
          global.pushNavigate('404');
          return;
        }
        return err;
      });
}
