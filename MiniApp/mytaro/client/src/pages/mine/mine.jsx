import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import { AtButton } from 'taro-ui'
import Tabbar from '../../components/tabbar/tabbar'
import { cloudFunction, goto } from '../../utils'

import './mine.scss'

// const app = Taro.getApp()

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  state = {
    
  }
  async componentDidMount() {
    
  }

  componentDidShow() { }

  componentDidHide() { }

  getUserInfo = (e)=>{
    const {userInfo} = e.detail
    Taro.setStorage({
      key:'userInfo',
      data:userInfo
    })
  }

  render() {
    return (
      <View className='mine'>
        <AtButton type='primary' openType="getUserInfo" onGetUserInfo={this.getUserInfo}>登录</AtButton>
        <Tabbar current={2} />
      </View>
    )
  }
}

export default Index

