import React,{Component,useState} from 'react';


// class MyComponent extends Component{
//     state = {
//         num:1
//     }
//     changeNum = ()=>{
//         this.setState({
//             num:this.state.num+1
//         })
//     }
//     render(){
//         const {num} = this.state;
//         return <div>

//         <button onClick={this.changeNum}>修改 {num}</button>
//         </div>
//     }
// }

const MyComponent = ()=>{
    console.log('state hook')
    // 当state有修改时，虽然执行的是MyComponent中所有的代码，但num拿到的永远是最新的状态
    const [num,changeNum] = useState(1);
    return <div>
        <button onClick={()=>{
            changeNum(num+1)
        }}>修改 {num}</button>
    </div>
}

export default MyComponent;