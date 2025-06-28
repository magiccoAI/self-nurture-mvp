# 自我养育项目 - 开发文档

## 项目概述

"自我养育"项目是一个帮助用户通过系统化的自我反思和知识积累，培养更加独立、成熟的自我的Web应用。该项目包含前端React应用和后端Flask API，提供了知识库、自我探索、成长追踪、资源收集和实践指南等功能模块。

## 技术栈

### 前端
- React 18
- TypeScript
- React Router
- Bootstrap & React-Bootstrap
- Axios

### 后端
- Flask
- Flask-CORS
- Python 3.11+

## 项目结构

```
self_nurturing_mvp/
├── frontend/                 # React前端应用
│   ├── public/               # 静态资源
│   ├── src/                  # 源代码
│   │   ├── components/       # 组件
│   │   │   ├── knowledge/    # 知识库相关组件
│   │   │   └── exploration/  # 自我探索相关组件
│   │   ├── pages/            # 页面组件
│   │   ├── App.tsx           # 主应用组件
│   │   ├── App.css           # 全局样式
│   │   └── index.tsx         # 入口文件
│   ├── package.json          # 依赖配置
│   └── tsconfig.json         # TypeScript配置
│
├── backend/                  # Flask后端应用
│   ├── src/                  # 源代码
│   │   ├── models/           # 数据模型
│   │   ├── routes/           # API路由
│   │   │   ├── user.py       # 用户相关API
│   │   │   ├── knowledge.py  # 知识库相关API
│   │   │   ├── exploration.py # 自我探索相关API
│   │   │   └── resources.py  # 资源收集相关API
│   │   ├── static/           # 静态资源
│   │   ├── templates/        # 模板文件
│   │   └── main.py           # 主应用入口
│   ├── venv/                 # 虚拟环境
│   └── requirements.txt      # 依赖配置
│
└── docs/                     # 项目文档
```

## 本地开发指南

### 前端开发

1. 安装依赖：
```bash
cd frontend
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

### 后端开发

1. 创建并激活虚拟环境：
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

2. 安装依赖：
```bash
pip install -r requirements.txt
```

3. 启动开发服务器：
```bash
python src/main.py
```

## API文档

### 用户API

- `GET /api/user/profile` - 获取用户资料
- `PUT /api/user/profile` - 更新用户资料
- `GET /api/user/settings` - 获取用户设置
- `PUT /api/user/settings` - 更新用户设置

### 知识库API

- `GET /api/knowledge/concepts` - 获取概念图谱
- `GET /api/knowledge/concepts/:id` - 获取单个概念详情
- `GET /api/knowledge/theories` - 获取理论基础
- `GET /api/knowledge/theories/:id` - 获取单个理论详情
- `GET /api/knowledge/resources` - 获取资源推荐
- `GET /api/knowledge/glossary` - 获取术语词典
- `GET /api/knowledge/search` - 搜索知识库

### 自我探索API

- `GET /api/exploration/timeline` - 获取成长历程
- `POST /api/exploration/timeline` - 添加成长历程事件
- `GET /api/exploration/assessments` - 获取评估结果
- `POST /api/exploration/assessments` - 添加评估结果
- `GET /api/exploration/journal` - 获取反思日志
- `POST /api/exploration/journal` - 添加反思日志
- `GET /api/exploration/dialogues` - 获取内在对话
- `POST /api/exploration/dialogues` - 添加内在对话

### 资源收集API

- `GET /api/resources/collections` - 获取资源收集
- `POST /api/resources/collections` - 创建资源收集
- `GET /api/resources/collections/:id` - 获取收集详情
- `GET /api/resources/items` - 获取资源项目
- `POST /api/resources/items` - 添加资源项目
- `GET /api/resources/recent` - 获取最近添加的资源
- `GET /api/resources/search` - 搜索资源

## Vercel部署指南

### 前端部署

1. 确保项目已推送到GitHub仓库

2. 在Vercel上导入项目：
   - 登录Vercel账户
   - 点击"New Project"
   - 选择GitHub仓库
   - 配置项目：
     - Framework Preset: Create React App
     - Root Directory: frontend
     - Build Command: npm run build
     - Output Directory: build

3. 点击"Deploy"开始部署

### 后端部署

由于Vercel主要支持静态网站和Serverless函数，对于Flask应用，有以下选项：

1. **使用Vercel Serverless Functions**：
   - 创建`api`目录
   - 将Flask路由转换为Serverless函数
   - 注意：这需要重构后端代码

2. **使用其他后端托管服务**：
   - Railway
   - Heroku
   - Render
   - PythonAnywhere

3. **使用静态数据模拟**：
   - 对于MVP阶段，可以在前端使用静态JSON数据模拟后端API

## 注意事项

1. **CORS配置**：
   - 后端已配置CORS支持跨域请求
   - 如果部署到不同域名，需确保CORS设置正确

2. **环境变量**：
   - 使用`.env`文件管理环境变量
   - 不要将敏感信息提交到代码仓库

3. **依赖管理**：
   - 前端：确保`package.json`中的依赖版本兼容
   - 后端：确保`requirements.txt`中的依赖版本兼容

4. **TypeScript配置**：
   - 确保`tsconfig.json`配置正确
   - 避免使用React Native特定的类型定义

5. **响应式设计**：
   - 确保网站在不同设备上显示正常
   - 使用Bootstrap的响应式栅格系统

## 未来扩展

1. 用户认证系统
2. 数据持久化存储
3. 社区功能
4. 个性化推荐
5. 进度追踪与统计分析
