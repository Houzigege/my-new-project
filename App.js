
/** @format */
import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
import models from './app/models';
import dva from './app/utils/dva'
import Router, { routerMiddleware, routerReducer } from './app/route/router';

// 创建全局storage
global.storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,
  storageBackend: AsyncStorage,
  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  defaultExpires: null,
  // 读写时在内存中缓存数据。默认启用。
  enableCache: true
});


const app = dva({
  initialState: {},
  models: models,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  }
});

const Home = app.start(<Router />);

export default class App extends React.Component {
  render() {
    return (
        <Home />
    );
  }
}
