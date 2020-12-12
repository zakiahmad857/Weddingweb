module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Alfarra & Gamma - Wedding Ceremony';
      return args;
    });
  }
};
