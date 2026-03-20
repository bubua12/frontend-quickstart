# 1、什么是npm
npm 是 nodejs 里面进行包管理的工具


配置 npm
```shell
npm config set registry https://registry.npmmirror.com  //设置国内镜像源
npm config get registry  //查看镜像源
```

常用命令
```shell

npm init： 项目初始化；
npm init -y：默认一路yes，不用挨个输入信息
npm install 包名：安装js包到项目中（仅当前项目有效）。指定 包名，或者 包名@版本号
npm install -g： 全局安装，所有都能用
npm update 包名：升级包到最新版本
npm uninstall 包名：卸载包
npm run：项目运行
```

