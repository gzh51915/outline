import {useState} from 'react';
export function useStorage(name){
    const initData = JSON.parse(localStorage.getItem(name));
    let [value,setValue] = useState(initData);
    function set(data){
        setValue(data)
        
        if(typeof data === 'object'){
            data = JSON.stringify(data);
        }
        localStorage.setItem(name,data);
    }
    return [value,set];
}

export function useCookie(){
    
}