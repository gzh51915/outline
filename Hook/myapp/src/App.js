import React from 'react';

import UseState from './hooks/UseStateComponent';
import UseEffect from './hooks/UseEffectComponent';
import UseContext from './hooks/UseContextComponent';
import UseCallback from './hooks/UseCallbackComponent';
import UseMemo from './hooks/UseMemoComponent';
import UseReducer from './hooks/UseReducerComponent';

import MyContext from './context';

const user = {
  name:'laoxie',
  gender:'男',
  age:18
}

function App() {
  const [status,changeStatus] = React.useState(true)
  return (
    <div className="App">
      <MyContext.Provider value={user}>
        <UseState/>
        {
          status ? 
          <UseEffect/>
          :
          null
        }

        <button onClick={()=>{
          changeStatus(false);
        }}>隐藏</button>

        <UseContext/>
        <UseCallback/>
        <UseMemo/>
        <UseReducer/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
