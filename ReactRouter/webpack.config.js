const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// commonJS模块
module.exports = {
    // 入口
    entry:'./src/index.js',

    // 出口 dist
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].bundle.[hash:5].js',
        // publicPath:'/client'
    },

    // 服务器
    devServer:{
        contentBase: path.join(__dirname,'public'),
        host:'0.0.0.0'
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
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{
                                "legacy": true 
                            }],
                            ['@babel/plugin-proposal-class-properties',{ "loose": true }],
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }]
            },
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.(jpe?g|png|gif)$/i,
                use:{
                    loader:'url-loader',
                    options:{
                        limit: 10000, // 图片小于10k，转成base64编码
                        name: 'img/[name].[hash:5].[ext]'
                    }
                }
            }
        ]
    },

    // 插件
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/template.html'
        }),
        
        // 清除dist输出文件夹
        new CleanWebpackPlugin()
    ]
}