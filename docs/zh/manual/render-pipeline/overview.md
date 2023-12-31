# 渲染管线概述 (Experimental)

RenderPipeline 用于控制场景的渲染流程，包括光照管理、物体剔除、渲染物体排序、渲染目标切换等。由于每个阶段对于不同项目来说可以有不同的优化处理方式，所以用统一的方法来处理不同类型项目的渲染流程很难达到最优化的结果。可定制化的渲染管线用于对渲染场景中的每个阶段进行更灵活的控制，可以针对不同的项目做更深层次的优化方案。

在可定制化的渲染管线中，可以选择使用引擎内置的渲染管线，内置渲染管线包括 **前向渲染管线** 和 **延迟渲染管线**，引擎默认使用前向渲染管线。详情请参考 [内置渲染管线](builtin-pipeline.md)。

<!--
开发者也可以创建一个新的渲染管线资源，用于自行扩展渲染管线。在渲染管线资源中可以管理渲染流程中每个阶段的工作，然后可以在编辑器中对各个参数进行设置。详情请参考：

- [自定义渲染管线](user-pipeline.md)

- [后期处理](post-process.md)
-->
