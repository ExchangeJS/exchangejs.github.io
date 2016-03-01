const webpack = require('webpack');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
const definePlugin = new webpack.DefinePlugin({
  __DEV__: true,
  __VERSION__: Date.now()
});

module.exports = {
    entry: {
        index: "./src/index.js",
        worker: "./src/worker.js"
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    plugins: [definePlugin]
};
