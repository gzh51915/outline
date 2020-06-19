
import React from 'react';

import {useStorage} from '../utils/hooks';

function UserDefine(){
    const [user,changeUser] = useStorage('user');// 获取到localStorage中的user并转成js对象
    // {name:'laoxie',age:18}
    console.log('userdefined')
    return <div>
        姓名：{
            user.name
        }
        <p>
            年龄：{user.age}
        </p>
        <p>
            性别：{user.gender}
        </p>
        <button onClick={()=>{
            changeUser({name:'laoxie',age:18,gender:'男'})
        }}>更改用户</button>
    </div>
}

export default UserDefine;