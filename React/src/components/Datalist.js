import React,{PureComponent} from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'

class Datalist extends PureComponent{
    static propTypes = {
        data:PropTypes.array,
    }
    static defaultProps = {
        data:[]
    }


    render(){
        const {renderFooter,data} = this.props;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>用户名</th>
                            <th>密码</th>
                            <th>注册时间</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length>0 ? 
                            data.map((item,idx)=><tr key={item.id}>
                                <td>{idx+1}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{moment(item.regtime).format('YYYY/MM/DD')}</td>
                            </tr>)
                            :
                            <tr><td colSpan={4}>暂无数据</td></tr>
                        }
                    </tbody>
                    {
                        // 条件渲染：三元运算
                        renderFooter ?
                        <tfoot>
                            <tr>
                                <td colSpan="4">
                                    {
                                       renderFooter 
                                    }
                                </td>
                            </tr>
                        </tfoot>
                        :
                        null
                    }
                </table>

            </div>
        )
    }
}

// props数据类型校验
// Datalist.propTypes = {
//     // data:PropTypes.array.isRequired
//     data:PropTypes.array,
//     age:function(props,propName,comName){
//         console.log('age=',props,propName,comName)
//         if(props[propName] < 18){
//             return new Error( `${propName} 必须大于等于18，你却给我 ${props[propName]}`);
//         }
//     }
// }

// // props默认值
// Datalist.defaultProps = {
//     data:[]
// }

export default Datalist