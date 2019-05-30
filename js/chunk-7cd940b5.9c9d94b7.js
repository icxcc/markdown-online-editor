(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cd940b5"],{"2a45":function(n,e,t){},"849d":function(n,e,t){"use strict";var a=t("2a45"),o=t.n(a);o.a},a1d1:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.isLoading,expression:"isLoading"}],staticClass:"about-arya"},[t("div",{attrs:{id:"arya-vditor"}})])},o=[],i=(t("96cf"),t("3b8d")),r=t("ff41"),d=t.n(r),c='# [Arya](https://markdown.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya) - 在线 Markdown 编辑器\n\n[Arya](https://markdown.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya)，是一款基于 [Vue](https://nicelinks.site/post/5b1a221c0526c920d6dfaada)、[Vditor](https://hacpai.com/tag/vditor/?utm_source=markdown.lovejade.cn)，为未来而构建的在线 [Markdown](https://nicelinks.site/tags/Markdown/?utm_source=markdown.lovejade.cn&pid=about-arya) 编辑器；轻量且强大：内置粘贴 HTML 自动转换为 Markdown，支持流程图、甘特图、时序图、任务列表，可导出携带样式的图片、PDF、微信公众号特制的 HTML 等等。\n\n>**微注**：[Arya](https://markdown.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya) 另一大优点在于：编辑内容只会在您本地进行保存，不会上传您的数据至服务器，**绝不窥测用户个人隐私，可放心使用**；Github 源码：[markdown-online-editor](https://github.com/nicejade/markdown-online-editor)，部分功能仍在开发🚧，敬请期待。\n\n**背景初衷**：早期就有关注到由[黑客派](https://hacpai.com/?utm_source=markdown.lovejade.cn&pid=about-arya)所出品的 [Vditor](https://hacpai.com/tag/vditor?utm_source=markdown.lovejade.cn&pid=about-arya)：一款为未来而构建的下一代 [Markdown](https://nicelinks.site/tags/Markdown/?utm_source=markdown.lovejade.cn&pid=about-arya) 编辑器。然，现而今市面上所存在的 [Markdown](https://nicelinks.site/tags/Markdown/?utm_source=markdown.lovejade.cn) 编辑器，或多或少都存在一些问题（或功能不全，或高级功能收费...），因此基于自身所需，加之 [Vditor](https://hacpai.com/tag/vditor?utm_source=markdown.lovejade.cn) 的强大，就诞生了做一款[在线 Markdown 编辑器](https://markdown.lovejade.cn/?utm_source=github.com) 的念头；取其名曰 [`Arya`（二丫）](https://quickapp.lovejade.cn/talking-game-of-thrones/?utm_source=markdown.lovejade.cn)。\n\n<div align="center">\n  <a href="https://circleci.com/gh/nicejade/markdown-online-editor">\n    <img src="https://circleci.com/gh/nicejade/markdown-online-editor/tree/master.svg?style=svg" alt="Build Status">\n  </a>\n  <a href="https://nodejs.org/en/">\n    <img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-green.svg" alt="node version">\n  </a>\n  <a href="https://github.com/nicejade/markdown-online-editor">\n    <img src="https://img.shields.io/github/license/nicejade/markdown-online-editor.svg" alt="LICENSE">\n  </a>\n  <a href="https://nicelinks.site/post/5c16083e819ae45de1453caa">\n    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">\n  </a>\n  <a href="https://weibo.com/aryamarkdown">\n    <img src="https://img.shields.io/badge/WeiBo-aryamarkdown-red.svg?style=flat" alt="Prettier">\n  </a>\n  <a href="https://aboutme.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya">\n    <img src="https://img.shields.io/badge/Author-nicejade-%23a696c8.svg" alt="Author nicejade">\n  </a>\n</div>\n\n------\n\n## 什么是 Markdown\n\n[Markdown](https://nicelinks.site/tags/Markdown/?utm_source=markdown.lovejade.cn&pid=about-arya) 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号，以最小的输入代价，生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，**粗体**、*斜体* 或者[超文本链接](https://vue-cli3.lovejade.cn/explore/)，更棒的是，它还可以：\n\n### 1. 制作待办事宜 `Todo` 列表\n\n- [x] 🎉 通常 `Markdown` 解析器自带的基本功能；\n- [x] 🍀 支持**流程图**、**甘特图**、**时序图**、**任务列表**；\n- [x] 🏁 支持粘贴 HTML 自动转换为 Markdown；\n- [x] 💃🏻 支持插入原生 Emoji、设置常用表情列表；\n- [x] 🚑 支持编辑内容保存**本地存储**，防止意外丢失；\n- [x] 📝 支持**实时预览**，主窗口大小拖拽，字符计数；\n- [x] 🛠 支持常用快捷键(**Tab**)，及代码块添加复制\n- [x] ✨ 支持**导出**携带样式的PDF、PNG、JPEG 等；\n- [ ] 🚧 支持转换 Markdown 到**微信特制的 HTML**；\n- [ ] 🚧 内置多种漂亮样式，并且支持用户**自定义**；\n\n### 2. 书写一个质能守恒公式[^LaTeX]\n\n$$E=mc^2$$\n\n### 3. 高亮一段代码[^code]\n\n```js\n// 给页面里所有的 DOM 元素添加一个 1px 的描边（outline）;\n[].forEach.call($$("*"),function(a){\n  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16);\n})\n```\n\n### 4. 高效绘制[流程图](https://github.com/knsv/mermaid#flowchart)\n\n```\ngraph TD;\n  A--\x3eB;\n  A--\x3eC;\n  B--\x3eD;\n  C--\x3eD;\n```\n\n```mermaid\ngraph TD;\n  A--\x3eB;\n  A--\x3eC;\n  B--\x3eD;\n  C--\x3eD;\n```\n\n### 5. 高效绘制[序列图](https://github.com/knsv/mermaid#sequence-diagram)\n\n```\nsequenceDiagram\n  participant Alice\n  participant Bob\n  Alice->John: Hello John, how are you?\n  loop Healthcheck\n      John->John: Fight against hypochondria\n  end\n  Note right of John: Rational thoughts <br/>prevail...\n  John--\x3eAlice: Great!\n  John->Bob: How about you?\n  Bob--\x3eJohn: Jolly good!\n```\n\n```mermaid\nsequenceDiagram\n  participant Alice\n  participant Bob\n  Alice->John: Hello John, how are you?\n  loop Healthcheck\n      John->John: Fight against hypochondria\n  end\n  Note right of John: Rational thoughts <br/>prevail...\n  John--\x3eAlice: Great!\n  John->Bob: How about you?\n  Bob--\x3eJohn: Jolly good!\n```\n\n### 6. 高效绘制[甘特图](https://github.com/knsv/mermaid#gantt-diagram)\n\n>**甘特图**内在思想简单。基本是一条线条图，横轴表示时间，纵轴表示活动（项目），线条表示在整个期间上计划和实际的活动完成情况。它直观地表明任务计划在什么时候进行，及实际进展与计划要求的对比。\n\n```\ngantt\n  title 项目开发流程\n  section 项目确定\n    需求分析       :a1, 2019-06-22, 3d\n    可行性报告     :after a1, 5d\n    概念验证       : 5d\n  section 项目实施\n    概要设计      :2019-07-05  , 5d\n    详细设计      :2019-07-08, 10d\n    编码          :2019-07-15, 10d\n    测试          :2019-07-22, 5d\n  section 发布验收\n    发布: 2d\n    验收: 3d\n```\n\n```mermaid\n  gantt\n    title 项目开发流程\n    section 项目确定\n      需求分析       :a1, 2019-06-22, 3d\n      可行性报告     :after a1, 5d\n      概念验证       : 5d\n    section 项目实施\n      概要设计      :2019-07-05  , 5d\n      详细设计      :2019-07-08, 10d\n      编码          :2019-07-15, 10d\n      测试          :2019-07-22, 5d\n    section 发布验收\n      发布: 2d\n      验收: 3d\n```\n\n### 7. 绘制表格\n\n| 作品名称        | 在线地址   |  上线日期  |\n| :--------  | :-----  | :----:  |\n| 倾城之链 | [https://nicelinks.site](https://nicelinks.site/??utm_source=markdown.lovejade.cn) |2017-09-20|\n| 晚晴幽草轩 | [https://jeffjade.com](https://jeffjade.com/??utm_source=markdown.lovejade.cn) |2014-09-20|\n| 静轩之别苑 | [http://quickapp.lovejade.cn](http://quickapp.lovejade.cn/??utm_source=markdown.lovejade.cn) |2019-01-12|\n\n### 8. 更详细语法说明\n\n想要查看更详细的语法说明，可以参考这份 [Markdown 资源列表](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/markdown-tutorial.md)，涵盖入门至进阶教程，以及资源、平台等信息，能让您对她有更深的认知。\n\n总而言之，不同于其它*所见即所得*的编辑器：你只需使用键盘专注于书写文本内容，就可以生成印刷级的排版格式，省却在键盘和工具栏之间来回切换，调整内容和格式的麻烦。**Markdown 在流畅的书写和印刷级的阅读体验之间找到了平衡。** 目前它已经成为世界上最大的技术分享网站 `GitHub` 和 技术问答网站 `StackOverFlow` 的御用书写格式，而且越发流行，正在在向各行业渗透。\n\n---\n\n## 相关链接\n\n- [**倾城之链**](https://nicelinks.site?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [About Me](https://about.me/nicejade?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [个人博客](https://jeffjade.com/nicelinks?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [静轩之别苑](https://quickapp.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [静晴轩别苑](https://nice.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [吾意静晴轩](https://docz.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [天意人间舫](https://blog.lovejade.cn/?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [新浪微博](https://weibo.com/jeffjade?utm_source=markdown.lovejade.cn&pid=about-arya)\n- [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)\n- [简书主页](https://www.jianshu.com/u/9aae3d8f4c3d)\n- [SegmentFault](https://segmentfault.com/u/jeffjade)\n- [Twitter](https://twitter.com/nicejadeyang)\n- [Facebook](https://www.facebook.com/nice.jade.yang)\n\n| 微信公众号 | 前端微信群 | 推荐 Web 应用 |\n| :-------------: | :-------------: | :-------------: |\n| 😉 静晴轩 | ✨ 大前端联盟   | 🎉 倾城之链 |\n| <img src="https://image.nicelinks.site/qrcode_jqx.jpg" alt="静晴轩" width="200px" /> | <img src="https://image.nicelinks.site/wqycx-weixin.png?ver=1" alt="倾城之链" width="200px" /> | <img src="https://image.nicelinks.site/nice-links.png" width="200px" alt="倾城之链"></img> |\n',s={name:"about-arya",data:function(){return{isLoading:!0}},created:function(){},components:{},mounted:function(){var n=this;this.initVditor(),this.$nextTick(Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=document.getElementsByClassName("vditor-textarea"),t[0].style.display="none",e.next=4,n.vditor.getHTML(!0);case 4:n.isLoading=!1;case 5:case"end":return e.stop()}},e)})))},methods:{initVditor:function(){var n={cache:!1,width:"61.8%",preview:{delay:1e3,show:!0}};this.vditor=new d.a("arya-vditor",n),this.vditor.setValue(c)}}},l=s,u=(t("849d"),t("2877")),m=Object(u["a"])(l,a,o,!1,null,null,null);e["default"]=m.exports}}]);