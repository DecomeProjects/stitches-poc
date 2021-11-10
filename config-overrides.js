const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "@Assets": path.resolve(__dirname, "src/assets/"),
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Pages": path.resolve(__dirname, "src/pages/"),
      "@Services": path.resolve(__dirname, "src/services/"),
      "@Styles": path.resolve(__dirname, "src/styles/"),
      "@Utils": path.resolve(__dirname, "src/utils/")
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.d.ts']
  };
  return config;
};
