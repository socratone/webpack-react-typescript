const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 빌드할 때마다 dist 폴더의 모든 파일을 삭제한다.
  },

  // Webpack의 출력물에서 디버깅을 하기위해 소스 맵을 허용합니다.
  // devtool: 'source-map',

  resolve: {
    // 확인 가능한 확장자로 '.ts' 와 '.tsx' 를 추가합니다.
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // 모든 '.js' 출력 파일은 'source-map-loader'에서 다시 처리한 소스 맵이 있습니다.
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   loader: 'source-map-loader',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', // 이 파일을 이용해서 dist/index.html을 만든다.
      inject: 'body', // body 안에서 bundle.js를 불러온다.
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true, // 자동으로 브라우저를 띄운다.
  },
};
