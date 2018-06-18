exports.modifyWebpackConfig = ({ config, stage }) => {
  const timestamp = Date.now();
  const prefix = '__static';
  switch (stage) {
    case 'build-javascript':
      config.merge({
        output: {
          filename: `${prefix}-[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `${prefix}-[name]-${timestamp}-[chunkhash].js`,
        },
      });
      break;
    case 'build-css':
      config.merge({
        output: {
          filename: `${prefix}-[name]-${timestamp}-[chunkhash].css`,
          chunkFilename: `${prefix}-[name]-${timestamp}-[chunkhash].css`,
        },
      });
      break;
    default:
      break;
  }
  return config;
};
