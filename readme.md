## 模块联邦

### 1.动机

- Module Federation 的动机是为了不同开发小组间共同开发一个或者多个应用
- 应用将被划分为更小的应用块，一个应用块，可以是比如头部导航或者侧边栏的前端组件，也可以是数据获取逻辑的逻辑组件
- 每个应用块由不同的组开发
- 应用或应用块共享其他其他应用块或者库

![1608392171072](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f15b0cb967cc48dbb3af11929b11c9c9~tplv-k3u1fbpfcp-zoom-1.image)

### 2.Module Federation

- 使用 Module Federation 时，每个应用块都是一个独立的构建，这些构建都将编译为容器
- 容器可以被其他应用或者其他容器应用
- 一个被引用的容器被称为`remote`, 引用者被称为`host`，`remote`暴露模块给`host`, `host`则可以使用这些暴露的模块，这些模块被成为`remote`模块

![1608722799323](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb7e7e683008432dad49c5f0fdac93a3~tplv-k3u1fbpfcp-zoom-1.image)

### 3.实战

#### 配置参数

| 字段     | 类型   | 含义                                                                   |
| -------- | ------ | ---------------------------------------------------------------------- |
| name     | string | 必传值，即输出的模块名，被远程引用时路径为${name}/${expose}            |
| library  | object | 声明全局变量的方式，name 为 umd 的 name                                |
| filename | string | 构建输出的文件名                                                       |
| remotes  | object | 远程引用的应用名及其别名的映射，使用时以 key 值作为 name               |
| exposes  | object | 被远程引用时可暴露的资源路径及其别名                                   |
| shared   | object | 与其他应用之间可以共享的第三方依赖，使你的代码中不用重复加载同一份依赖 |

shared 不保证版本的一致
如 remote 里 react17,host 里 react16,它们可以共存. 当版本不同,会选取更高的版本

#### 启动

```bash
cd remote
npm start

cd host
npm start
```

### 微前端

- 模块联邦可以实现微前端,可能会取代乾坤
- [emp](https://github.com/efoxTeam/emp)(一个微前端框架) 用的就是模块联邦
  yy 语音 的技术前端方案叫 emp

原理都是动态 import
loadablecomponent

项目模块共享
有很多方案 npm
[ModuleFederationWebpack5](https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md)

lerna init

其实原理就是利用了 jsonp,加载完读取了 window 的变量,然后使用
