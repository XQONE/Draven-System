const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    index: Path.resolve(__dirname, '../src/client/index.jsx'),
    login: Path.resolve(__dirname, '../src/client/page/login/Login.jsx'),
    grade: Path.resolve(__dirname, '../src/client/page/grade/Grade.jsx'),
    classroom: Path.resolve(__dirname, '../src/client/page/classroom/Classroom.jsx'),
    course: Path.resolve(__dirname, '../src/client/page/course/Course.jsx'),
    takecourse: Path.resolve(__dirname, '../src/client/page/takecourse/Takecourse.jsx'),
    bus: Path.resolve(__dirname, '../src/client/page/bus/Bus.jsx'),
    calendar: Path.resolve(__dirname, '../src/client/page/calendar/Calendar.jsx'),
    // vendor: ['react', 'react-dom'],
  },
  output: {
    filename: 'static/js/[name]-[hash].js', // 打包文件名
    path: Path.resolve(__dirname, '../public/draven'),
    publicPath: '/draven',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 编译后用来提取的loader
          use: [{ loader: 'css-loader', options: { minimize: true } }, 'sass-loader'], // 用来编译文件的loader
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 编译后用来提取的loader
          use: { loader: 'css-loader', options: { minimize: true } }, // 用来编译文件的loader
        }),
      },
    ],
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin('common'),
    new ExtractTextPlugin('static/css/[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'index'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'login/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'login'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'grade/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'grade'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'classroom/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'classroom'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'course/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'course'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'takecourse/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'takecourse'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'bus/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'bus'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'calendar/index.html',
      template: 'src/common/static/index.html',
      favicon: 'src/common/static/images/x-logo.png',
      chunks: ['common', 'calendar'],
      inject: true,
      minify: {},
      hash: false,
      cache: true,
    }),
    // new CompressionPlugin({
    //   test: /\.(js|css)/
    // })
  ],
};
