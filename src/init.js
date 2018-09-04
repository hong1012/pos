/**
 * Created by hong on 2018/9/4.
 */
import axios from 'axios'
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条 样式

function init() {
  // 全局http请求配置
  let urlParams = {
    'dbid': 7911391974,
    'loginName': '100651667@kdc',
    'userid': 4833170
  };
  axios.interceptors.request.use(request => {
    NProgress.start()
    request.params = {
      dbid: urlParams.dbid || '',
      loginName: urlParams.loginName || '',
      userid: urlParams.uid || '',
      openId: urlParams.openId || '',
      ver: '1.0',
      ts: new Date().getTime()
    }
    return request;
  }, error => {
    return Promise.reject(error)
  })
  axios.interceptors.response.use(response => {
    NProgress.done()
    if (response.status !== 200) {
      // 系统级别的错误
      // Message.error(response.statusText)
      return Promise.reject(response.statusText)
    } else {
      // 业务级别的错误
      var status = response.data.result
      var msg = response.data.msg
      switch (status) {
        case 200 : return response;
        case 201 :
          window.location.href = response.data.data
          break;
        // 处理同一个账号多人登录重定向
        case 202 :
          // getDefaultPage().location.href = 'http://downloads.youshang.com/ys/frontend/logout.html';
          break;
        default :
          if (response.data.errcode === 0) {
            // 云盘的接口这里不会返回200 ，反而是errcode
            return response;
          }
          let errMsg = msg || '未知的系统错误';
          return Promise.reject(errMsg)
      }
    }
  }, error => {
    return Promise.reject(error);
  })
}

export {init}