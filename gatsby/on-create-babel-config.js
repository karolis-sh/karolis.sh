const eslint = require('../.eslintrc.json');

module.exports = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-module-resolver',
    options: {
      alias: eslint.settings['import/resolver']['babel-module'].alias,
    },
  });
};
