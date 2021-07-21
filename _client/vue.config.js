module.exports = {
  devServer: {
    proxy: 'http://localhost:5000/',
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Apex Tracker';
      return args;
    });
  },
};
