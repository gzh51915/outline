import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text, Picker } from '@tarojs/components'
import { connect } from 'react-redux'
import { AtList, AtListItem } from "taro-ui"

import { AtButton, AtForm, AtInput, AtSwitch } from 'taro-ui'
import { cloudFunction } from '../../utils'

import './student.scss'

// const app = Taro.getApp()


class Class extends Component {
    state = {
        data: {},
        classList: [],
        categoryList: [],
        cityList: []
    }
    getData = async () => {

    }
    async onLoad({ id }) {
        console.log('id=', id);


        // 二次封装函数
        const data = await cloudFunction('student', {
            type: 'find',
            query: {
                _id: id,
            },
            options: {
                total: false
            }
        })
        console.log('data=', data);

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

        // 获取班级数据
        const classList = await cloudFunction('class', {
            type: 'find',
            options: {
                total: false,
                size: 1000
            }
        });

        this.setState({
            data: data[0],
            cityList,
            categoryList,
            classList
        });


    }
    componentDidMount() {

    }

    componentDidShow() { }

    componentDidHide() { }

    onReachBottom() {

    }

    onSubmit = async (event) => {
        console.log('submit=', this.state.data);
        const { data } = this.state;
        const { category, city, name, suspension} = data;
        try {
            await cloudFunction('student', {
                type: 'update',
                id: data._id,
                data: {
                    category, 
                    city, 
                    name, 
                    suspension, 
                    class:data.class
                }
            });
            Taro.showToast({
                title: '修改成功'
            })
        } catch (err) {
            Taro.showToast({
                title: '修改失败',
                icon: 'none'
            })
        }
    }

    changeClassName = (value) => {
        const { data } = this.state;
        data.name = value;
        this.setState({
            data
        })
    }

    changeCity = (e) => {
        const { data, cityList } = this.state;
        const idx = e.detail.value
        data.city = cityList[idx].name;
        this.setState({
            data
        })
    }
    changeCategory = (e) => {
        const { data, categoryList } = this.state;
        const idx = e.detail.value
        data.category = categoryList[idx].name;
        this.setState({
            data
        })


    }

    changeClass = (value) => {
        const { data } = this.state;
        data.class = value;
        this.setState({
            data
        })
    }

    changeXiuxue = (value) => {
        const { data } = this.state;
        data.suspension = value;
        this.setState({
            data
        })
    }
    render() {
        const { classList, cityList, categoryList, data } = this.state;
        return (
            <View className='class-edit'>
                <AtForm
                // onSubmit={this.onSubmit}
                >
                    <AtInput
                        name='className'
                        title='姓名'
                        type='text'
                        placeholder='输入姓名'
                        value={data.name}
                        onChange={this.changeClassName}
                    />
                    <Picker mode='selector' range={classList} rangeKey='name' onChange={this.changeClass}>
                        <AtInput
                            name='category'
                            title='班级'
                            type='text'
                            placeholder='请选择班级'
                            value={data.class}
                            readOnly
                        />
                    </Picker>
                    <Picker mode='selector' range={cityList} rangeKey='name' onChange={this.changeCity}>
                        <AtInput
                            name='city'
                            title='城市'
                            type='text'
                            placeholder='请选择城市'
                            value={data.city}
                            readOnly
                        />
                    </Picker>
                    <Picker mode='selector' range={categoryList} rangeKey='name' onChange={this.changeCategory}>
                        <AtInput
                            name='category'
                            title='学科'
                            type='text'
                            placeholder='请选择学科'
                            value={data.category}
                            readOnly
                        />
                    </Picker>
                    <AtSwitch border={false} checked={!!data.suspension} title='休学' onChange={this.changeXiuxue} />
                    <AtButton onClick={this.onSubmit}>提交</AtButton>
                </AtForm>
            </View>
        )
    }
}

export default Class

