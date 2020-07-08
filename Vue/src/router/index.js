import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import NotFound from '@/pages/NotFound'

console.log('process.env:',process.env.NODE_ENV)

const router = new VueRouter({
    // 路由模式
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
    routes:[
        {
            path:'/home',
            name:'home',
            component:Home,
           
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/reg',
            component:Reg
        },
        {
            path:'/',
            redirect:{name:'home'}
        },

        // 404
        {
            path:'*',
            component:NotFound
        }
    ]
})

// 路由拦截
router.beforeEach((to,from,next)=>{
    // 页面权限访问控制
    if(to.meta.requireAuth){
        // 判断是否登录
        if(sessionStorage.getItem('token')){
        // 校验token是否过期
           fetch('/verify').then(res=>{
                if(res.code === 400){
                    next({
                        path:'/login'
                    })
                }
            }) 
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }else{
        next();
    }

})
// router.afterEach()

export default router;