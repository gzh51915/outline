import React, { Component,PureComponent } from 'react'


class Login extends Component {
    login = ()=>{
        const user = {
            "_id":"5d9c0a355a1736373c7fdcdb",
            "username":"laoxie",
            "regtime":1570507317652,
            "age":18,
            "gender":null,
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxhb3hpZSIsImlhdCI6MTU3MzUyNDE4MywiZXhwIjoxNTczNTMxMzgzfQ.AtwQh5D1ofNwKPgXEx6aPNKaHn0EWvmY_8XiEDNgJ90"
        }
        localStorage.setItem('user',JSON.stringify(user))
    }
    
    render() {
        return (
            <div>
                Login
                <button onClick={this.login}>登录</button>
            </div>
        )
    }
}

export default Login;