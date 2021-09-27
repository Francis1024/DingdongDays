import loadable from '@loadable/component'
import Layout, { H5Layout } from '@/layouts'
import { RouteConfig } from 'react-router-config'
import Home from '@/pages/home'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  // APP 路由
  {
    path: '/hybird',
    exact: true,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/hybird'))
      }
    ]
  },
  // H5 相关路由
  {
    path: '/h5',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: loadable(() => import('@/pages/h5'))
      }
    ]
  },
  {
    path: '/my',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/my'))
      }
    ]
  },
  {
    path: '/user/login',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/user/login'))
      }
    ]
  },
  {
    path: '/user/register',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/user/register'))
      }
    ]
  }
]

export default routesConfig
