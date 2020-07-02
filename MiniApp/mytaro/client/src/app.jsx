import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'react-redux'

import configStore from './store'

import 'taro-ui/dist/style/index.scss'
import './app.scss'

const store = configStore()

class App extends Component {
  onLaunch(){
    Taro.cloud.init({
      env: 'qf-52690b'
    });

  }
  async componentDidMount () {
    // 获取用户授权信息
    const {authSetting} = await Taro.getSetting()
    if(authSetting['scope.userInfo']){
        const userInfo = await Taro.getUserInfo();
        console.log('userInfo=',userInfo)

        Taro.setStorage({
          key:'userInfo',
          data:userInfo.userInfo
        })
    }else{
      // 未授权
      // 主动提示用户授权
      Taro.authorize({
        scope: 'scope.userInfo',
        success: async function () {
          const userInfo = await Taro.getUserInfo();
          console.log('userInfo=',userInfo);

          Taro.setStorage({
            key:'userInfo',
            data:userInfo.userInfo,
          })
        },
        fail(){
          Taro.showToast({
            title:'未授权无法使用小程序相关功能'
          })
        }
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
