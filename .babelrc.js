module.exports = {
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "~components": "./src/app/components",
          "~screens": "./src/app/screens",
          "~config": "./src/config",
          "~constants": "./src/constants",
          "~redux": "./src/redux",
          "~services": "./src/services",
          '~assets': './src/app/assets',
          "~utils": "./src/utils",
          "~serializer": "./src/serializer"
        }
      }
    ]
  ],
  "presets": [
    [
      "@babel/preset-react",
      { "throwIfNamespace": false }
    ]
  ]
}
