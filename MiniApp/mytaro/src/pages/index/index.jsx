import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import {AtButton} from 'taro-ui'
import Tabbar from '../../components/tabbar/tabbar'

import './index.scss'

// const app = Taro.getApp()

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* <Button className='add_btn' onClick={this.props.add}>+</Button> */}
        <AtButton type='primary' className='add_btn' onClick={this.props.add}>+</AtButton>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View>欢迎来到h5班级管理系统</View>

        <Tabbar/>
      </View>
    )
  }
}

export default Index

