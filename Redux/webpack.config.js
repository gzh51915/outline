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
        contentBase: path.join(__dirname,'public'),
        compress:true, // 启动服务器压缩
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
                // exclude:'node_modules',
                include:path.join(__dirname,'src'),
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{
                                "legacy": true 
                            }],
                            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
                            ['babel-plugin-import',{
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }]
                        ]
                    }
                }]
            },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            }
        ]
    },

    // 插件
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/template.html',
            title:'GZH51915'
        })
    ]
}