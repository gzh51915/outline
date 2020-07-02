import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text, Picker } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtList, AtListItem } from "taro-ui"

import { AtButton, AtForm, AtInput, AtSwitch } from 'taro-ui'
import { cloudFunction } from '../../utils'

import './class.scss'

// const app = Taro.getApp()


class Class extends Component {
    state = {
        classData: {},
        cityList: [],
        categoryList: []
    }
    getData = async () => {

    }
    async onLoad({ id }) {
        console.log('id=', id);

        // 根据id获取班级信息
        // const {result} = await Taro.cloud.callFunction({
        //     name:'class',
        //     data:{
        //         type:'find',
        //         query:{
        //             _id:id,
        //         },
        //         options:{
        //             total:false
        //         }
        //     }
        // });

        // 二次封装函数
        const classData = await cloudFunction('class', {
            type: 'find',
            query: {
                _id: id,
            },
            options: {
                total: false
            }
        })
        console.log('classData=', classData);

        // 获取城市数据
        const cityList = await cloudFunction('city', {
            type: 'find',
            options: {
                total: false,
                size: 100
            }
        });
        console.log('cityList=', cityList)

        // 获取学科数据
        const categoryList = await cloudFunction('category', {
            type: 'find',
            options: {
                total: false,
                size: 100
            }
        });

        this.setState({
            classData: classData[0],
            cityList,
            categoryList
        });


    }
    componentDidMount() {

    }

    componentDidShow() { }

    componentDidHide() { }

    onReachBottom() {

    }

    onSubmit = async (event) => {
        console.log('submit=', this.state.classData);
        const {classData} = this.state;
        const {category,city,name,is_current} = classData;
        try{
            await cloudFunction('class', {
                type: 'update',
                id: classData._id,
                data:{
                    category,city,name,is_current
                }
            });
            Taro.showToast({
                title:'修改成功'
            })
        }catch(err){
            Taro.showToast({
                title:'修改失败',
                icon:'none'
            })
        }
    }

    changeClassName = (value) => {
        const { classData } = this.state;
        classData.name = value;
        this.setState({
            classData
        })
    }

    changeCity = (e) => {
        const { classData, cityList } = this.state;
        const idx = e.detail.value
        classData.city = cityList[idx].name;
        this.setState({
            classData
        })
    }
    changeCategory = (e) => {
        const { classData, categoryList } = this.state;
        const idx = e.detail.value
        classData.category = categoryList[idx].name;
        this.setState({
            classData
        })


    }

    changeCurrent = (value) => {
        const { classData } = this.state;
        classData.is_current = value;
        this.setState({
            classData
        })
    }
    render() {
        const { classData, cityList, categoryList } = this.state;
        return (
            <View className='class-edit'>
                <AtForm
                // onSubmit={this.onSubmit}
                >
                    <AtInput
                        name='className'
                        title='班级名称'
                        type='text'
                        placeholder='输入班级名称'
                        value={classData.name}
                        onChange={this.changeClassName}
                    />
                    <Picker mode='selector' range={cityList} rangeKey='name' onChange={this.changeCity}>
                        <AtInput
                            name='city'
                            title='城市'
                            type='text'
                            placeholder='请选择城市'
                            value={classData.city}
                            readOnly
                        />
                    </Picker>
                    <Picker mode='selector' range={categoryList} rangeKey='name' onChange={this.changeCategory}>
                        <AtInput
                            name='category'
                            title='学科'
                            type='text'
                            placeholder='请选择学科'
                            value={classData.category}
                            readOnly
                        />
                    </Picker>
                    <AtSwitch border={false} checked={!!classData.is_current} title='设为当前班级' onChange={this.changeCurrent} />
                    <AtButton onClick={this.onSubmit}>提交</AtButton>
                </AtForm>
            </View>
        )
    }
}

export default Class

