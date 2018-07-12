module.exports = {
    entry:'./src/index.js',//输入文件
    output:{
        path:__dirname,
        filename:'./release/bundle.js'//输出文件
    },
    module:{
        rules:[{   //规则选择babel的解析
            test:/\.js?$/,
            exclude:/(node_modules)/,
            loader:'babel-loader'
        }]
    }
}