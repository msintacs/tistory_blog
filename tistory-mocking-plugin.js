// tistory-mocking-plugin.js
class TistoryMockingPlugin {
  constructor(options = {}) {
    this.mockData = {
      
    };
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('TistoryMockingPlugin', (compilation) => {
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      const hooks = HtmlWebpackPlugin.getHooks(compilation);
      
      hooks.beforeEmit.tapAsync('TistoryMockingPlugin', (data, callback) => {
        let htmlContent = data.html;
        
        // 치환자를 모킹 데이터로 대체
        Object.keys(this.mockData).forEach(key => {
          const placeholder = `[##_${key}_##]`;
          htmlContent = htmlContent.replace(new RegExp(placeholder, 'g'), this.mockData[key]);
        });
        
        data.html = htmlContent;
        callback(null, data);
      });
    });
  }
}

module.exports = TistoryMockingPlugin;