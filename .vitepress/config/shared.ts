import { defineConfig } from "vitepress";
import { zhSearch } from "./zh";

export const shared = defineConfig({
    title: "Cocos",

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    ignoreDeadLinks: true,

    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Cocos Creator',
                items: [
                    { text: '手册文档', link: '/zh/' },
                    { text: 'API 参考', link: 'https://docs.cocos.com/creator/3.8/api/zh/' },
                ]
            },
            {
                text: 'Cocos2d-x',
                items: [
                    { text: '手册文档', link: 'https://docs.cocos.com/cocos2d-x/manual/zh' },
                    { text: 'API 参考', link: 'http://docs.cocos2d-x.org/api-ref/index.html' },
                ]
            },
            {
                text: '版本',
                items: [
                    { text: '3.7', link: 'https://docs.cocos.com/creator/3.7/zh' },
                    { text: '3.6', link: 'https://docs.cocos.com/creator/3.6/zh' },
                    { text: '3.5', link: 'https://docs.cocos.com/creator/3.5/zh' },
                    { text: '3.4', link: 'https://docs.cocos.com/creator/3.4/zh' },
                    { text: '3.3', link: 'https://docs.cocos.com/creator/3.3/zh' },
                    { text: '3.2', link: 'https://docs.cocos.com/creator/3.2/zh' },
                    { text: '3.1', link: 'https://docs.cocos.com/creator/3.1/zh' },
                    { text: '3.0', link: 'https://docs.cocos.com/creator/3.0/zh' },
                    { text: '2.4', link: 'https://docs.cocos.com/creator/2.4/zh' },
                    { text: '2.3', link: 'https://docs.cocos.com/creator/2.3/zh' },
                    { text: '2.2', link: 'https://docs.cocos.com/creator/2.2/zh' },
                    { text: '2.1', link: 'https://docs.cocos.com/creator/2.0/zh' },
                    { text: '2.0', link: 'https://docs.cocos.com/creator/2.0/zh' },
                    { text: '1.10', link: 'https://docs.cocos.com/creator/1.10/zh' },
                    { text: '1.9', link: 'https://docs.cocos.com/creator/1.9/zh' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/CosmoLau/cocos-docs-vitepress' }
        ],
        search: {
            provider: "local",
            options: {
                locales: { ...zhSearch }
            }
        }
    }
})