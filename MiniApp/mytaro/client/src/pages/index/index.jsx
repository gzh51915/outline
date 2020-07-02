import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'

import { AtButton } from 'taro-ui'
import Tabbar from '../../components/tabbar/tabbar'
import { cloudFunction, goto } from '../../utils'

import './index.scss'

// const app = Taro.getApp()

class Index extends Component {
  state = {
    currentClass: {},
    studentList: []
  }
  async componentDidMount() {
    // 获取当前班级信息
    let currentClass = await cloudFunction('class', {
      type: 'find',
      query: {
        is_current: true
      },
      options: {
        total: false
      }
    });
    console.log(currentClass)
    currentClass = currentClass[0];

    // 根据当前班级，获取所有学生信息
    const studentList = await cloudFunction('student', {
      type: 'find',
      query: {
        class: currentClass.name
      },
      options: {
        total: false,
        size: 100
      }
    });

    console.log('studentList=', studentList)
    this.setState({
      currentClass,
      studentList
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { studentList, currentClass } = this.state;
    return (
      <View className='index'>
        {/* 显示当前班级信息 */}
        <View className='at-article'>
          <View className='at-article__h1'>
            {currentClass.city}-{currentClass.category}-{currentClass.name}
          </View>
          <View className='at-article__info'>
            总人数：{studentList.length} 人
          </View>
        </View>
        <View className='at-row at-row--wrap'>
          {
            studentList.map(item => {
              return <View key={item._id} className='at-col at-col-4' style={{ padding: '5px 10px' }}>
                <AtButton size='small' onClick={goto.bind(this,'/manage/student/edit',{id:item._id})}>{item.name}</AtButton></View>
            })
          }
        </View>
        <Tabbar />
      </View>
    )
  }
}

export default Index

