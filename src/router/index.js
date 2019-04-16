import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'

Vue.use(Router)


const login =  {
    path: '/login',
    name: 'login',
    component: ()=>import ('@/views/login.vue')
}

var admin = {
    path: '/',
    component: ()=>import ('@/views/admin.vue'),
    children:[
        {
            path: '/',
            name: 'dashboard',
            component: ()=>import ('@/views/demo.vue')
        },
        {
            path:'xitong',
            name:'xitong',
            component: () => import('@/views/Ping/xitong.vue')
        },{
            path:'caidan',
            name:'caidan',
            component: () => import('@/views/Ping/caidan.vue')
        },
        {
            path: 'Role',
            name: 'Role',
            component: () => import('@/views/Ping/Role.vue')
        },{
            path: 'User',
            name: 'User',
            component: () => import('@/views/Ping/User.vue'),
        },
        {
            path: 'quanXian',
            name: 'quanXian',
            component: () => import('@/views/Ping/quanXian.vue')
        },{
            path:'UserRole',
            name:'UserRole',
            component:()=>import('@/views/Ping/User/UserRole.vue')
        }
    ]
}

var router =new Router({
    mode: 'history',
    routes: [
       login,
       admin   
    ]
})

// 顶部加载条
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    // if (to.name!=='login'){
    //     if (store.getters.user_token===null){
    //         next('/login');
    //     }else{
    //         next();
    //     }
    // }
    next();
});
router.afterEach(route => {
    iView.LoadingBar.finish();
});

export default router;
