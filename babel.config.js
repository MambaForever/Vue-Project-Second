module.exports = {
  presets: [  // babel的预设包
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [ // 配置babel的插件
    [  // 配置babel-plugin-component插件
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],

  ]
}
