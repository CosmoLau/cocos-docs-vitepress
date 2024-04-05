import { DefaultTheme } from 'vitepress';
export const sidebarFromGitbook: DefaultTheme.SidebarItem[] = [
    {
        "text": "简介",
        "items": [
            {
                "text": "关于 Cocos Creator",
                "collapsed": true,
                "link": "/zh/getting-started/introduction/index.md"
            },
            {
                "text": "获取帮助和支持",
                "collapsed": true,
                "link": "/zh/getting-started/support.md"
            }
        ]
    },
    {
        "text": "基础知识",
        "items": [
            {
                "text": "新手上路",
                "link": "/zh/getting-started/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "安装和启动",
                        "collapsed": true,
                        "link": "/zh/getting-started/install/index.md"
                    },
                    {
                        "text": "使用 Dashboard",
                        "collapsed": true,
                        "link": "/zh/getting-started/dashboard/index.md"
                    },
                    {
                        "text": "Hello World!",
                        "collapsed": true,
                        "link": "/zh/getting-started/helloworld/index.md"
                    },
                    {
                        "text": "项目结构",
                        "collapsed": true,
                        "link": "/zh/getting-started/project-structure/index.md"
                    }
                ]
            },
            {
                "text": "编辑器界面",
                "link": "/zh/editor/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "场景编辑器",
                        "collapsed": true,
                        "link": "/zh/editor/scene/index.md"
                    },
                    {
                        "text": "层级管理器",
                        "collapsed": true,
                        "link": "/zh/editor/hierarchy/index.md"
                    },
                    {
                        "text": "资源管理器",
                        "collapsed": true,
                        "link": "/zh/editor/assets/index.md"
                    },
                    {
                        "text": "属性检查器",
                        "collapsed": true,
                        "link": "/zh/editor/inspector/index.md"
                    },
                    {
                        "text": "控制台",
                        "collapsed": true,
                        "link": "/zh/editor/console/index.md"
                    },
                    {
                        "text": "偏好设置",
                        "collapsed": true,
                        "link": "/zh/editor/preferences/index.md"
                    },
                    {
                        "text": "项目设置",
                        "collapsed": true,
                        "link": "/zh/editor/project/index.md"
                    },
                    {
                        "text": "主菜单",
                        "collapsed": true,
                        "link": "/zh/editor/mainMenu/index.md"
                    },
                    {
                        "text": "工具栏",
                        "collapsed": true,
                        "link": "/zh/editor/toolbar/index.md"
                    },
                    {
                        "text": "编辑器布局",
                        "collapsed": true,
                        "link": "/zh/editor/editor-layout/index.md"
                    },
                    {
                        "text": "预览调试",
                        "collapsed": true,
                        "link": "/zh/editor/preview/index.md"
                    }
                ]
            },
            {
                "text": "术语",
                "collapsed": true,
                "link": "/zh/glossary/index.md"
            },
            {
                "text": "Unity 开发者快速入门指南",
                "collapsed": true,
                "link": "/zh/guide/unity/index.md"
            }
        ]
    },
    {
        "text": "示例和教程",
        "items": [
            {
                "text": "快速上手：制作第一个 2D 游戏",
                "link": "/zh/getting-started/first-game-2d/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "监听触摸事件",
                        "collapsed": true,
                        "link": "/zh/getting-started/first-game-2d/touch.md"
                    }
                ]
            },
            {
                "text": "快速上手：制作第一个 3D 游戏",
                "link": "/zh/getting-started/first-game/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "进阶篇 - 添加阴影、光照和骨骼动画",
                        "collapsed": true,
                        "link": "/zh/getting-started/first-game/advance.md"
                    }
                ]
            },
            {
                "text": "示例与教程",
                "collapsed": true,
                "link": "/zh/cases-and-tutorials/index.md"
            }
        ]
    },
    {
        "text": "工作流",
        "items": [
            {
                "text": "升级指南",
                "link": "/zh/release-notes/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "v3.0 升级指南",
                        "collapsed": true,
                        "link": "/zh/release-notes/upgrade-guide-v3.0.md"
                    },
                    {
                        "text": "v3.0 材质升级指南",
                        "collapsed": true,
                        "link": "/zh/material-system/effect-2.x-to-3.0.md"
                    },
                    {
                        "text": "v3.1 材质升级指南",
                        "collapsed": true,
                        "link": "/zh/material-system/Material-upgrade-documentation-for-v3.0-to-v3.1.md"
                    },
                    {
                        "text": "v3.3 动画剪辑数据升级指南",
                        "collapsed": true,
                        "link": "/zh/animation/animation-clip-migration-3.3.x.md"
                    },
                    {
                        "text": "v3.5 材质升级指南",
                        "collapsed": true,
                        "link": "/zh/material-system/effect-upgrade-documentation-for-v3.4.2-to-v3.5.md"
                    },
                    {
                        "text": "资源分包升级指南",
                        "collapsed": true,
                        "link": "/zh/asset/subpackage-upgrade-guide.md"
                    },
                    {
                        "text": "资源管理模块升级指南",
                        "collapsed": true,
                        "link": "/zh/asset/asset-manager-upgrade-guide.md"
                    },
                    {
                        "text": "v3.5 已构建工程升级指南",
                        "collapsed": true,
                        "link": "/zh/engine/template/native-upgrade-to-v3.5.md"
                    },
                    {
                        "text": "v3.6 已构建工程升级指南",
                        "collapsed": true,
                        "link": "/zh/engine/template/native-upgrade-to-v3.6.md"
                    },
                    {
                        "text": "v3.6 构建模板与 settings.json 升级指南",
                        "collapsed": true,
                        "link": "/zh/release-notes/build-template-settings-upgrade-guide-v3.6.md"
                    },
                    {
                        "text": "Cocos Creator 3.6 材质升级指南",
                        "collapsed": true,
                        "link": "/zh/material-system/effect-upgrade-documentation-for-v3.5-to-v3.6.md"
                    },
                    {
                        "text": "升级指南：粒子从 v3.5.x 升级到 v3.6.0",
                        "collapsed": true,
                        "link": "/zh/particle-system/particle-upgrade-documentation-for-v3.5-to-v3.6.md"
                    }
                ]
            },
            {
                "text": "场景制作",
                "link": "/zh/concepts/scene/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "场景资源",
                        "collapsed": true,
                        "link": "/zh/asset/scene.md"
                    },
                    {
                        "text": "节点和组件",
                        "collapsed": true,
                        "link": "/zh/concepts/scene/node-component.md"
                    },
                    {
                        "text": "坐标系和节点变换",
                        "collapsed": true,
                        "link": "/zh/concepts/scene/coord.md"
                    },
                    {
                        "text": "节点层级和渲染顺序",
                        "collapsed": true,
                        "link": "/zh/concepts/scene/node-tree.md"
                    },
                    {
                        "text": "使用场景编辑器搭建场景",
                        "collapsed": true,
                        "link": "/zh/concepts/scene/scene-editing.md"
                    },
                    {
                        "text": "多层次细节",
                        "collapsed": true,
                        "link": "/zh/editor/rendering/lod.md"
                    }
                ]
            },
            {
                "text": "资源系统",
                "link": "/zh/asset/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "资源工作流",
                        "collapsed": true,
                        "link": "/zh/asset/asset-workflow.md"
                    },
                    {
                        "text": "图像资源",
                        "link": "/zh/asset/image.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "纹理贴图资源",
                                "collapsed": true,
                                "link": "/zh/asset/texture.md"
                            },
                            {
                                "text": "精灵帧资源",
                                "link": "/zh/asset/sprite-frame.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "图像资源的自动剪裁",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/trim.md"
                                    }
                                ]
                            },
                            {
                                "text": "立方体贴图资源",
                                "collapsed": true,
                                "link": "/zh/asset/texture-cube.md"
                            },
                            {
                                "text": "图集资源",
                                "collapsed": true,
                                "link": "/zh/asset/atlas.md"
                            },
                            {
                                "text": "自动图集资源",
                                "collapsed": true,
                                "link": "/zh/asset/auto-atlas.md"
                            },
                            {
                                "text": "艺术数字资源",
                                "collapsed": true,
                                "link": "/zh/asset/label-atlas.md"
                            }
                        ]
                    },
                    {
                        "text": "预制资源",
                        "collapsed": true,
                        "link": "/zh/asset/prefab.md"
                    },
                    {
                        "text": "字体资源",
                        "collapsed": true,
                        "link": "/zh/asset/font.md"
                    },
                    {
                        "text": "音频资源",
                        "collapsed": true,
                        "link": "/zh/asset/audio.md"
                    },
                    {
                        "text": "材质资源",
                        "link": "/zh/asset/material.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "FBX 智能材质导入",
                                "collapsed": true,
                                "link": "/zh/importer/materials/fbx-materials.md"
                            }
                        ]
                    },
                    {
                        "text": "模型资源",
                        "link": "/zh/asset/model/mesh.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "从第三方工具导出模型资源",
                                "collapsed": true,
                                "link": "/zh/asset/model/dcc-export-mesh.md"
                            },
                            {
                                "text": "从 3ds Max 中导出 FBX 模型资源",
                                "collapsed": true,
                                "link": "/zh/asset/model/max-export-fbx.md"
                            },
                            {
                                "text": "从 Maya 中导出 FBX 模型资源",
                                "collapsed": true,
                                "link": "/zh/asset/model/maya-export-fbx.md"
                            },
                            {
                                "text": "glTF 模型",
                                "collapsed": true,
                                "link": "/zh/asset/model/glTF.md"
                            },
                            {
                                "text": "程序化创建网格",
                                "collapsed": true,
                                "link": "/zh/asset/model/scripting-mesh.md"
                            }
                        ]
                    },
                    {
                        "text": "Spine 骨骼动画资源",
                        "collapsed": true,
                        "link": "/zh/asset/spine.md"
                    },
                    {
                        "text": "DragonBones 骨骼动画资源",
                        "collapsed": true,
                        "link": "/zh/asset/dragonbones.md"
                    },
                    {
                        "text": "TiledMap 瓦片图资源",
                        "collapsed": true,
                        "link": "/zh/asset/tiledmap.md"
                    },
                    {
                        "text": "JSON 资源",
                        "collapsed": true,
                        "link": "/zh/asset/json.md"
                    },
                    {
                        "text": "文本资源",
                        "collapsed": true,
                        "link": "/zh/asset/text.md"
                    }
                ]
            },
            {
                "text": "脚本指南及事件机制",
                "link": "/zh/scripting/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "编程语言支持",
                        "collapsed": true,
                        "link": "/zh/scripting/language-support.md"
                    },
                    {
                        "text": "脚本基础",
                        "link": "/zh/scripting/script-basics.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "创建脚本",
                                "collapsed": true,
                                "link": "/zh/scripting/setup.md"
                            },
                            {
                                "text": "配置代码编辑环境",
                                "collapsed": true,
                                "link": "/zh/scripting/coding-setup.md"
                            },
                            {
                                "text": "脚本运行环境",
                                "collapsed": true,
                                "link": "/zh/scripting/basic.md"
                            },
                            {
                                "text": "装饰器使用",
                                "collapsed": true,
                                "link": "/zh/scripting/decorator.md"
                            },
                            {
                                "text": "属性参数参考",
                                "collapsed": true,
                                "link": "/zh/scripting/reference/attributes.md"
                            },
                            {
                                "text": "生命周期回调",
                                "collapsed": true,
                                "link": "/zh/scripting/life-cycle-callbacks.md"
                            },
                            {
                                "text": "开发注意事项",
                                "collapsed": true,
                                "link": "/zh/scripting/readonly.md"
                            }
                        ]
                    },
                    {
                        "text": "脚本使用",
                        "link": "/zh/scripting/usage.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "访问节点和其他组件",
                                "collapsed": true,
                                "link": "/zh/scripting/access-node-component.md"
                            },
                            {
                                "text": "常用节点和组件接口",
                                "collapsed": true,
                                "link": "/zh/scripting/basic-node-api.md"
                            },
                            {
                                "text": "创建和销毁节点",
                                "collapsed": true,
                                "link": "/zh/scripting/create-destroy.md"
                            },
                            {
                                "text": "使用计时器",
                                "collapsed": true,
                                "link": "/zh/scripting/scheduler.md"
                            },
                            {
                                "text": "组件和组件执行顺序",
                                "collapsed": true,
                                "link": "/zh/scripting/component.md"
                            },
                            {
                                "text": "加载和切换场景",
                                "collapsed": true,
                                "link": "/zh/scripting/scene-managing.md"
                            },
                            {
                                "text": "获取和加载资源",
                                "collapsed": true,
                                "link": "/zh/scripting/load-assets.md"
                            },
                            {
                                "text": "tsconfig 配置",
                                "collapsed": true,
                                "link": "/zh/scripting/tsconfig.md"
                            }
                        ]
                    },
                    {
                        "text": "脚本进阶",
                        "collapsed": true,
                        "link": "/zh/scripting/reference-class.md"
                    },
                    {
                        "text": "事件系统",
                        "link": "/zh/engine/event/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "发射和监听事件",
                                "collapsed": true,
                                "link": "/zh/engine/event/event-emit.md"
                            },
                            {
                                "text": "输入事件系统",
                                "collapsed": true,
                                "link": "/zh/engine/event/event-input.md"
                            },
                            {
                                "text": "节点事件系统",
                                "collapsed": true,
                                "link": "/zh/engine/event/event-node.md"
                            },
                            {
                                "text": "屏幕事件系统",
                                "collapsed": true,
                                "link": "/zh/engine/event/event-screen.md"
                            },
                            {
                                "text": "事件 API",
                                "collapsed": true,
                                "link": "/zh/engine/event/event-api.md"
                            }
                        ]
                    },
                    {
                        "text": "模块规范与示例",
                        "link": "/zh/scripting/modules/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "引擎模块",
                                "collapsed": true,
                                "link": "/zh/scripting/modules/engine.md"
                            },
                            {
                                "text": "外部模块使用案例",
                                "collapsed": true,
                                "link": "/zh/scripting/modules/example.md"
                            },
                            {
                                "text": "模块规范",
                                "collapsed": true,
                                "link": "/zh/scripting/modules/spec.md"
                            },
                            {
                                "text": "导入映射",
                                "collapsed": true,
                                "link": "/zh/scripting/modules/import-map.md"
                            }
                        ]
                    },
                    {
                        "text": "外部代码支持",
                        "collapsed": true,
                        "link": "/zh/scripting/external-scripts.md"
                    }
                ]
            },
            {
                "text": "跨平台发布",
                "link": "/zh/editor/publish/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "发布 Android 应用",
                        "link": "/zh/editor/publish/android/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "Android 构建示例",
                                "collapsed": true,
                                "link": "/zh/editor/publish/android/build-example-android.md"
                            },
                            {
                                "text": "Android 构建选项",
                                "collapsed": true,
                                "link": "/zh/editor/publish/android/build-options-android.md"
                            },
                            {
                                "text": "配置 Android 原生开发环境",
                                "collapsed": true,
                                "link": "/zh/editor/publish/android/build-setup-evn-android.md"
                            },
                            {
                                "text": "v3.8 Android 工程升级",
                                "collapsed": true,
                                "link": "/zh/release-notes/upgrade-3.8-android.md"
                            }
                        ]
                    },
                    {
                        "text": "发布到谷歌 GPG 平台",
                        "link": "/zh/editor/publish/google-play-games/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "发布和运行",
                                "collapsed": true,
                                "link": "/zh/editor/publish/google-play-games/build-and-run.md"
                            },
                            {
                                "text": "集成 Input SDK",
                                "collapsed": true,
                                "link": "/zh/editor/publish/gpg-input-sdk.md"
                            }
                        ]
                    },
                    {
                        "text": "发布 iOS 应用",
                        "link": "/zh/editor/publish/ios/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "iOS 发布示例",
                                "collapsed": true,
                                "link": "/zh/editor/publish/ios/build-example-ios.md"
                            },
                            {
                                "text": "iOS 构建选项",
                                "collapsed": true,
                                "link": "/zh/editor/publish/ios/build-options-ios.md"
                            },
                            {
                                "text": "iOS 微信小游戏内存与性能优化指南",
                                "collapsed": true,
                                "link": "/zh/editor/publish/ios/optimize.md"
                            }
                        ]
                    },
                    {
                        "text": "发布 HUAWEI HarmonyOS 应用",
                        "collapsed": true,
                        "link": "/zh/editor/publish/publish-huawei-ohos.md"
                    },
                    {
                        "text": "发布到 OpenHarmony 应用",
                        "collapsed": true,
                        "link": "/zh/editor/publish/publish-openharmony.md"
                    },
                    {
                        "text": "发布 macOS 应用",
                        "link": "/zh/editor/publish/mac/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "macOS 发布示例",
                                "collapsed": true,
                                "link": "/zh/editor/publish/mac/build-example-mac.md"
                            },
                            {
                                "text": "macOS 构建选项",
                                "collapsed": true,
                                "link": "/zh/editor/publish/mac/build-options-mac.md"
                            }
                        ]
                    },
                    {
                        "text": "发布 Windows 应用",
                        "link": "/zh/editor/publish/windows/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "Windows 构建示例",
                                "collapsed": true,
                                "link": "/zh/editor/publish/windows/build-example-windows.md"
                            },
                            {
                                "text": "Windows 构建选项",
                                "collapsed": true,
                                "link": "/zh/editor/publish/windows/build-options-windows.md"
                            }
                        ]
                    },
                    {
                        "text": "原生平台发布通用基础",
                        "link": "/zh/editor/publish/publish-native-index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "原生平台通用构建选项",
                                "collapsed": true,
                                "link": "/zh/editor/publish/native-options.md"
                            },
                            {
                                "text": "安装配置原生环境",
                                "collapsed": true,
                                "link": "/zh/editor/publish/setup-native-development.md"
                            },
                            {
                                "text": "原生平台 JavaScript 调试",
                                "collapsed": true,
                                "link": "/zh/editor/publish/debug-jsb.md"
                            },
                            {
                                "text": "集成 Input SDK",
                                "collapsed": true,
                                "link": "/zh/editor/publish/gpg-input-sdk.md"
                            }
                        ]
                    },
                    {
                        "text": "发布到小游戏平台",
                        "link": "/zh/editor/publish/publish-mini-game.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "发布到 HUAWEI AppGallery Connect",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-huawei-agc.md"
                            },
                            {
                                "text": "发布到支付宝小游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-alipay-mini-game.md"
                            },
                            {
                                "text": "发布到淘宝小游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-taobao-mini-game.md"
                            },
                            {
                                "text": "发布到微信小游戏",
                                "link": "/zh/editor/publish/publish-wechatgame.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "启用微信小游戏引擎插件",
                                        "collapsed": true,
                                        "link": "/zh/editor/publish/wechatgame-plugin.md"
                                    },
                                    {
                                        "text": "接入微信 PC 小游戏",
                                        "collapsed": true,
                                        "link": "/zh/editor/publish/publish-pc-wechatgame.md"
                                    }
                                ]
                            },
                            {
                                "text": "发布到抖音小游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-bytedance-mini-game.md"
                            },
                            {
                                "text": "发布到华为快游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-huawei-quick-game.md"
                            },
                            {
                                "text": "发布到 OPPO 小游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-oppo-mini-game.md"
                            },
                            {
                                "text": "发布到 vivo 小游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-vivo-mini-game.md"
                            },
                            {
                                "text": "发布到小米快游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-xiaomi-quick-game.md"
                            },
                            {
                                "text": "发布到百度小游戏",
                                "collapsed": true,
                                "link": "/zh/editor/publish/publish-baidu-mini-game.md"
                            },
                            {
                                "text": "开放数据域",
                                "collapsed": true,
                                "link": "/zh/editor/publish/build-open-data-context.md"
                            },
                            {
                                "text": "小游戏分包",
                                "collapsed": true,
                                "link": "/zh/editor/publish/subpackage.md"
                            }
                        ]
                    },
                    {
                        "text": "发布到 Facebook Instant Games 平台",
                        "collapsed": true,
                        "link": "/zh/editor/publish/publish-fb-instant-games.md"
                    },
                    {
                        "text": "发布到 Web 平台",
                        "collapsed": true,
                        "link": "/zh/editor/publish/publish-web.md"
                    },
                    {
                        "text": "通用构建选项介绍",
                        "collapsed": true,
                        "link": "/zh/editor/publish/build-options.md"
                    },
                    {
                        "text": "命令行发布项目",
                        "collapsed": true,
                        "link": "/zh/editor/publish/publish-in-command-line.md"
                    },
                    {
                        "text": "定制项目的构建模版",
                        "collapsed": true,
                        "link": "/zh/editor/publish/custom-project-build-template.md"
                    },
                    {
                        "text": "构建流程简介与常见错误处理",
                        "collapsed": true,
                        "link": "/zh/editor/publish/build-guide.md"
                    }
                ]
            }
        ]
    },
    {
        "text": "功能模块",
        "items": [
            {
                "text": "图形渲染",
                "link": "/zh/module-map/graphics.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "渲染管线",
                        "link": "/zh/render-pipeline/overview.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "内置管线",
                                "collapsed": true,
                                "link": "/zh/render-pipeline/builtin-pipeline.md"
                            },
                            {
                                "text": "自定义渲染管线（实验性质）",
                                "collapsed": true,
                                "link": "/zh/render-pipeline/custom-pipeline.md"
                            },
                            {
                                "text": "后期处理",
                                "link": "/zh/render-pipeline/post-process/index.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "PostProcess 组件",
                                        "collapsed": true,
                                        "link": "/zh/render-pipeline/post-process/post-process.md"
                                    },
                                    {
                                        "text": "BlitScreen 组件",
                                        "collapsed": true,
                                        "link": "/zh/render-pipeline/post-process/blit-screen.md"
                                    },
                                    {
                                        "text": "自定义后效",
                                        "collapsed": true,
                                        "link": "/zh/render-pipeline/post-process/custom.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "相机",
                        "collapsed": true,
                        "link": "/zh/editor/components/camera-component.md"
                    },
                    {
                        "text": "光照",
                        "link": "/zh/concepts/scene/light.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "基于物理的光照",
                                "collapsed": true,
                                "link": "/zh/concepts/scene/light/pbr-lighting.md"
                            },
                            {
                                "text": "光源",
                                "link": "/zh/concepts/scene/light/lightType/index.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "平行光",
                                        "collapsed": true,
                                        "link": "/zh/concepts/scene/light/lightType/dir-light.md"
                                    },
                                    {
                                        "text": "球面光",
                                        "collapsed": true,
                                        "link": "/zh/concepts/scene/light/lightType/sphere-light.md"
                                    },
                                    {
                                        "text": "聚光灯",
                                        "collapsed": true,
                                        "link": "/zh/concepts/scene/light/lightType/spot-light.md"
                                    },
                                    {
                                        "text": "环境光",
                                        "collapsed": true,
                                        "link": "/zh/concepts/scene/light/lightType/ambient.md"
                                    }
                                ]
                            },
                            {
                                "text": "基于多 Pass 的多光源支持",
                                "collapsed": true,
                                "link": "/zh/concepts/scene/light/additive-per-pixel-lights.md"
                            },
                            {
                                "text": "阴影",
                                "collapsed": true,
                                "link": "/zh/concepts/scene/light/shadow.md"
                            },
                            {
                                "text": "基于图像的光照",
                                "link": "/zh/concepts/scene/light/probe/index.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "光照探针",
                                        "link": "/zh/concepts/scene/light/probe/light-probe.md",
                                        "collapsed": true,
                                        "items": [
                                            {
                                                "text": "光照探针面板",
                                                "collapsed": true,
                                                "link": "/zh/concepts/scene/light/probe/light-probe-panel.md"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "反射探针",
                                        "link": "/zh/concepts/scene/light/probe/reflection-probe.md",
                                        "collapsed": true,
                                        "items": [
                                            {
                                                "text": "反射探针面板",
                                                "collapsed": true,
                                                "link": "/zh/concepts/scene/light/probe/reflection-probe-panel.md"
                                            },
                                            {
                                                "text": "反射探针美术工作流",
                                                "collapsed": true,
                                                "link": "/zh/concepts/scene/light/probe/reflection-art-workflow.md"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "基于图像的光照示例",
                                        "collapsed": true,
                                        "link": "/zh/concepts/scene/light/probe/example.md"
                                    },
                                    {
                                        "text": "光照贴图",
                                        "collapsed": true,
                                        "link": "/zh/concepts/scene/light/lightmap.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "网格",
                        "link": "/zh/module-map/mesh/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "MeshRenderer 组件",
                                "collapsed": true,
                                "link": "/zh/engine/renderable/model-component.md"
                            },
                            {
                                "text": "SkinnedMeshRenderer 组件",
                                "collapsed": true,
                                "link": "/zh/module-map/mesh/skinnedMeshRenderer.md"
                            },
                            {
                                "text": "SkinnedMeshBatchRenderer 组件",
                                "collapsed": true,
                                "link": "/zh/module-map/mesh/skinnedMeshBatchRenderer.md"
                            },
                            {
                                "text": "从第三方工具导出模型资源",
                                "collapsed": true,
                                "link": "/zh/asset/model/dcc-export-mesh.md"
                            },
                            {
                                "text": "从 3ds Max 中导出 FBX 模型资源",
                                "collapsed": true,
                                "link": "/zh/asset/model/max-export-fbx.md"
                            },
                            {
                                "text": "从 Maya 中导出 FBX 模型资源",
                                "collapsed": true,
                                "link": "/zh/asset/model/maya-export-fbx.md"
                            },
                            {
                                "text": "glTF 模型",
                                "collapsed": true,
                                "link": "/zh/asset/model/glTF.md"
                            },
                            {
                                "text": "程序化创建网格",
                                "collapsed": true,
                                "link": "/zh/asset/model/scripting-mesh.md"
                            },
                            {
                                "text": "顶点动画贴图 （VAT）",
                                "collapsed": true,
                                "link": "/zh/asset/model/vat.md"
                            }
                        ]
                    },
                    {
                        "text": "纹理",
                        "link": "/zh/module-map/texture/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "纹理贴图",
                                "collapsed": true,
                                "link": "/zh/asset/texture.md"
                            },
                            {
                                "text": "立方体贴图",
                                "collapsed": true,
                                "link": "/zh/asset/texture-cube.md"
                            },
                            {
                                "text": "压缩纹理",
                                "collapsed": true,
                                "link": "/zh/asset/compress-texture.md"
                            },
                            {
                                "text": "渲染纹理",
                                "collapsed": true,
                                "link": "/zh/asset/render-texture.md"
                            }
                        ]
                    },
                    {
                        "text": "材质系统",
                        "link": "/zh/material-system/overview.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "在脚本中使用材质",
                                "collapsed": true,
                                "link": "/zh/material-system/material-script.md"
                            },
                            {
                                "text": "内置材质",
                                "collapsed": true,
                                "link": "/zh/material-system/builtin-material.md"
                            },
                            {
                                "text": "材质系统类图",
                                "collapsed": true,
                                "link": "/zh/material-system/material-structure.md"
                            }
                        ]
                    },
                    {
                        "text": "着色器",
                        "link": "/zh/shader/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "创建与使用",
                                "collapsed": true,
                                "link": "/zh/shader/effect-inspector.md"
                            },
                            {
                                "text": "内置着色器",
                                "link": "/zh/shader/effect-builtin.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "基于物理的光照模型 PBR",
                                        "collapsed": true,
                                        "link": "/zh/shader/effect-builtin-pbr.md"
                                    },
                                    {
                                        "text": "卡通渲染",
                                        "collapsed": true,
                                        "link": "/zh/shader/effect-builtin-toon.md"
                                    },
                                    {
                                        "text": "无光照",
                                        "collapsed": true,
                                        "link": "/zh/shader/effect-builtin-unlit.md"
                                    }
                                ]
                            },
                            {
                                "text": "着色器语法",
                                "link": "/zh/shader/effect-syntax.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "Pass 可选配置参数",
                                        "collapsed": true,
                                        "link": "/zh/shader/pass-parameter-list.md"
                                    },
                                    {
                                        "text": "YAML 101 语法简介",
                                        "collapsed": true,
                                        "link": "/zh/shader/yaml-101.md"
                                    },
                                    {
                                        "text": "GLSL 语法简介",
                                        "collapsed": true,
                                        "link": "/zh/shader/glsl.md"
                                    },
                                    {
                                        "text": "预处理宏定义",
                                        "collapsed": true,
                                        "link": "/zh/shader/macros.md"
                                    },
                                    {
                                        "text": "着色器片段（Chunk）",
                                        "collapsed": true,
                                        "link": "/zh/shader/effect-chunk-index.md"
                                    }
                                ]
                            },
                            {
                                "text": "内置全局 Uniform",
                                "collapsed": true,
                                "link": "/zh/shader/uniform.md"
                            },
                            {
                                "text": "公共函数库",
                                "collapsed": true,
                                "link": "/zh/shader/common-functions.md"
                            },
                            {
                                "text": "前向渲染与延迟渲染 Shader 执行流程",
                                "collapsed": true,
                                "link": "/zh/shader/forward-and-deferred.md"
                            },
                            {
                                "text": "表面着色器 - Surface Shader",
                                "link": "/zh/shader/surface-shader.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "内置 Surface Shader 导读",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/builtin-surface-shader.md"
                                    },
                                    {
                                        "text": "Surface Shader 基本结构",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/surface-shader-structure.md"
                                    },
                                    {
                                        "text": "Surface Shader 执行流程",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/shader-code-flow.md"
                                    },
                                    {
                                        "text": "include 机制",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/includes.md"
                                    },
                                    {
                                        "text": "宏定义与重映射",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/macro-remapping.md"
                                    },
                                    {
                                        "text": "使用宏定义实现函数替换",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/function-replace.md"
                                    },
                                    {
                                        "text": "可替换的内置函数",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/surface-function.md"
                                    },
                                    {
                                        "text": "渲染用途",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/render-usage.md"
                                    },
                                    {
                                        "text": "光照模型",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/lighting-mode.md"
                                    },
                                    {
                                        "text": "表面材质数据结构",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/surface-data-struct.md"
                                    },
                                    {
                                        "text": "着色器类别",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/shader-stage.md"
                                    },
                                    {
                                        "text": "组装器",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/shader-assembly.md"
                                    },
                                    {
                                        "text": "VS 输入",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/vs-input.md"
                                    },
                                    {
                                        "text": "FS 输入",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/fs-input.md"
                                    },
                                    {
                                        "text": "自定义 Surface Shader",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/customize-surface-shader.md"
                                    },
                                    {
                                        "text": "渲染调式功能",
                                        "collapsed": true,
                                        "link": "/zh/shader/surface-shader/rendering-debug-view.md"
                                    }
                                ]
                            },
                            {
                                "text": "传统着色器 - Legacy Shader",
                                "link": "/zh/shader/legacy-shader/legacy-shader.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "内置 Legacy Shader 导读",
                                        "collapsed": true,
                                        "link": "/zh/shader/legacy-shader/legacy-shader-builtins.md"
                                    },
                                    {
                                        "text": "Legacy Shader 主要函数与结构体",
                                        "collapsed": true,
                                        "link": "/zh/shader/legacy-shader/legacy-shader-func-struct.md"
                                    }
                                ]
                            },
                            {
                                "text": "自定义着色器",
                                "link": "/zh/shader/write-effect-overview.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "2D 精灵着色器：Gradient",
                                        "collapsed": true,
                                        "link": "/zh/shader/write-effect-2d-sprite-gradient.md"
                                    },
                                    {
                                        "text": "3D 着色器：RimLight",
                                        "collapsed": true,
                                        "link": "/zh/shader/write-effect-3d-rim-light.md"
                                    }
                                ]
                            },
                            {
                                "text": "皮肤材质",
                                "collapsed": true,
                                "link": "/zh/shader/advanced-shader/skin.md"
                            },
                            {
                                "text": "自定义几何体实例化属性",
                                "collapsed": true,
                                "link": "/zh/shader/instanced-attributes.md"
                            },
                            {
                                "text": "UBO 内存布局策略",
                                "collapsed": true,
                                "link": "/zh/shader/ubo-layout.md"
                            },
                            {
                                "text": "WebGL 1.0 向下兼容支持",
                                "collapsed": true,
                                "link": "/zh/shader/webgl-100-fallback.md"
                            },
                            {
                                "text": "VSCode 着色器插件",
                                "collapsed": true,
                                "link": "/zh/shader/vscode-plugin.md"
                            },
                            {
                                "text": "计算着色器",
                                "collapsed": true,
                                "link": "/zh/shader/compute-shader.md"
                            }
                        ]
                    },
                    {
                        "text": "渲染排序",
                        "collapsed": true,
                        "link": "/zh/engine/rendering/sorting.md"
                    },
                    {
                        "text": "特效组件",
                        "link": "/zh/module-map/effects/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "广告牌",
                                "collapsed": true,
                                "link": "/zh/particle-system/billboard-component.md"
                            },
                            {
                                "text": "线段组件",
                                "collapsed": true,
                                "link": "/zh/particle-system/line-component.md"
                            }
                        ]
                    },
                    {
                        "text": "天空盒",
                        "collapsed": true,
                        "link": "/zh/concepts/scene/skybox.md"
                    },
                    {
                        "text": "全局雾",
                        "collapsed": true,
                        "link": "/zh/concepts/scene/fog.md"
                    },
                    {
                        "text": "几何渲染器",
                        "collapsed": true,
                        "link": "/zh/geometry-renderer/index.md"
                    },
                    {
                        "text": "调试渲染器（Debug-Renderer）",
                        "collapsed": true,
                        "link": "/zh/debug-renderer/index.md"
                    }
                ]
            },
            {
                "text": "2D 对象",
                "link": "/zh/2d-object/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "2D 渲染",
                        "link": "/zh/2d-object/2d-render/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "渲染排序规则",
                                "collapsed": true,
                                "link": "/zh/ui-system/components/engine/priority.md"
                            },
                            {
                                "text": "2D 渲染组件合批说明",
                                "collapsed": true,
                                "link": "/zh/ui-system/components/engine/ui-batch.md"
                            },
                            {
                                "text": "2D 渲染对象自定义材质",
                                "collapsed": true,
                                "link": "/zh/ui-system/components/engine/ui-material.md"
                            },
                            {
                                "text": "2D 渲染组件",
                                "link": "/zh/ui-system/components/editor/render-component.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "Sprite 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/sprite.md"
                                    },
                                    {
                                        "text": "Label 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/label.md"
                                    },
                                    {
                                        "text": "Mask 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/mask.md"
                                    },
                                    {
                                        "text": "Graphics 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/graphics.md"
                                    },
                                    {
                                        "text": "RichText 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/richtext.md"
                                    },
                                    {
                                        "text": "UIStaticBatch 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/ui-static.md"
                                    },
                                    {
                                        "text": "Spine Skeleton 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/editor/components/spine.md"
                                    },
                                    {
                                        "text": "DragonBones ArmatureDisplay 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/editor/components/dragonbones.md"
                                    },
                                    {
                                        "text": "TiledMap 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/editor/components/tiledmap.md"
                                    },
                                    {
                                        "text": "TiledTile 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/editor/components/tiledtile.md"
                                    },
                                    {
                                        "text": "MotionStreak",
                                        "collapsed": true,
                                        "link": "/zh/editor/components/motion-streak.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "UI 系统",
                        "link": "/zh/2d-object/ui-system/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "UI 组件",
                                "link": "/zh/ui-system/components/editor/base-component.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "Canvas 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/canvas.md"
                                    },
                                    {
                                        "text": "UITransform 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/ui-transform.md"
                                    },
                                    {
                                        "text": "Widget 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/widget.md"
                                    },
                                    {
                                        "text": "Button 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/button.md"
                                    },
                                    {
                                        "text": "Layout 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/layout.md"
                                    },
                                    {
                                        "text": "EditBox 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/editbox.md"
                                    },
                                    {
                                        "text": "ScrollView 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/scrollview.md"
                                    },
                                    {
                                        "text": "ScrollBar 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/scrollbar.md"
                                    },
                                    {
                                        "text": "ProgressBar 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/progress.md"
                                    },
                                    {
                                        "text": "LabelOutline 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/label-outline.md"
                                    },
                                    {
                                        "text": "LabelShadow 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/label-shadow.md"
                                    },
                                    {
                                        "text": "Toggle 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/toggle.md"
                                    },
                                    {
                                        "text": "ToggleContainer 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/toggleContainer.md"
                                    },
                                    {
                                        "text": "Slider 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/slider.md"
                                    },
                                    {
                                        "text": "PageView 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/pageview.md"
                                    },
                                    {
                                        "text": "PageViewIndicator 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/pageviewindicator.md"
                                    },
                                    {
                                        "text": "UIMeshRenderer 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/ui-model.md"
                                    },
                                    {
                                        "text": "UICoordinateTracker 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/ui-coordinate-tracker.md"
                                    },
                                    {
                                        "text": "UIOpacity 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/ui-opacity.md"
                                    },
                                    {
                                        "text": "BlockInputEvents 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/block-input-events.md"
                                    },
                                    {
                                        "text": "WebView 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/webview.md"
                                    },
                                    {
                                        "text": "VideoPlayer 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/videoplayer.md"
                                    },
                                    {
                                        "text": "SafeArea 组件参考",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/editor/safearea.md"
                                    }
                                ]
                            },
                            {
                                "text": "UI 实践指南",
                                "link": "/zh/ui-system/components/engine/usage-ui.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "多分辨率适配方案",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/multi-resolution.md"
                                    },
                                    {
                                        "text": "对齐策略",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/widget-align.md"
                                    },
                                    {
                                        "text": "文字排版",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/label-layout.md"
                                    },
                                    {
                                        "text": "自动布局容器",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/auto-layout.md"
                                    },
                                    {
                                        "text": "制作动态生成内容的列表",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/list-with-data.md"
                                    },
                                    {
                                        "text": "制作可任意拉伸的 UI 图像",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/sliced-sprite.md"
                                    },
                                    {
                                        "text": "安卓大屏幕适配",
                                        "collapsed": true,
                                        "link": "/zh/ui-system/components/engine/large-screen.md"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "text": "动画系统",
                "link": "/zh/animation/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "动画剪辑",
                        "collapsed": true,
                        "link": "/zh/animation/animation-clip.md"
                    },
                    {
                        "text": "动画组件参考",
                        "collapsed": true,
                        "link": "/zh/animation/animation-comp.md"
                    },
                    {
                        "text": "使用动画编辑器",
                        "link": "/zh/animation/animation.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "创建 Animation 组件和动画剪辑",
                                "collapsed": true,
                                "link": "/zh/animation/animation-create.md"
                            },
                            {
                                "text": "动画编辑器面板介绍",
                                "collapsed": true,
                                "link": "/zh/animation/animation-editor.md"
                            },
                            {
                                "text": "编辑动画剪辑",
                                "link": "/zh/animation/edit-animation-clip.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "关键帧编辑视图",
                                        "collapsed": true,
                                        "link": "/zh/animation/animation-keyFrames.md"
                                    },
                                    {
                                        "text": "曲线编辑视图",
                                        "collapsed": true,
                                        "link": "/zh/animation/animation-curve.md"
                                    },
                                    {
                                        "text": "曲线编辑器",
                                        "collapsed": true,
                                        "link": "/zh/animation/curve-editor.md"
                                    },
                                    {
                                        "text": "辅助曲线编辑视图",
                                        "collapsed": true,
                                        "link": "/zh/animation/animation-auxiliary-curve.md"
                                    }
                                ]
                            },
                            {
                                "text": "添加动画事件",
                                "collapsed": true,
                                "link": "/zh/animation/animation-event.md"
                            },
                            {
                                "text": "程序化编辑动画剪辑",
                                "collapsed": true,
                                "link": "/zh/animation/use-animation-curve.md"
                            }
                        ]
                    },
                    {
                        "text": "骨骼动画",
                        "link": "/zh/animation/skeletal-animation.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "骨骼贴图布局设置",
                                "collapsed": true,
                                "link": "/zh/animation/joint-texture-layout.md"
                            }
                        ]
                    },
                    {
                        "text": "程序化控制动画",
                        "link": "/zh/animation/animation-component.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "动画状态",
                                "collapsed": true,
                                "link": "/zh/animation/animation-state.md"
                            }
                        ]
                    },
                    {
                        "text": "变形动画",
                        "collapsed": true,
                        "link": "/zh/animation/morph.md"
                    },
                    {
                        "text": "嵌入播放器",
                        "collapsed": true,
                        "link": "/zh/animation/embedded-player.md"
                    },
                    {
                        "text": "Marionette 动画系统",
                        "link": "/zh/animation/marionette/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "动画图资源",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-graph.md"
                            },
                            {
                                "text": "动画控制器组件参考",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-controller.md"
                            },
                            {
                                "text": "动画图面板",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-graph-panel.md"
                            },
                            {
                                "text": "动画图层级",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-graph-layer.md"
                            },
                            {
                                "text": "动画状态机",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-graph-basics.md"
                            },
                            {
                                "text": "状态过渡",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/state-transition.md"
                            },
                            {
                                "text": "动画遮罩资源",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-mask.md"
                            },
                            {
                                "text": "动画图变体",
                                "collapsed": true,
                                "link": "/zh/animation/marionette/animation-variant.md"
                            },
                            {
                                "text": "程序式动画",
                                "link": "/zh/animation/marionette/procedural-animation/index.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "程序式动画",
                                        "link": "/zh/animation/marionette/procedural-animation/introduce.md",
                                        "collapsed": true,
                                        "items": [
                                            {
                                                "text": "启用程序式动画功能",
                                                "collapsed": true,
                                                "link": "/zh/animation/marionette/procedural-animation/enabling.md"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "姿态图",
                                        "link": "/zh/animation/marionette/procedural-animation/pose-graph/index.md",
                                        "collapsed": true,
                                        "items": [
                                            {
                                                "text": "姿态图节点视图",
                                                "collapsed": true,
                                                "link": "/zh/animation/marionette/procedural-animation/pose-graph/pose-nodes/node-operation.md"
                                            },
                                            {
                                                "text": "姿态结点",
                                                "collapsed": true,
                                                "link": "/zh/animation/marionette/procedural-animation/pose-graph/pose-nodes/index.md"
                                            },
                                            {
                                                "text": "混合姿态",
                                                "collapsed": true,
                                                "link": "/zh/animation/marionette/procedural-animation/pose-graph/pose-nodes/blend-poses.md"
                                            },
                                            {
                                                "text": "修改姿态",
                                                "collapsed": true,
                                                "link": "/zh/animation/marionette/procedural-animation/pose-graph/pose-nodes/modify-pose.md"
                                            },
                                            {
                                                "text": "播放或采样动画",
                                                "collapsed": true,
                                                "link": "/zh/animation/marionette/procedural-animation/pose-graph/pose-nodes/play-or-sample-motion.md"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "text": "音频系统",
                "link": "/zh/audio-system/overview.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "AudioSource 组件参考",
                        "collapsed": true,
                        "link": "/zh/audio-system/audiosource.md"
                    },
                    {
                        "text": "全局音频管理器示例",
                        "collapsed": true,
                        "link": "/zh/audio-system/audioExample.md"
                    },
                    {
                        "text": "兼容性说明",
                        "collapsed": true,
                        "link": "/zh/audio-system/audioLimit.md"
                    }
                ]
            },
            {
                "text": "物理系统",
                "link": "/zh/physics/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "2D 物理",
                        "link": "/zh/physics-2d/physics-2d.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "2D 物理系统",
                                "collapsed": true,
                                "link": "/zh/physics-2d/physics-2d-system.md"
                            },
                            {
                                "text": "2D 刚体组件",
                                "collapsed": true,
                                "link": "/zh/physics-2d/physics-2d-rigid-body.md"
                            },
                            {
                                "text": "2D 碰撞体",
                                "collapsed": true,
                                "link": "/zh/physics-2d/physics-2d-collider.md"
                            },
                            {
                                "text": "2D 碰撞回调",
                                "collapsed": true,
                                "link": "/zh/physics-2d/physics-2d-contact-callback.md"
                            },
                            {
                                "text": "2D 物理关节",
                                "collapsed": true,
                                "link": "/zh/physics-2d/physics-2d-joint.md"
                            }
                        ]
                    },
                    {
                        "text": "3D 物理系统",
                        "link": "/zh/physics/physics.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "设置物理引擎",
                                "collapsed": true,
                                "link": "/zh/physics/physics-engine.md"
                            },
                            {
                                "text": "物理系统配置",
                                "collapsed": true,
                                "link": "/zh/physics/physics-configs.md"
                            },
                            {
                                "text": "分组和掩码",
                                "collapsed": true,
                                "link": "/zh/physics/physics-group-mask.md"
                            },
                            {
                                "text": "物理组件",
                                "link": "/zh/physics/physics-component.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "碰撞体",
                                        "collapsed": true,
                                        "link": "/zh/physics/physics-collider.md"
                                    },
                                    {
                                        "text": "刚体",
                                        "collapsed": true,
                                        "link": "/zh/physics/physics-rigidbody.md"
                                    },
                                    {
                                        "text": "恒力组件",
                                        "collapsed": true,
                                        "link": "/zh/physics/physics-constantForce.md"
                                    },
                                    {
                                        "text": "约束",
                                        "collapsed": true,
                                        "link": "/zh/physics/physics-constraint.md"
                                    }
                                ]
                            },
                            {
                                "text": "物理材质",
                                "collapsed": true,
                                "link": "/zh/physics/physics-material.md"
                            },
                            {
                                "text": "物理事件",
                                "collapsed": true,
                                "link": "/zh/physics/physics-event.md"
                            },
                            {
                                "text": "射线检测",
                                "collapsed": true,
                                "link": "/zh/physics/physics-raycast.md"
                            },
                            {
                                "text": "几何投射检测",
                                "collapsed": true,
                                "link": "/zh/physics/physics-sweep.md"
                            },
                            {
                                "text": "连续碰撞检测",
                                "collapsed": true,
                                "link": "/zh/physics/physics-ccd.md"
                            },
                            {
                                "text": "角色控制器",
                                "collapsed": true,
                                "link": "/zh/physics/character-controller/index.md"
                            },
                            {
                                "text": "物理应用案例",
                                "collapsed": true,
                                "link": "/zh/physics/physics-example.md"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "粒子系统",
                "link": "/zh/particle-system/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "2D 粒子",
                        "collapsed": true,
                        "link": "/zh/particle-system/2d-particle/2d-particle.md"
                    },
                    {
                        "text": "3D 粒子",
                        "link": "/zh/particle-system/overview.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "粒子系统模块",
                                "link": "/zh/particle-system/module.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "主模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/main-module.md"
                                    },
                                    {
                                        "text": "发射器模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/emitter.md"
                                    },
                                    {
                                        "text": "速度模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/velocity-module.md"
                                    },
                                    {
                                        "text": "加速度模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/force-module.md"
                                    },
                                    {
                                        "text": "大小模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/size-module.md"
                                    },
                                    {
                                        "text": "旋转模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/rotation-module.md"
                                    },
                                    {
                                        "text": "颜色模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/color-module.md"
                                    },
                                    {
                                        "text": "贴图动画模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/texture-animation-module.md"
                                    },
                                    {
                                        "text": "限速模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/limit-velocity-module.md"
                                    },
                                    {
                                        "text": "拖尾模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/trail-module.md"
                                    },
                                    {
                                        "text": "渲染模块",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/renderer.md"
                                    }
                                ]
                            },
                            {
                                "text": "粒子属性编辑",
                                "link": "/zh/particle-system/editor/index.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "控制面板",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/editor/particle-effect-panel.md"
                                    },
                                    {
                                        "text": "粒子曲线编辑器",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/editor/curve-editor.md"
                                    },
                                    {
                                        "text": "渐变色编辑器",
                                        "collapsed": true,
                                        "link": "/zh/particle-system/editor/gradient-editor.md"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "text": "缓动系统",
                "link": "/zh/tween/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "缓动接口",
                        "collapsed": true,
                        "link": "/zh/tween/tween-interface.md"
                    },
                    {
                        "text": "缓动函数",
                        "collapsed": true,
                        "link": "/zh/tween/tween-function.md"
                    },
                    {
                        "text": "缓动示例",
                        "collapsed": true,
                        "link": "/zh/tween/tween-example.md"
                    }
                ]
            },
            {
                "text": "地形系统",
                "collapsed": true,
                "link": "/zh/editor/terrain/index.md"
            },
            {
                "text": "资源管理",
                "link": "/zh/asset/asset-manager.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "loader 升级 assetManager 指南",
                        "collapsed": true,
                        "link": "/zh/asset/asset-manager-upgrade-guide.md"
                    },
                    {
                        "text": "子包升级 Asset Bundle 指南",
                        "collapsed": true,
                        "link": "/zh/asset/subpackage-upgrade-guide.md"
                    },
                    {
                        "text": "资源加载",
                        "collapsed": true,
                        "link": "/zh/asset/dynamic-load-resources.md"
                    },
                    {
                        "text": "Asset Bundle",
                        "collapsed": true,
                        "link": "/zh/asset/bundle.md"
                    },
                    {
                        "text": "资源释放",
                        "collapsed": true,
                        "link": "/zh/asset/release-manager.md"
                    },
                    {
                        "text": "下载与解析",
                        "collapsed": true,
                        "link": "/zh/asset/downloader-parser.md"
                    },
                    {
                        "text": "加载与预加载",
                        "collapsed": true,
                        "link": "/zh/asset/preload-load.md"
                    },
                    {
                        "text": "缓存管理器",
                        "collapsed": true,
                        "link": "/zh/asset/cache-manager.md"
                    },
                    {
                        "text": "可选参数",
                        "collapsed": true,
                        "link": "/zh/asset/options.md"
                    },
                    {
                        "text": "管线与任务",
                        "collapsed": true,
                        "link": "/zh/asset/pipeline-task.md"
                    },
                    {
                        "text": "资源管理注意事项 - meta 文件",
                        "collapsed": true,
                        "link": "/zh/asset/meta.md"
                    }
                ]
            },
            {
                "text": "多语言（L10N）",
                "link": "/zh/editor/l10n/overview.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "译文服务商",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/translation-service.md"
                    },
                    {
                        "text": "收集并统计",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/collect-and-count.md"
                    },
                    {
                        "text": "语言编译",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/compile-language.md"
                    },
                    {
                        "text": "L10nLabel 组件",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/l10n-label.md"
                    },
                    {
                        "text": "示例",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/script-using.md"
                    },
                    {
                        "text": "API",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/localization-editor-api.md"
                    },
                    {
                        "text": "EXCEL 导入示例",
                        "collapsed": true,
                        "link": "/zh/editor/l10n/example-excel.md"
                    }
                ]
            },
            {
                "text": "XR",
                "link": "/zh/xr/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "版本历史",
                        "collapsed": true,
                        "link": "/zh/xr/version-history.md"
                    },
                    {
                        "text": "架构",
                        "link": "/zh/xr/architecture/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "内置资源与预制体",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/assets.md"
                            },
                            {
                                "text": "XR 组件",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/component.md"
                            },
                            {
                                "text": "预览",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/preview.md"
                            },
                            {
                                "text": "XR 视频播放器",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/xr-video-player.md"
                            },
                            {
                                "text": "XR 网页浏览器",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/xr-webview.md"
                            },
                            {
                                "text": "XR 空间音频",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/xr-spatial-audio.md"
                            },
                            {
                                "text": "XR 合成层",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/xr-composition-layer.md"
                            },
                            {
                                "text": "透视",
                                "collapsed": true,
                                "link": "/zh/xr/architecture/xr-pass-through.md"
                            },
                            {
                                "text": "AR",
                                "link": "/zh/xr/architecture/ar-introduce.md",
                                "collapsed": true,
                                "items": [
                                    {
                                        "text": "AR 相机",
                                        "collapsed": true,
                                        "link": "/zh/xr/architecture/ar-camera.md"
                                    },
                                    {
                                        "text": "AR Manager",
                                        "collapsed": true,
                                        "link": "/zh/xr/architecture/ar-manager.md"
                                    },
                                    {
                                        "text": "AR 自动化行为编辑",
                                        "collapsed": true,
                                        "link": "/zh/xr/architecture/ar-tracking-component.md"
                                    },
                                    {
                                        "text": "AR 交互",
                                        "collapsed": true,
                                        "link": "/zh/xr/architecture/ar-interaction.md"
                                    },
                                    {
                                        "text": "AR 降级",
                                        "collapsed": true,
                                        "link": "/zh/xr/architecture/xr-fallback.md"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "快速部署指南",
                        "link": "/zh/xr/index.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "VR 项目创建",
                                "collapsed": true,
                                "link": "/zh/xr/project-deploy/vr-proj-deploy.md"
                            },
                            {
                                "text": "VR 项目构建与发布",
                                "collapsed": true,
                                "link": "/zh/xr/project-deploy/vr-proj-pub.md"
                            },
                            {
                                "text": "AR 项目创建",
                                "collapsed": true,
                                "link": "/zh/xr/project-deploy/ar-proj-deploy.md"
                            },
                            {
                                "text": "AR 项目构建与发布",
                                "collapsed": true,
                                "link": "/zh/xr/project-deploy/ar-proj-pub.md"
                            },
                            {
                                "text": "WebXR 项目配置",
                                "collapsed": true,
                                "link": "/zh/xr/project-deploy/webxr-proj-deploy.md"
                            },
                            {
                                "text": "WebXR 项目构建与发布",
                                "collapsed": true,
                                "link": "/zh/xr/project-deploy/webxr-proj-pub.md"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "原生开发",
                "link": "/zh/native/overview.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "原生平台二次开发指南",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/native-secondary-development.md"
                    },
                    {
                        "text": "Java 原生反射机制",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/java-reflection.md"
                    },
                    {
                        "text": "Objective-C 原生反射机制",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/oc-reflection.md"
                    },
                    {
                        "text": "JsbBridge JS 与 JAVA 通信",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/js-java-bridge.md"
                    },
                    {
                        "text": "JsbBridge JS 与 Objective-C 通信",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/js-oc-bridge.md"
                    },
                    {
                        "text": "JsbBridgeWrapper 基于原生反射机制的事件处理",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/jsb-bridge-wrapper.md"
                    },
                    {
                        "text": "JSB 2.0 使用指南",
                        "link": "/zh/advanced-topics/JSB2.0-learning.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "JSB 手动绑定",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/jsb-manual-binding.md"
                            },
                            {
                                "text": "JSB 自动绑定",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/jsb-auto-binding.md"
                            },
                            {
                                "text": "Swig",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/jsb-swig.md"
                            },
                            {
                                "text": "Swig 示例",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/jsb/swig/tutorial/index.md"
                            }
                        ]
                    },
                    {
                        "text": "CMake 使用简介",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/cmake-learning.md"
                    },
                    {
                        "text": "原生引擎内存泄漏检测系统",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/memory-leak-detector.md"
                    },
                    {
                        "text": "原生场景剔除",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/native-scene-culling.md"
                    },
                    {
                        "text": "原生性能剖析器",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/profiler.md"
                    },
                    {
                        "text": "原生插件",
                        "link": "/zh/advanced-topics/native-plugins/brief.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "原生插件创建范例",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/native-plugins/tutorial.md"
                            }
                        ]
                    },
                    {
                        "text": "原生引擎跨语言调用优化",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/jsb-optimizations.md"
                    }
                ]
            }
        ]
    },
    {
        "text": "进阶教程",
        "items": [
            {
                "text": "扩展编辑器",
                "link": "/zh/editor/extension/readme.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "扩展管理器面板",
                        "collapsed": true,
                        "link": "/zh/editor/extension/extension-manager.md"
                    },
                    {
                        "text": "扩展模板与编译构建",
                        "collapsed": true,
                        "link": "/zh/editor/extension/create-extension.md"
                    },
                    {
                        "text": "入门示例-菜单",
                        "collapsed": true,
                        "link": "/zh/editor/extension/first.md"
                    },
                    {
                        "text": "入门示例-面板",
                        "collapsed": true,
                        "link": "/zh/editor/extension/first-panel.md"
                    },
                    {
                        "text": "入门示例-扩展间通信",
                        "collapsed": true,
                        "link": "/zh/editor/extension/first-communication.md"
                    },
                    {
                        "text": "扩展改名",
                        "collapsed": true,
                        "link": "/zh/editor/extension/extension-change-name.md"
                    },
                    {
                        "text": "安装与分享",
                        "collapsed": true,
                        "link": "/zh/editor/extension/install.md"
                    },
                    {
                        "text": "上架扩展到资源商店",
                        "collapsed": true,
                        "link": "/zh/editor/extension/store/upload-store.md"
                    },
                    {
                        "text": "增强已有功能",
                        "link": "/zh/editor/extension/contributions.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "自定义主菜单",
                                "collapsed": true,
                                "link": "/zh/editor/extension/contributions-menu.md"
                            },
                            {
                                "text": "自定义消息",
                                "collapsed": true,
                                "link": "/zh/editor/extension/contributions-messages.md"
                            },
                            {
                                "text": "操作当前场景",
                                "collapsed": true,
                                "link": "/zh/editor/extension/scene-script.md"
                            },
                            {
                                "text": "增强资源管理器面板",
                                "collapsed": true,
                                "link": "/zh/editor/assets/extension.md"
                            },
                            {
                                "text": "自定义资源数据库",
                                "collapsed": true,
                                "link": "/zh/editor/extension/contributions-database.md"
                            },
                            {
                                "text": "自定义属性检查器面板",
                                "collapsed": true,
                                "link": "/zh/editor/extension/inspector.md"
                            },
                            {
                                "text": "自定义构建流程",
                                "collapsed": true,
                                "link": "/zh/editor/publish/custom-build-plugin.md"
                            },
                            {
                                "text": "自定义项目设置面板",
                                "collapsed": true,
                                "link": "/zh/editor/extension/contributions-project.md"
                            },
                            {
                                "text": "自定义偏好设置面板",
                                "collapsed": true,
                                "link": "/zh/editor/extension/contributions-preferences.md"
                            },
                            {
                                "text": "快捷键",
                                "collapsed": true,
                                "link": "/zh/editor/extension/contributions-shortcuts.md"
                            }
                        ]
                    },
                    {
                        "text": "扩展系统详解",
                        "link": "/zh/editor/extension/basic.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "基础结构",
                                "collapsed": true,
                                "link": "/zh/editor/extension/package.md"
                            },
                            {
                                "text": "扩展包定义",
                                "collapsed": true,
                                "link": "/zh/editor/extension/define.md"
                            },
                            {
                                "text": "消息系统",
                                "collapsed": true,
                                "link": "/zh/editor/extension/messages.md"
                            },
                            {
                                "text": "多语言系统（i18n）",
                                "collapsed": true,
                                "link": "/zh/editor/extension/i18n.md"
                            },
                            {
                                "text": "配置系统",
                                "collapsed": true,
                                "link": "/zh/editor/extension/profile.md"
                            },
                            {
                                "text": "面板系统",
                                "collapsed": true,
                                "link": "/zh/editor/extension/panel.md"
                            },
                            {
                                "text": "UI 组件",
                                "collapsed": true,
                                "link": "/zh/editor/extension/ui.md"
                            },
                            {
                                "text": "使用第三方工具",
                                "collapsed": true,
                                "link": "/zh/editor/extension/npm.md"
                            }
                        ]
                    },
                    {
                        "text": "Editor 接口说明",
                        "link": "/zh/editor/extension/editor-api.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "App",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/app.md"
                            },
                            {
                                "text": "Clipboard",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/clipboard.md"
                            },
                            {
                                "text": "Dialog",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/dialog.md"
                            },
                            {
                                "text": "I18n",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/i18n.md"
                            },
                            {
                                "text": "Logger",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/logger.md"
                            },
                            {
                                "text": "Message",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/message.md"
                            },
                            {
                                "text": "Network",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/network.md"
                            },
                            {
                                "text": "Package",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/package.md"
                            },
                            {
                                "text": "Panel",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/panel.md"
                            },
                            {
                                "text": "Profile",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/profile.md"
                            },
                            {
                                "text": "Project",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/project.md"
                            },
                            {
                                "text": "Selection",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/selection.md"
                            },
                            {
                                "text": "Utils",
                                "collapsed": true,
                                "link": "/zh/editor/extension/api/utils.md"
                            }
                        ]
                    }
                ]
            },
            {
                "text": "进阶主题",
                "link": "/zh/advanced-topics/index.md",
                "collapsed": true,
                "items": [
                    {
                        "text": "如何向 Cocos 提交代码",
                        "collapsed": true,
                        "link": "/zh/submit-pr/submit-pr.md"
                    },
                    {
                        "text": "存储和读取用户数据",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/data-storage.md"
                    },
                    {
                        "text": "引擎定制工作流程",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/engine-customization.md"
                    },
                    {
                        "text": "网页预览定制工作流程",
                        "collapsed": true,
                        "link": "/zh/editor/preview/browser.md"
                    },
                    {
                        "text": "i18n 游戏多语言支持",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/i18n.md"
                    },
                    {
                        "text": "动态合图",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/dynamic-atlas.md"
                    },
                    {
                        "text": "热更新范例教程",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/hot-update.md"
                    },
                    {
                        "text": "热更新管理器",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/hot-update-manager.md"
                    },
                    {
                        "text": "HTTP 请求",
                        "collapsed": true,
                        "link": "/zh/advanced-topics/http.md"
                    },
                    {
                        "text": "WebSocket",
                        "link": "/zh/advanced-topics/websocket-introduction.md",
                        "collapsed": true,
                        "items": [
                            {
                                "text": "WebSocket 客户端",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/websocket.md"
                            },
                            {
                                "text": "WebSocket 服务器",
                                "collapsed": true,
                                "link": "/zh/advanced-topics/websocket-server.md"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
// Powered by CosmoLau