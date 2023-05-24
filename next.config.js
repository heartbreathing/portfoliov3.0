/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
 
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },
};