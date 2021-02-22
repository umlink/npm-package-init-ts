module.exports = {
  moduleFileExtensions: ['js'],
  testMatch: ["<rootDir>/test/**/*.(spec|test).js"],
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.js$": "babel-jest"
  },
  testPathIgnorePatterns: [ "/node_modules/" ]
};
