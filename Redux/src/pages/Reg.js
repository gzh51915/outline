import React, { Component,PureComponent } from 'react'

// 传统引入方式
// import {Row,Col} from 'antd';

// 按需引入
// import Row from 'antd/es/row/index'
// import 'antd/es/row/style/css'

// import Col from 'antd/es/col/index'
// import 'antd/es/col/style/css'

// babel-plugin-import插件代劳
import {Row,Col} from 'antd';


class Reg extends Component {
    
    render() {
        console.log('Reg',this.props)
        return (
            <div>
                Reg
            </div>
        )
    }
}

export default Reg;