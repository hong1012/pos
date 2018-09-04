import axios from 'axios'
import {encode} from './queryString'

class Api {
  constructor(method) {
    if (method) {
      method = method + '.'
    }
    this.url = '/openapi/rest?method=jdy.' + method
  }
  _get(action, param, options) {
    return new Promise((resolve, reject) => {
      axios.get(this.url + action + '&' + encode(param), options).then(result => {
        resolve(result.data)
      }).catch(error => {
        reject(error)
      })
    });
  }
  _post(action, data, options) {
    return new Promise((resolve, reject) => {
      axios.post(this.url + action, data, options).then(result => {
        resolve(result.data)
      }).catch(error => {
        reject(error)
      })
    });
  }
  // 查列表
  list(param = {}) {
    return this._post('list', param)
  }
  // 查单个详细
  find(param = {}) {
    return this._post('find', param)
  }
  // 删
  delete(param) {
    return this._post('delete', param)
  }
}

class API_CARD extends Api {
  // 获取门店
  getAllStore(param) {
    return this._post('getAllStore', param)
  }
}

export let apiTest = new API_CARD('member.mbBaseInfoService');
export let apiCard = new API_CARD('wechat.recharge');
