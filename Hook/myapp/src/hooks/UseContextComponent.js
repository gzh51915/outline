import React, { Component, useState, useEffect, useContext } from 'react';

import MyContext from '../context'

const MyComponent = () => {
    const user = useContext(MyContext);
    return <div>
        <h4>UseContext</h4>
        <ul>
            <li>姓名：{user.name}</li>
        </ul>
    </div>
}

export default MyComponent;