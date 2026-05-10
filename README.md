# FluxPress

<div align="center">

<img src="https://fluxpress.github.io/logo-mini.png" alt="FluxPress Logo" width="120" />

**围绕 GitHub 生态构建的静态站点生成器**

通过 GitHub 写作，无需管理数据

[![npm version](https://img.shields.io/npm/v/fluxpress?color=blue)](https://www.npmjs.com/package/fluxpress)
[![license](https://img.shields.io/npm/l/fluxpress)](https://github.com/fluxpress/fluxpress/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20.9.0-brightgreen)](https://nodejs.org/)

[在线演示](https://www.laoliang.ink) · [快速开始](#-快速开始) · [文档](https://fluxpress.github.io/)

</div>

---

## ✨ 特性

- 📝 **GitHub 原生写作** - 使用 GitHub Issues 写作，无需管理本地 Markdown 文件
- 🔄 **多维数据源** - 支持从 Issues、Users、Milestones 等多个 GitHub 模块提取数据
- 🎨 **灵活主题系统** - 官方和社区主题,适配博客、文档、营销等多种场景
- 🔌 **可扩展插件** - 通过插件系统集成第三方服务,扩展站点功能
- ⚡️ **快速构建** - 高效的数据获取和静态站点生成流程
- 🛠️ **零配置开箱即用** - 通过 CLI 工具快速初始化和构建
- 📦 **Markdown 增强** - 支持代码高亮、图表、脚注等扩展语法

## 🚀 快速开始

### 前置要求

- Node.js >= 20.9.0
- GitHub 账号和仓库(用于存储内容)

### 创建项目

使用官方脚手架工具快速创建:

```bash
npm create fluxpress@latest
```

按照交互式提示配置:

```
✔ Project name: … your-fluxpress-project
✔ Repository owner: … your-github-username
✔ Repository name: … your-repo-name
✔ Select a theme (Channel): › Official
✔ Select a theme: › classic
```

### 构建和预览

```bash
cd your-fluxpress-project
npm install

# 从 GitHub 拉取数据
npx fluxpress fetch

# 生成静态站点
npx fluxpress generate

# 本地预览
npx fluxpress preview
```

访问 `http://localhost:9895` 查看你的站点!

## 📖 核心概念

### 基于 GitHub 的内容管理

FluxPress 将 GitHub 作为内容后端:

- **Issues** → 博客文章
- **Labels** → 文章分类/标签
- **Milestones** → 文章系列/专题
- **Comments** → 文章评论
- **Users** → 作者信息

通过 GitHub 的版本控制、协作和讨论功能,实现高效的内容管理。

### 工作流程

```
GitHub 仓库 → fluxpress fetch → 本地数据(JSON)
                                      ↓
                              fluxpress generate / 生成
                                      ↓
                              静态站点(HTML/CSS/JS)
                                      ↓
                              fluxpress preview / 本地预览
```

## 📦 生态系统

FluxPress 采用模块化架构,核心功能分布在多个包中:

| 包名 | 版本 | 描述 |
|------|------|------|
| [fluxpress](https://www.npmjs.com/package/fluxpress) | ![npm](https://img.shields.io/npm/v/fluxpress) | 主包,聚合 CLI 和核心功能 |
| [@fluxpress/core](https://github.com/fluxpress/core) | ![npm](https://img.shields.io/npm/v/@fluxpress/core) | 核心引擎,数据获取和处理逻辑 |
| [@fluxpress/cli](https://github.com/fluxpress/cli) | ![npm](https://img.shields.io/npm/v/@fluxpress/cli) | 命令行工具(fetch/generate/preview) |
| [create-fluxpress](https://www.npmjs.com/package/create-fluxpress) | ![npm](https://img.shields.io/npm/v/create-fluxpress) | 项目脚手架,快速初始化 |

### 官方主题

| 主题 | 描述 |
|------|------|
| [@fluxpress/theme-classic](https://github.com/fluxpress/theme-classic) | 经典博客主题 |
| [@fluxpress/theme-doclite](https://github.com/fluxpress/theme-doclite) | 轻量文档主题 |

## 🔧 配置

项目根目录的 `fluxpress.config.js`:

```javascript
export default {
  github: {
    owner: 'your-github-username',  // GitHub 用户名或组织名
    repo: 'your-repo-name',         // 仓库名
  },
  theme: 'classic',                 // 主题名称
}
```

### 环境变量

创建 `.env` 文件:

```bash
GITHUB_TOKEN=your_github_personal_access_token
```

> **提示**: 虽然公开仓库可以不设置 token,但配置后可提高 API 速率限制(从 60次/小时 提升到 5000次/小时)

## 📚 文档

完整文档请访问: [https://fluxpress.github.io](https://fluxpress.github.io)

- [什么是 FluxPress](https://fluxpress.github.io/guide/what-is-fluxpress)
- [快速开始](https://fluxpress.github.io/guide/getting-started)
- [站点配置](https://fluxpress.github.io/guide/fluxpress-config)
- [主题配置](https://fluxpress.github.io/guide/theme-config)
- [Markdown 扩展](https://fluxpress.github.io/guide/markdown)
- [部署指南](https://fluxpress.github.io/guide/deploy)
- [API 参考](https://fluxpress.github.io/reference/fluxpress)

## 🎯 设计理念

FluxPress 的核心理念是**充分利用 GitHub 生态系统**:

1. **内容即数据** - GitHub Issues 不仅是问题追踪工具，也是天然的内容管理系统、优秀的文章在线编辑器、图床…
2. **协作优先** - 利用 GitHub 的协作功能(评论、PR、讨论)进行内容协作
3. **开放生态** - 主题和插件系统支持社区扩展

未来计划支持更多 GitHub 数据源:

- GitHub Discussions → 论坛/问答
- GitHub Projects → 项目展示
- GitHub Releases → 更新日志
- GitHub Sponsors → 赞助者页面

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议!

- [贡献指南](https://fluxpress.github.io/guide/contribute)
- [问题反馈](https://github.com/fluxpress/fluxpress/issues)
- [路线图](https://fluxpress.github.io/guide/roadmap)

## 📄 开源协议

[MIT](LICENSE) © [liangpengyv](https://github.com/liangpengyv)

---

<div align="center">

**[FluxPress 组织](https://github.com/fluxpress)** · **[官方网站](https://fluxpress.github.io)**

如果这个项目对你有帮助,请给我们一个 ⭐️

</div>
