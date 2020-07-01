import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { View, Button, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './tabbar.scss'

class Tabbar extends Component {
    state = {
        menu: [
            { title: '首页', iconType: 'home', path: '/pages/index/index' },
            {
                title: '班级',
                iconType: 'list',
                path: '/pages/class/class'
            }],
        current:0
    }

    changeMenu = (idx)=>{
        console.log(idx);
        const {menu} = this.state;
        this.setState({
            current:idx
        });
        const path = menu[idx].path;
        Taro.navigateTo({
            url:path,
            success:()=>{
                
            }
        })
    }

    componentWillUnmount() { 
        

    }
    componentDidMount(){
        const {current} = this.props;
        if(current !== undefined){
            this.setState({
                current
            })

        }
    }

    componentDidShow() { }

    componentDidHide() { }

    

    render() {
        const { menu,current } = this.state;
        return (
            <View className='tabbar'>
                <AtTabBar
                    fixed
                    tabList={menu}
                    onClick={this.changeMenu}
                    current={current}
                />
            </View>
        )
    }
}

export default Tabbar

