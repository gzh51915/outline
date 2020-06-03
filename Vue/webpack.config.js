const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // 入口
    entry:'./src/index.js',
    // 出口

    // 服务器
    devServer:{
        contentBase:path.join(__dirname,'src/public'),
        // proxy:{} 代理（正向代理和反响代理）
    },

    resolve:{
        alias:{
            // 'vue$':path.join(__dirname,'node_modules/vue/dist/vue.js')
            '@': path.join(__dirname,'src'),
            '~':path.join(__dirname,'src/components'),
        },
        extensions:['.js','.vue']
    },

    // 加载器
    module:{
        rules:[
            // 配置js加载器：babel
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader'
                }]
            },

            // 配置vue文件加载器
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },

            // 配置css加载器：css-loader, style-loader
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },

            // sass加载器
            {
                test:/\.s[ac]ss/,
                loader:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    // 插件
    plugins:[
        // 以tempalte.html文件作为模板，生成index.html
        new HtmlWebpackPlugin({
            template:'./src/template.html',
        }),


        // Vue-loader 15.x之后的版本都需要伴随 VueLoaderPlugin， 否则报错
        new VueLoaderPlugin(),
    ]
}