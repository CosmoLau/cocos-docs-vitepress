import { defineConfig } from "vitepress";

export const shared = defineConfig({
    title: "Cocos",

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    ignoreDeadLinks: true,

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/CosmoLau/cocos-docs-vitepress' }
        ],
    }
})