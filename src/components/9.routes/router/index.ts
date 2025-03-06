// 创建并暴露一个路由器

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
    },
    {
      path: '/news',
      name: 'xinwen',
      component: () => import('../pages/News.vue'),
      children:[{
        path: 'detail',
        name: 'detail',
        component: () => import('../pages/Detail.vue'),
      }]
    },
    {
      path: '/newsParams',
      name: 'newsParams',
      component: () => import('../pages/NewsParams.vue'),
      children:[{
        path: 'detail/:id/:title/:content',
        name: 'detailParams',
        component: () => import('../pages/DetailParams.vue'),
      }
    ]
    },
    {
      path: '/newsProps',
      name: 'newsProps',
      component: () => import('../pages/NewsProps.vue'),
      children:[{
        path: 'detail/:id/:title/:content',
        name: 'detailProps',
        component: () => import('../pages/DetailProps.vue'),
        // 将路由收到的所有params参数传给props
        // props: true,
        
        // 自己决定什么传给props
        props(route){
          return {
            // 也可以传递query参数
            id: route.params.id,
            title: route.params.title,
            content: route.params.content,
          }
        }
      }
    ]
    },
    {
      path: '/newsFuncRoute',
      name: 'newsFuncRoute',
      component: () => import('../pages/NewsFuncRoute.vue'),
      children:[{
        path: 'detail/:id/:title/:content',
        name: 'detailProps',
        component: () => import('../pages/DetailProps.vue'),
        // 将路由收到的所有params参数传给props
        props: true,
      }
    ]
    },
    {
      path: '/about',
      name: 'guanyu',
      component: () => import('../pages/About.vue'),
    }
  ]
})

export default router