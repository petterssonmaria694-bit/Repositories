# 个人作品集 · 王宇恒

一个手绘粉彩风格的个人作品集网站，基于 React + Vite + Tailwind CSS 构建。页面采用便签纸卡、胶带、手绘涂鸦等温暖视觉元素，展示个人介绍、作品与联系方式。

## 主要功能

- **欢迎首页**：首屏介绍 + 技能标签、三个二级页入口卡片、联系方式
- **个人介绍**：技能进度条、技能标签墙、项目经历时间线
- **作品展示**：精选项目卡片（技术栈、日期、简介）
- **关于我**：个人自述、数据统计卡片、兴趣标签
- **深浅主题切换**：浅色粉彩 / 深色星空双主题，切换按钮在导航栏，选择通过 `localStorage` 持久化
- **响应式布局**：兼容桌面端与移动端，移动端使用汉堡菜单
- **单文件成品**：构建后生成可直接双击打开的单文件 HTML

## 技术栈

- React 19 + React Router（HashRouter，静态文件无需服务端配置）
- Vite 8 + vite-plugin-singlefile（打包单文件）
- Tailwind CSS 4（自定义粉彩色板，通过 CSS 变量实现主题切换）
- Framer Motion（滚动动效、入场动画）

## 运行方式

```bash
# 安装依赖
npm install

# 开发调试（自动打开 http://localhost:5173）
npm run dev

# 构建生产版本，并生成单文件成品「个人主页.html」
npm run build

# 本地预览构建产物
npm run preview
```

构建后的 `个人主页.html` 位于项目根目录，可直接双击用浏览器打开。

## 目录结构

```
src/
├── components/        # 导航栏、页脚、页头、滚动动画等公共组件
├── pages/             # 页面：Welcome / Intro / Works / About
├── hooks/             # useTheme：主题切换与持久化
├── main.jsx           # 应用入口
├── App.jsx            # 路由与页面布局
└── index.css          # Tailwind 主题定义（浅色粉彩 / 深色星空）
```