# React项目

## 目录结构
* src
    * index.js  入口文件
    * App.js
    * components    组件
        * List
        * ...
    * layout    布局
    * pages     页面文件夹
        * Home
            * index.js
            * ....
        * List
        * Login
        * Reg
    * store     redux
    * utils     工具包
    * assets    静态资源文件夹
* public    服务器根目录

## 团队协作
* 服务器访问的问题
* git代码共享问题
    * 服务器：github
    * git分支
        * master    主分支，一般用于发布版本
        * release   未测试的待发布版本
        * hotfix    线上bug修复分支
        * dev       开发分支，用户合并每个开发人员的代码

        * 个人分支
            * laoxie
            * jingjing
            * dingding
* git命令
    * git branch
    * git merge
    * git push
    ```bash
        git push origin master:master
        git push origin dev
    ```
    * git pull
    ```bash
        git pull origin master:master
    ```

## 团队组件
* 3~4人一组
* 选项目负责人
* 选一个项目
* 提供github账号