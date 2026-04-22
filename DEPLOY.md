# CausalMM 网站部署说明

## 方式一：Vercel 一键部署（推荐，5分钟搞定）

### 步骤 1：安装 Vercel CLI
在命令行中运行：
```bash
npm install -g vercel
```

### 步骤 2：登录 Vercel
```bash
vercel login
```
用 GitHub/Google/Email 账号登录

### 步骤 3：部署
进入网站文件夹，运行：
```bash
cd causalmm_website
vercel
```
按照提示操作，选择默认选项即可。

### 步骤 4：正式上线
```bash
vercel --prod
```
执行后你会获得一个 `.vercel.app` 域名，全世界都可以访问！

---

## 方式二：通过 GitHub 部署（适合长期维护）

### 步骤 1：创建 GitHub 仓库
1. 访问 https://github.com
2. 点击右上角 + → New repository
3. 仓库名：`causalmm-website`
4. 选择 Public
5. 点击 Create repository

### 步骤 2：上传网站文件
将 `causalmm_website` 文件夹中的**所有文件**上传到 GitHub 仓库

### 步骤 3：连接 Vercel
1. 访问 https://vercel.com
2. 用 GitHub 账号登录
3. 点击 "Import Project"
4. 选择刚创建的仓库
5. 点击 Deploy

等待 1-2 分钟，网站就上线了！

---

## 方式三：Netlify 部署（更简单）

### 步骤 1：访问 Netlify
打开 https://app.netlify.com/drop

### 步骤 2：直接拖拽
将 `causalmm_website` 文件夹**直接拖拽**到网页上

### 步骤 3：完成！
自动生成一个 `.netlify.app` 域名，立即可用！

---

## 自定义域名（可选）

部署后可以在 Vercel/Netlify 后台绑定自己的域名：
- 需要一个域名（如 `yourname.com`）
- 在域名服务商处添加 DNS 记录
- 等待几分钟生效

---

## 文件夹结构说明

```
causalmm_website/
├── index.html      # 首页
├── method.html     # 方法解析
├── results.html    # 实验结果
├── demo.html       # 在线演示
├── style.css       # 样式文件
├── main.js         # JavaScript
└── vercel.json     # Vercel 配置文件
```

所有页面都已包含导航栏，可以互相跳转。
