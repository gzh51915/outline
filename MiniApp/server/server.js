const express = require('express');
const axios = require('axios')

const app = express();

const config = {
    env:'qf-52690b',
    appid:'wx8cf6111b4ab000f2',
    secret:'af591fc52d16a3d7dce3efe122783c17'
}

app.get('/db/:functionName',async (req,res)=>{
    const {functionName} = req.params;
    // GET https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    // POST https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=ACCESS_TOKEN&env=ENV&name=FUNCTION_NAME

    const {data} = await axios({
        url:`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.appid}&secret=${config.secret}`
    });

    console.log(data)

    try{
        const result = await axios({
            method:'post',
            url:`https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${data.access_token}&env=${config.env}&name=${functionName}`,
            // data:JSON.stringify({
            //     name:'佛山',
            //     is_current:false
            // })
            data:JSON.stringify({
                "name":"拉萨",
                "is_current":true
            })
        })
        console.log(result);
        res.send(result.data);

    }catch(err){
        console.log(err);
        res.send(err);
    }
})

app.listen(1915,()=>{
    console.log('server runing')
})