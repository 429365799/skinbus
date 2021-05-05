import axios from 'axios';
import configs from '../configs.js';

const apiInstance = axios.create({
  baseURL: configs.baseUrl,
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * 异步请求的封装
 * @param url
 * @param options
 * @return {Promise<*>}
 */
export default async function (url, options) {
  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {},
    data: {},
    // 是否默认显示失败后的提示
    showErrorTip: true,
    ...(options || {}),
  };

  let token = '';
  try {
    //token = sessionStorage.getItem('token');
    token = localStorage.getItem('token');

    if (token) {
      if (settings.method === 'GET') {
        Object.assign(settings.params, { token })
      } else if (settings.method === 'POST') {
        Object.assign(settings.data, { token })
      }
    } else if (!/.*login.*/.test(url)) {
      /*window.location.href = '/login';
      return;*/
    }
  } catch (e) {
    //console.log('[request.js] convert error: ', e)
  }

  const response = await apiInstance.request({
    url,
    ...settings,
  });
  switch (response.status) {
    case 200:
      if (response.data.msg === '没有token！' || response.data.code === 10006) {
        // 登录失败
        console.error("[登录失效]:", response.data);
        window.location.href = '/login';
        return;
      } else if (response.data.code === 99999) {
        if (settings.showErrorTip) {
          message.error(response.data.msg);
        }
      } else if (response.data.code === 10301) {
        if (settings.showErrorTip) {
          message.error(response.data.msg);
        }
      }
      return response.data;
    case 500:
      console.error("[请求错误]:", response.statusText);
      return null;
    default:
      return null;
  }
}
