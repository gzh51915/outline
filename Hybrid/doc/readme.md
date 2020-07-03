# 混合开发

* webApp

* nativeApp

* HybridApp
    * Native主导（android||iOS工程师）
        * h5调用native接口
        * native调用h5的接口
        > 两种方式都是通过window这个全局对象作为桥梁进行接口调用
    ```js
        btn.onclick = ()=>{
            // app.exit();
            moxiu.exit()
        }

        function getData(){

        }

        window.jsBridge = {
            getData
            ....
        }
    ```
    * H5主导Container
        * 打包
            * 本地打包（安装环境）
                * Phonegap/Cordova
                    * Cordova作为Native Container给我们提供硬件设备调用接口
            * 云打包（不需要安装环境）
                * Dcloud
                    * DCloud平提供接口（5+runtime）与服务器
                * APICloud
                    * DCloud平提供接口与服务器

### H5+接口的使用
h5+提供了一个全局的对象：plus
```js
    plus.camera.getCamera()

```