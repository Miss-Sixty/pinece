import { defineConfig, type DefaultTheme } from 'vitepress'


export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',

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

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  }
})

