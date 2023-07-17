import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: true,
    lang: "zh-CN",
    title: "Cocos",
    description: "Cocos Creator",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Cocos Creator',
                items: [
                    { text: '手册文档', link: '/zh/manual/' },
                    { text: 'API 参考', link: '/' },
                ]
            },
            {
                text: 'Cocos Creator 3D',
                items: [
                    { text: '手册文档', link: '/zh/manual/' },
                    { text: 'API 参考', link: '/' },
                ]
            },
            {
                text: 'Cocos2d-x',
                items: [
                    { text: '手册文档', link: '/zh/manual/' },
                    { text: 'API 参考', link: '/' },
                ]
            },
            {
                text: 'version',
                items: [
                    { text: '3.7', link: 'https://docs.cocos.com/creator/3.7/manual/zh' },
                    { text: '3.6', link: 'https://docs.cocos.com/creator/3.6/manual/zh' },
                    { text: '3.5', link: 'https://docs.cocos.com/creator/3.5/manual/zh' },
                    { text: '3.4', link: 'https://docs.cocos.com/creator/3.4/manual/zh' },
                    { text: '3.3', link: 'https://docs.cocos.com/creator/3.3/manual/zh' },
                    { text: '3.2', link: 'https://docs.cocos.com/creator/3.2/manual/zh' },
                    { text: '3.1', link: 'https://docs.cocos.com/creator/3.1/manual/zh' },
                    { text: '3.0', link: 'https://docs.cocos.com/creator/3.0/manual/zh' },
                    { text: '2.4', link: 'https://docs.cocos.com/creator/2.4/manual/zh' },
                    { text: '2.3', link: 'https://docs.cocos.com/creator/2.3/manual/zh' },
                    { text: '2.2', link: 'https://docs.cocos.com/creator/2.2/manual/zh' },
                    { text: '2.1', link: 'https://docs.cocos.com/creator/2.0/manual/zh' },
                    { text: '2.0', link: 'https://docs.cocos.com/creator/2.0/manual/zh' },
                    { text: '1.10', link: 'https://docs.cocos.com/creator/1.10/manual/zh' },
                    { text: '1.9', link: 'https://docs.cocos.com/creator/1.9/manual/zh' },
                ]
            }
        ],

        sidebar: [
            {
                text: '简介',
                items: [
                    { text: 'Introduction', link: '/zh/manual/' },
                    { text: '关于 Cocos Creator', link: '/zh/manual/getting-started/introduction/' },
                    { text: '获取帮助和支持', link: '/zh/manual/getting-started/support.md' },
                ]
            },
            {
                text: '基础知识',
                items: [
                    {
                        text: '新手上路',
                        collapsed: true,
                        link: '/zh/manual/getting-started/index.md',
                        items: [
                            { text: '安装和启动', link: '/zh/manual/getting-started/install/index.md' },
                            { text: '使用 Dashboard', link: '/zh/manual/getting-started/dashboard/index.md' },
                            { text: 'Hello World!', link: '/zh/manual/getting-started/helloworld/index.md' },
                            { text: '项目结构', link: '/zh/manual/getting-started/project-structure/index.md' },
                        ]
                    },
                    {
                        text: '编辑器界面',
                        collapsed: true,
                        link: '/zh/manual/editor/index.md',
                        items: [
                            { text: '场景编辑器', link: '/zh/manual/editor/scene/index.md' },
                            { text: '层级管理器', link: '/zh/manual/editor/hierarchy/index.md' },
                            { text: '资源管理器', link: '/zh/manual/editor/assets/index.md' },
                            { text: '属性检查器', link: '/zh/manual/editor/inspector/index.md' },
                            { text: '控制台', link: '/zh/manual/editor/console/index.md' },
                            { text: '偏好设置', link: '/zh/manual/editor/preferences/index.md' },
                            { text: '项目设置', link: '/zh/manual/editor/project/index.md' },
                            { text: '主菜单', link: '/zh/manual/editor/mainMenu/index.md' },
                            { text: '工具栏', link: '/zh/manual/editor/toolbar/index.md' },
                            { text: '编辑器布局', link: '/zh/manual/editor/editor-layout/index.md' },
                            { text: '预览调试', link: '/zh/manual/editor/preview/index.md' },
                        ]
                    },
                    {
                        text: '术语',
                        link: '/zh/manual/glossary/index.md',
                    }
                ]
            },
            {
                text: '示例和教程',
                items: [
                    {
                        text: '快速上手：制作第一个 2D 游戏',
                        collapsed: true,
                        link: '/zh/manual/getting-started/first-game-2d/index.md',
                        items: [
                            { text: '监听触摸事件', link: '/zh/manual/getting-started/first-game-2d/touch.md' },
                        ]
                    },
                    {
                        text: '快速上手：制作第一个 3D 游戏',
                        collapsed: true,
                        link: '/zh/manual/getting-started/first-game/index.md',
                        items: [
                            { text: '进阶篇 - 添加阴影、光照和骨骼动画', link: '/zh/manual/getting-started/first-game/advance.md' },
                        ]
                    },
                    {
                        text: '示例与教程',
                        link: '/zh/manual/cases-and-tutorials/index.md'
                    }
                ]
            },
            {
                text: '工作流',
                items: [
                    {
                        text: '升级指南',
                        collapsed: true,
                        link: '/zh/manual/release-notes/index.md',
                        items: [
                            { text: 'v3.0 升级指南', link: '/zh/manual/release-notes/upgrade-guide-v3.0.md' },
                            { text: 'v3.0 材质升级指南', link: '/zh/manual/material-system/effect-2.x-to-3.0.md' },
                            { text: 'v3.1 材质升级指南', link: '/zh/manual/material-system/Material-upgrade-documentation-for-v3.0-to-v3.1.md' },
                            { text: 'v3.3 动画剪辑数据升级指南', link: '/zh/manual/animation/animation-clip-migration-3.3.x.md' },
                            { text: 'v3.5 材质升级指南', link: '/zh/manual/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md' },
                            { text: '资源分包升级指南', link: '/zh/manual/asset/subpackage-upgrade-guide.md' },
                            { text: '资源管理模块升级指南', link: '/zh/manual/asset/asset-manager-upgrade-guide.md' },
                            { text: 'v3.5 已构建工程升级指南', link: '/zh/manual/engine/template/native-upgrade-to-v3.5.md' },
                            { text: 'v3.6 已构建工程升级指南', link: '/zh/manual/engine/template/native-upgrade-to-v3.6.md' },
                            { text: 'v3.6 构建模板与 settings.json 升级指南', link: '/zh/manual/release-notes/build-template-settings-upgrade-guide-v3.6.md' },
                            { text: 'Cocos Creator 3.6 材质升级指南', link: '/zh/manual/material-system/effect-upgrade-documentation-for-v3.5-to-v3.6.md' },
                            { text: '升级指南：粒子从 v3.5.x 升级到 v3.6.0', link: '/zh/manual/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md' },
                        ]
                    },
                    {
                        text: '场景制作',
                        collapsed: true,
                        link: '/zh/manual/concepts/scene/index.md',
                        items: [
                            { text: '场景资源', link: '/zh/manual/asset/scene.md' },
                            { text: '节点和组件', link: '/zh/manual/concepts/scene/node-component.md' },
                            { text: '坐标系和节点变换', link: '/zh/manual/concepts/scene/coord.md' },
                            { text: '节点层级和渲染顺序', link: '/zh/manual/concepts/scene/node-tree.md' },
                            { text: '使用场景编辑器搭建场景', link: '/zh/manual/concepts/scene/scene-editing.md' },
                            { text: '多层次细节', link: '/zh/manual/editor/rendering/lod.md' },
                        ]
                    },
                    {
                        text: '资源系统',
                        collapsed: true,
                        link: '/zh/manual/asset/index.md',
                        items: [
                            { text: '资源工作流', link: '/zh/manual/asset/asset-workflow.md' },
                            {
                                text: '图像资源',
                                collapsed: true,
                                link: '/zh/manual/asset/image.md',
                                items: [
                                    { text: '纹理贴图资源', link: '/zh/manual/asset/texture.md' },
                                    {
                                        text: '精灵帧资源',
                                        collapsed: true,
                                        link: '/zh/manual/asset/sprite-frame.md',
                                        items: [
                                            { text: '图像资源的自动剪裁', link: '/zh/manual/ui-system/components/engine/trim.md' }
                                        ]
                                    },
                                    { text: '立方体贴图资源', link: '/zh/manual/asset/texture-cube.md' },
                                    { text: '图集资源', link: '/zh/manual/asset/atlas.md' },
                                    { text: '自动图集资源', link: '/zh/manual/asset/auto-atlas.md' },
                                    { text: '艺术数字资源', link: '/zh/manual/asset/label-atlas.md' },
                                ]
                            },
                            { text: '预制资源', link: '/zh/manual/asset/prefab.md' },
                            { text: '字体资源', link: '/zh/manual/asset/prefab.md' },
                            { text: '音频资源', link: '/zh/manual/asset/audio.md' },
                            { 
                                text: '材质资源', 
                                collapsed: true,
                                link: '/zh/manual/asset/material.md',
                                items: [
                                    { text: 'FBX 智能材质导入', link: '/zh/manual/importer/materials/fbx-materials.md' }
                                ]
                            },
                            { 
                                text: '模型资源', 
                                collapsed: true,
                                link: '/zh/manual/asset/model/mesh.md',
                                items: [
                                    { text: '从第三方工具导出模型资源', link: '/zh/manual/asset/model/dcc-export-mesh.md' },
                                    { text: '从 3ds Max 中导出 FBX 模型资源', link: '/zh/manual/asset/model/max-export-fbx.md' },
                                    { text: '从 Maya 中导出 FBX 模型资源', link: '/zh/manual/asset/model/maya-export-fbx.md' },
                                    { text: 'glTF 模型', link: '/zh/manual/asset/model/glTF.md' },
                                    { text: '程序化创建网格', link: '/zh/manual/asset/model/scripting-mesh.md' },
                                ] 
                            },
                            { text: 'Spine 骨骼动画资源', link: '/zh/manual/asset/spine.md' },
                            { text: 'DragonBones 骨骼动画资源', link: '/zh/manual/asset/dragonbones.md' },
                            { text: 'TiledMap 瓦片图资源', link: '/zh/manual/asset/tiledmap.md' },
                            { text: 'JSON 资源', link: '/zh/manual/asset/json.md' },
                            { text: '文本资源', link: '/zh/manual/asset/text.md' },
                        ]
                    },
                    {
                        text: '脚本指南及事件机制',
                        collapsed: true,
                        link: '/zh/manual/scripting/index.md',
                        items: [
                            { text: '编程语言支持', link: '/zh/manual/scripting/language-support.md' },
                            {
                                text: '脚本基础',
                                collapsed: true,
                                link: '/zh/manual/scripting/script-basics.md',
                                items: [
                                    { text: '创建脚本', link: '/zh/manual/scripting/setup.md' },
                                    { text: '配置代码编辑环境', link: '/zh/manual/scripting/coding-setup.md' },
                                    { text: '脚本运行环境', link: '/zh/manual/scripting/basic.md' },
                                    { text: '装饰器使用', link: '/zh/manual/scripting/decorator.md' },
                                    { text: '属性参数参考', link: '/zh/manual/scripting/reference/attributes.md' },
                                    { text: '生命周期回调', link: '/zh/manual/scripting/life-cycle-callbacks.md' },
                                    { text: '开发注意事项', link: '/zh/manual/scripting/readonly.md' },
                                ]
                            },
                            {
                                text: '脚本使用',
                                collapsed: true,
                                link: '/zh/manual/scripting/usage.md',
                                items: [
                                    { text: '访问节点和其他组件', link: '/zh/manual/scripting/access-node-component.md' },
                                    { text: '常用节点和组件接口', link: '/zh/manual/scripting/basic-node-api.md' },
                                    { text: '创建和销毁节点', link: '/zh/manual/scripting/create-destroy.md' },
                                    { text: '使用计时器', link: '/zh/manual/scripting/scheduler.md' },
                                    { text: '组件和组件执行顺序', link: '/zh/manual/scripting/component.md' },
                                    { text: '加载和切换场景', link: '/zh/manual/scripting/scene-managing.md' },
                                    { text: '获取和加载资源', link: '/zh/manual/scripting/load-assets.md' },
                                    { text: 'tsconfig 配置', link: '/zh/manual/scripting/tsconfig.md' },
                                ]
                            },
                            { text: '脚本进阶', link: '/zh/manual/scripting/reference-class.md' },
                        ]
                    }
                ]
            },
            {
                text: 'jsb',
                link: '/zh/manual/advanced-topics/jsb-manual-binding',
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],


    },

    // i18n 国际化配置
    locales: {
        root: {
            label: "简体中文",
            lang: "zh-CN",
        },
        en: {
            label: "English",
            lang: "en-US",
            link: "/en",
        }
    },
})
