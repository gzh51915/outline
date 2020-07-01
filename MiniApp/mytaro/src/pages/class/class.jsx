import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtList, AtListItem } from "taro-ui"

import { add, minus, asyncAdd } from '../../actions/counter'
import { AtButton } from 'taro-ui'

import Tabbar from '../../components/tabbar/tabbar'

import './class.scss'

// const app = Taro.getApp()


class Class extends Component {
  state = {
    page: 1,
    hasMore:true,
    classlist: []
  }
  getData = async () => {
    Taro.showLoading({
      title:'玩命加载中...'
    });
    // 调用云函数
    let {classlist,page} = this.state;
    const { result } = await Taro.cloud.callFunction({
      // 要调用的云函数名称
      name: 'class',
      // 传递给云函数的event参数
      data: {
        type: 'find',
        options:{
          page
        }
      }
    })

    console.log('res=', result);
    if(classlist.length === 0){
      this.setState({
        total:result.total
      })
      classlist = result.result
    }else{
      classlist = [...classlist,...result.result]
    }
    this.setState({
      classlist
    });

    Taro.hideLoading();
  }
  componentDidMount() {
    this.getData();
  }

  componentDidShow() { }

  componentDidHide() { }

  onReachBottom() {
    let { page,total,classlist } = this.state;
    if(classlist.length>= total){
      this.setState({
        hasMore:false
      });
      return;
    }

    page++;

    this.setState({
      page,
      hasMore:true
    }, () => {
      this.getData()
    })
  }

  render() {
    const { classlist,hasMore } = this.state;
    return (
      <View className='index' style={{paddingBottom:100}}>
        <AtList>
          {
            classlist.map(item => {
              return <AtListItem
                key={item._id}
                title={item.category + '-' + item.name}
                note={item.city}
                arrow='right'
                iconInfo={{ size: 25, color: '#78A4FA', value: 'link', }}
              />
            })
          }
        </AtList>
        {
          !hasMore ? 
          <View>我是有底线的</View>
          :
          null
        }
        <Tabbar current={1} />
      </View>
    )
  }
}

export default Class

