/**
 * Created by hong on 2018/9/4.
 */

const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],   config);
  config = rewireLess.withLoaderOptions({ modifyVars: { "@primary-color": "#1DA57A" } })(config, env);
  return config;
};
