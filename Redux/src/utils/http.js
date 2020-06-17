
export const apiurl = process.env.NODE_ENV === 'development' ? 'http://localhost:1915/api' : 'http://52.171.22.68';

const get = async (url,data,params={})=>{
    let query = ''
    for(let key in data){// {} => key=val&key=val
        query += `${key}=${data[key]}}&`
    }
    query = query.slice(0,-1);
    if(query.length>0){
        url += '?' + query;
    }
    const res = await fetch(apiurl + url,{
        ...params
    });
    return res.json();
}


export default {
    get
}