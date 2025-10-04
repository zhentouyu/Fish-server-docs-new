import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fish-docs",
  description: "A docs for Fish's server",
  base: '/docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'Minecraft', link: '/mc/' },
      { text: '回到主站', link: 'https://xiyu.943689.top' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '网页游览指南',
          items: [
            { text: 'Fish网页游览指南', link: '/guide/' },
            { text: '初来乍到', link: '/guide/first' },
            { text: '公告', link: '/guide/notice' },
            { text: '个人中心', link: '/guide/login' },
            { text: '实时热点', link: '/guide/hot' },
            { text: '文件储存点', link: '/guide/file' },
            { text: 'xc', link: '/guide/xc' },
            { text: 'Minecraft', link: '/guide/mc' }
          ]
        }
      ],

      '/mc/': [
        {
          text: 'Minecraft',
          items: [
            { text: 'CraftXiyu游玩指南', link: '/mc/' },
            { text: 'CraftXiyu游玩须知', link: '/mc/notice' },
            { text: 'CraftXiyu加入简略步骤', link: '/mc/join' },
            { text: 'CraftXiyu加入详细步骤', link: '/mc/fullstep' },
            { text: 'CraftXiyu玩家命令列表', link: '/mc/command' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhentouyu/Fish-server-docs-new' }
    ],

    editLink: {
      pattern: 'https://github.com/zhentouyu/Fish-server-docs-new/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  lastUpdated: true
})
