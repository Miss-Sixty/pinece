import { defineConfig, type DefaultTheme } from 'vitepress'


export const en = defineConfig({
  lang: 'en-US',
  description: '将浏览器书签转换为目录网站',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide' }
    ],

    sidebar: [
      {
        items: [
          { text: '介绍', link: '/guide' },
        ]
      },
      {
        text: '开始使用',
        items: [
          { text: '部署', link: '/deploy' },
          { text: '部署1', link: '/api-examples' },
          { text: '部署2', link: '/document' },
        ]
      }
    ],
  }
})



