const glob = require('glob');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const list = {};
/* list = {
    card:'./components/lib/card/index.js',
    demo:'./components/lib/demo/index.js'
} */
async function makeList(dirPath,list){
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log(`${dirPath}/**/index.js}`);
    console.log('files',files);
    for(let file of files){
        // const name = file.split('/')[2];
        const name = file.split(/[/.]/)[2];
        console.log('name',name);
        list[name] = `./${file}`
    }
    console.log('list',list);
}

makeList('components/lib',list);

module.exports = {
    entry:list,
    mode:"development",
    output:{
        filename:'[name].umd.js',  //card.umd.js
        path:path.resolve(__dirname,'dist'),
        library:'mui',
        libraryTarget:'umd'
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            }
        ]
    }
}