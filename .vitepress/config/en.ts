import { DefaultTheme, defineConfig } from "vitepress";

export const en = defineConfig({
    lang: 'en-US',
    description: 'Cocos',

    themeConfig: {
        nav: nav(),

        sidebar: {

        },

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

    ]
}