const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSSFromVue = new ExtractTextPlugin('styles.css')
const extractCSSFromSASS = new ExtractTextPlugin('index.css')


module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
 
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          // vue-loader options go here
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ],
          loaders: {
            sass: extractCSSFromVue.extract({
              loader: 'css-loader!sass-loader!',
              fallbackLoader: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.scss$/,
        loader: extractCSSFromSASS.extract(['css','sass'])
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[build].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    extractCSSFromVue,
    extractCSSFromSASS
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000/'
      }
    }
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
