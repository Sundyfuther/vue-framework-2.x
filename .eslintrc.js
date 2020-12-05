module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],
  plugins: ["prettier"],
  parser: "vue-eslint-parser",
  settings: {
    // 解析import的资源路径，比如alias
    "import/resolver": {
      webpack: {
        config: "./node_modules/@vue/cli-service/webpack.config.js",
      },
    },
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",
  },
};
