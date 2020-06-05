import React from 'react';

import Todolist from './components/Todolist'
import Datalist from './components/Datalist'
import Home from './pages/Home';

const datalist = [
    {
        id:1,
        username:'laoxie',
        password:123456,
        regtime:Date.now()
    },
    {
        id:2,
        username:'小谢',
        password:12345,
        regtime:Date.now()+100
    },
    {
        id:3,
        username:'志玲',
        password:1234,
        regtime:Date.now()+1000
    },
    {
        id:4,
        username:'贾玲',
        password:1234,
        regtime:Date.now()+2000
    }
]

function App(){
    return (
        // React.createElement('div')
        <div> 
            App

            <Todolist/>

            <Home a={10}/>

            <Datalist data={datalist} age={19}/>
        </div>
    )
}

export default App;