const path = require('path');

module.exports = function override(config, env) {
    // 添加别名
    // config.resolve.alias['@'] = path.join(__dirname,'./src/')
    Object.assign(config.resolve.alias,{
        '@':path.join(__dirname,'./src/'),
        '~':path.join(__dirname,'./src/components')
    });

    // if(!config.devServer){
    //     config.devServer = {}
    // }
    // config.devServer.host = '0.0.0.0';
    
    console.log('webpackConfig',config);
    return config;
}