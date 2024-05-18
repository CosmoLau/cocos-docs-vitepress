import { DefaultTheme, defineConfig } from "vitepress";
import { sidebarFromGitbook } from "./enToc";

export const en = defineConfig({
    lang: 'en-US',
    description: 'Cocos',

    themeConfig: {
        nav: nav(),

        sidebar: sidebar(),

        editLink: {
            pattern: '',
            text: ''
        },

        footer: {

        },
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        { text: 'Home', link: '/en' },
        {
            text: 'Cocos Creator',
            items: [
                { text: 'Manual', link: '/en/' },
                { text: 'API Ref', link: 'https://docs.cocos.com/creator/3.8/api/zh/' },
            ]
        },
        {
            text: 'Cocos2d-x',
            items: [
                { text: 'Manual', link: 'https://docs.cocos.com/cocos2d-x/manual/zh' },
                { text: 'API Ref', link: 'http://docs.cocos2d-x.org/api-ref/index.html' },
            ]
        },
        {
            text: 'version',
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
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return sidebarFromGitbook
}