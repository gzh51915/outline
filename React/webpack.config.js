const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// commonJS模块
module.exports = {
    // 入口
    entry:{
        app:'./src/index.js',
    },

    // 出口

    // 服务器
    devServer:{
        contentBase: path.join(__dirname,'public')
    },

    // 其他
    resolve:{
        alias:{

        }
    },

    // 加载器loader
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        // plugins:[]
                    }
                }]
            }
        ]
    },

    // 插件
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/template.html'
        })
    ]
}