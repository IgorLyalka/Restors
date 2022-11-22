const path =require('path')

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname,'/Restors/Restaurant/js/up.js')
    },
    output: {
        path: path.resolve(__dirname,'Restaurant'),
        filename: 'up.js'
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname,'/Restors/Restaurant/html/index.html')
        }
    },
    module: {
        rules:[
            { 
            test:/\.sass$/,
            use:['style-loader','css-loader','sass-loader']
            }
        ]
    }
}