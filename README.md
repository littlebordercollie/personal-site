# 边牧AI · 刘旭个人网站

`ailiuxu.com` 的静态个人网站。首页服务于企业负责人、培训负责人和业务负责人快速判断：刘旭主要解决什么问题、从什么合作开始、做过哪些真实工作，以及怎样联系。

## 正式路由

- `/`：30 秒判断首页与完整主案例。
- `/projects/`：完整案例、可运行原型与公开实践。
- `/intro/`：可复制的商务、讲师、作者和项目介绍资料。
- `/writing/`：精选文章摘要与原始发布页入口。
- `/contact/`：合作方式与第一次沟通需要准备的信息。

旧版 `/a/`、`/b/`、`/c/` 和 `/compare/` 不参与预渲染与站点地图；生产环境由 Nginx 永久跳转到新版首页。

## 技术结构

- React 19、TypeScript、Vite。
- 静态服务端渲染（SSR）后预渲染为可直接读取的 HTML。
- 统一内容源：`src/siteData.ts`。
- 页面元数据与结构化数据：`src/entry-server.tsx`。
- 站点地图生成：`scripts/prerender.mjs`。
- 生产 Nginx 配置：`ops/nginx-personal-site.conf`。
- 原子替换与失败回滚：`ops/deploy-static-root.sh`。

## 本地开发

```bash
npm install
npm run dev
```

正式构建与预览：

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

构建会生成 `dist/`、16 个正式路由、`404.html` 和 `sitemap.xml`。

## 发布包

```bash
./deploy.sh
```

脚本会重新构建并生成：

- `ops/personal-site-dist.tar.gz`
- 对应的 SHA-256 校验值

服务器端发布脚本需要三个参数：发布包路径、SHA-256 和发布编号。发布前先部署并验证 Nginx 配置，再执行内容替换。

## 内容与隐私规则

- `ailiuxu.com` 是唯一规范域名，`liuxu.wiki` 永久跳转到主域名。
- 联系方式只使用 `vencent_2008@126.com`。
- 企业案例不发布企业原始表格、聊天记录、学员名单或敏感业务数据。
- 公开图片不得包含身份证号、手机号、证书编号、内部地址或证件查询二维码。
- 完整案例、可运行原型和公开实践必须使用不同类型，不得把功能验收写成业务效果。
- 对外页面不渲染发布审批、归档、授权或内部证据状态。

## 验收

发布前至少执行：

```bash
npm run build
npm run lint
bash -n deploy.sh ops/deploy-static-root.sh
```

浏览器验收覆盖 1440×900、1280×800、390×844 和 360×800。当前 V3.1 的验收记录位于 `qa/v3/`。
