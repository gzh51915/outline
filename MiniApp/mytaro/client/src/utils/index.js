import Taro from '@tarojs/taro';

export const goto = (url, data = {}, redirect = false) => {
    // {a:10,b:20} -> url + ? 'a=10&b=20'
    url += url.includes('?') ? '&' : '?'
    for (let key in data) {
        url += `${key}=${data[key]}&`
    }

    url = url.slice(0, -1);

    Taro[redirect ? 'redirectTo' : 'navigateTo']({ url })
}

export const cloudFunction = async function(name,data){
    const {result} = await Taro.cloud.callFunction({
        name,
        data
    });

    return result;
}

export default {
    goto,
    cloudFunction
}